<template>
    <div class="testForm">
        <baseForm ref="baseFormRef" v-model:modelValue="formData" :form-item-list="formConfig">
            <template #slot>
                <el-button>slot</el-button>
            </template>
            <template #footer="{ data }">
                <el-button-group>
                    <el-button @click="sub">查询</el-button>
                    <el-button @click="data.validate">重置</el-button>
                </el-button-group>
            </template>
        </baseForm>
        <baseList :list="list" :column="4">
            <template #test="row">{{ row }}</template>
        </baseList>
        <basePagination v-model="pageInfo" @handleChange="handleChange" />
    </div>
</template>

<script setup lang="ts">
import baseForm from '@/components/base-form/baseForm.vue';
import baseList from '@/components/base-list/base-list.vue';
import { formConfig } from './config';
import basePagination from '@/components/base-pagination/base-pagination.vue';
const formData = reactive({ input2: 23132 });
const list = reactive<ITableList[]>([
    { label: 'label', value: 'value', single: true },
    { label: 'label', value: 'value' },
    { label: 'label', value: 'value', single: true },
    { label: 'label', value: 'value', single: true, prop: 'test' },
    { label: 'label', value: 'value' },
    { label: 'label', value: 'value' },
    { label: 'label', value: 'value' },
    { label: 'label', value: 'value' },
    { label: 'label', value: 'value', single: true },
    { label: 'label', value: 'value', single: true },
    { label: 'label', value: 'value' },
    { label: 'label', value: 'value', single: true },
    { label: 'label', value: 'value', single: true }
]);

const baseFormRef = ref();

const sub = () => {
    baseFormRef.value.validate();
};

//
const pageInfo = reactive<PageInfo>({
    currentPage: 2,
    pageSize: 2,
    total: 100
});

const handleChange = (type: 'sizeChange' | 'currentChange', val: number) => {
    console.log(type, val, pageInfo);
};
</script>

<style scoped></style>
