<template>
    <el-form
        ref="baseFormRef"
        :model="modelValue"
        :label-width="labelWidth"
        :rules="rules"
        class="lxj-class"
    >
        <el-row>
            <template v-for="item in formItemList" :key="item.type">
                <el-col v-bind="item.useLayout == false ? undefined : layout" :span="item.span">
                    <el-form-item
                        :label="item.label"
                        :label-width="item.labelWidth"
                        :prop="item.filed"
                        :rules="item.rules"
                    >
                        <template v-if="item.type == 'input' || item.type == 'password'">
                            <el-input
                                v-model="modelValue[item.filed]"
                                clearable
                                :disabled="item.disabled"
                                :type="item.type"
                                :placeholder="item.placeholder"
                                v-bind="item.input"
                            />
                        </template>
                        <template v-else-if="item.type == 'select'">
                            <el-select
                                v-model="modelValue[item.filed]"
                                clearable
                                :placeholder="item.placeholder"
                                :disabled="item.disabled"
                                v-bind="item.select"
                            >
                                <el-option
                                    v-for="(option, index) in item.select?.options"
                                    :key="index"
                                    :label="option.label"
                                    :value="option.value"
                                />
                            </el-select>
                        </template>
                        <template v-else-if="item.type == 'textarea'">
                            <el-input
                                type="textarea"
                                v-model="modelValue[item.filed]"
                                clearable
                                :placeholder="item.placeholder"
                                :disabled="item.disabled"
                                v-bind="item.textarea"
                            />
                        </template>
                        <template v-else-if="item.type == 'date'">
                            <el-date-picker
                                v-model="modelValue[item.filed]"
                                clearable
                                :disabled="item.disabled"
                                type="date"
                                :placeholder="item.placeholder ?? '请选择时间'"
                                value-format="YYYY-MM-DD HH:mm:ss"
                                v-bind="item.date"
                            />
                        </template>
                        <template v-else-if="item.type == 'daterange'">
                            <el-date-picker
                                v-model="modelValue[item.filed]"
                                clearable
                                :disabled="item.disabled"
                                value-format="YYYY-MM-DD HH:mm:ss"
                                type="daterange"
                                v-bind="item.date"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                            />
                        </template>
                        <template v-else-if="item.type == 'radio'">
                            <el-radio-group
                                v-model="modelValue[item.filed]"
                                :disabled="item.disabled"
                            >
                                <el-radio
                                    v-for="(option, index) in item.radio?.options"
                                    :key="index"
                                    :label="option.value"
                                    :border="option.border"
                                >
                                    {{ option.label }}
                                </el-radio>
                            </el-radio-group>
                        </template>
                        <template v-else-if="item.type == 'checkbox'">
                            <el-checkbox-group v-model="modelValue[item.filed]">
                                <el-checkbox
                                    v-for="(option, index) in item.checkbox?.options"
                                    :key="index"
                                    :label="option.label"
                                    :border="option.border"
                                />
                            </el-checkbox-group>
                        </template>
                        <template v-else-if="item.type == 'slot'">
                            <slot :name="item.filed" :scope="item"></slot>
                        </template>
                    </el-form-item>
                </el-col>
            </template>
            <div style="flex: 1; text-align: right">
                <slot name="footer" :data="{ modelValue, validate }"></slot>
            </div>
        </el-row>
    </el-form>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';

const modelValue = defineModel<Record<string, any>>('modelValue', {
    default: {}
});

defineProps({
    rules: {
        type: Object as PropType<FormRules>,
        default: () => ({})
    },
    labelWidth: {
        type: String,
        default: () => '80px'
    },
    formItemList: {
        type: Array as PropType<IformItem[]>,
        default: () => [],
        required: true
    },
    layout: {
        type: Object as PropType<any>,
        default: () => ({
            xl: 6,
            lg: 6,
            md: 8,
            sm: 12,
            xs: 24
        })
    }
});

const baseFormRef = ref<FormInstance>();

// 验证
const validate = () => {
    return new Promise((res) => {
        baseFormRef.value?.validate((valid) => {
            if (valid) return res(true);
            ElMessage.warning('请完成填写表单项');
        });
    });
};

defineExpose({ validate });
</script>

<style>
.lxj-class .el-col {
    padding: 0 5px;
}
</style>
<style scoped>
.base-button-group {
    text-align: center;
}
</style>
