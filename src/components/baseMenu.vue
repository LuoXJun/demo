<!-- 在当前组件递归渲染数据 -->
<template>
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :mode="mode"
        router
        :collapse="isCollapse"
        unique-opened
        background-color="rgba(8, 90, 148, 1)"
        active-text-color="#000"
        text-color="#fff"
    >
        <!-- mode="vertical" -->
        <template v-if="title">
            <p v-if="!isCollapse" class="menu-title" @click="$router.push('/')">{{ title }}</p>
            <p v-else class="menu-title-img">
                <el-icon>
                    <i-ep-SwitchButton />
                </el-icon>
            </p>
        </template>
        <menuComponent :list="menulist" :parent-path="parentPath" />
    </el-menu>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore';
import type { PropType } from 'vue';

defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    mode: {
        type: String as PropType<'vertical' | 'horizontal'>,
        default: () => 'vertical'
    }
});

const store = useMenuStore();

const parentPath = '/';
const menulist = ref(store.getRoutes(store.menu));
watch(
    () => store.refreshMenu,
    () => {
        if (store.refreshMenu) {
            menulist.value = store.getRoutes(store.menu);
            store.refreshMenu = false;
        }
    },
    { immediate: true }
);
</script>

<style lang="scss">
.el-menu {
    min-height: 100%;
    .menu-title {
        color: #fff;
        font-size: 20px;
        text-align: center;
        padding: 20px 0;
        font-weight: bold;
        box-sizing: border-box;
        cursor: pointer;
    }
    .menu-title-img {
        text-align: center;
        padding-top: 20px;
        > img {
            width: 20px;
        }
    }
    .el-menu-item.is-active {
        background-color: rgba(226, 240, 251, 1);
    }
}
</style>
