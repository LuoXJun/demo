<template>
    <div class="menuTree">
        <el-button @click="dialogTableVisible = true">添加路由</el-button>
        <el-tree
            ref="menuRef"
            style="max-width: 600px"
            :data="store.menu"
            show-checkbox
            node-key="component"
            :default-checked-keys="defaultCheckedKeys"
            :props="defaultProps"
            check-strictly
            @check-change="checkChange"
        />
        <el-dialog
            v-model="dialogTableVisible"
            :close-on-click-modal="false"
            draggable
            title="新增路由"
            width="800"
            style="height: 400px"
        >
            <baseForm
                ref="formRef"
                v-model="form"
                :form-item-list="formConfig"
                :layout="{
                    xl: 12,
                    lg: 12,
                    md: 12,
                    sm: 12,
                    xs: 12
                }"
            >
                <template #footer="{ data }">
                    <el-button type="primary" @click="onAdd(data)">添加路由</el-button>
                </template>
            </baseForm>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore';
import baseForm from '@/components/base-form/baseForm.vue';
import { formConfig } from './config';
import { ElMessage } from 'element-plus';

const store = useMenuStore();
const menuRef = ref();
const dialogTableVisible = ref(false);
const form = ref<RouteOptions & { parent?: string }>({
    parent: '/',
    path: '123',
    name: '521',
    title: '新增路径',
    component: '52',
    icon: 'Edit',
    type: 'link',
    isHidden: false
});

const defaultProps = {
    children: 'children',
    label: 'title'
};

// 将全部路由提升到第一级，方便检索
const getFlatMenus = (menus: RouteOptions[]): RouteOptions[] => {
    const flatMenus: RouteOptions[] = [];
    menus.forEach((menu) => {
        flatMenus.push(menu);

        if (menu.type === 'menu') {
            flatMenus.push(...getFlatMenus(menu.children!));
        }
    });
    return flatMenus;
};

// 根据isHidden设置默认选中项
const getDefaultCheckedKeys = () => {
    const flatMenus = getFlatMenus(store.menu);

    const keys = flatMenus.map((item) => {
        if (item.isHidden !== true) return item.component ?? '';
        else return '';
    });
    return keys;
};
const defaultCheckedKeys = getDefaultCheckedKeys();

// 当切换显隐时刷新路由和菜单
const checkChange = (data: RouteOptions, isChecked: boolean) => {
    data.isHidden = !isChecked;

    store.refreshMenu = true;
    store.isNeedUpdate = true;
};

// 选择父级菜单需要受到限制，只有type==='menu'或者是首页才能添加
const refreshParentNode = () => {
    const flatMenus = getFlatMenus(store.menu);

    const menus = flatMenus
        .filter((menu) => menu.type === 'menu')
        .map((menu) => {
            return { label: menu.title, value: menu.component };
        });

    formConfig.forEach((item) => {
        if (item.filed === 'parent')
            item.select!.options = [{ label: '首页', value: '/' }, ...menus];
    });
};
refreshParentNode();

// 提交新的路由
const onAdd = (data: any) => {
    data.validate().then(() => {
        const flatMenus = getFlatMenus(store.menu);

        for (const item of flatMenus) {
            if (item.component === form.value.component || item.name === form.value.name) {
                return ElMessage.warning('组件路径或路由重复');
            }
        }

        if (form.value.parent === '/') {
            const obj = Object.assign({}, form.value);
            delete obj.parent;
            if (form.value.type === 'menu') obj.children = [];
            store.menu.push(obj);
        }

        for (const item of flatMenus) {
            if (item.component === form.value.component || item.name === form.value.name) {
                return ElMessage.warning('组件路径或路由重复');
            }
            if (item.component === form.value.parent) {
                const obj = Object.assign({}, form.value);
                delete obj.parent;
                item.children!.push(obj);
            }
        }

        setTimeout(() => {
            menuRef.value.setChecked(form.value.component, !form.value.isHidden);
            store.refreshMenu = true;
            store.isNeedUpdate = true;
        }, 100);

        dialogTableVisible.value = false;
        refreshParentNode();
    });
};
</script>

<style scoped></style>
