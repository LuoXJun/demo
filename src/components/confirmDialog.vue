<template>
    <div class="confirmDialog">
        <el-dialog
            v-model="dialogVisible"
            :close-on-click-modal="false"
            :title="title"
            :width="width"
        >
            <div class="title">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z"
                            fill="#0052D9"
                        />
                    </svg>
                    <span>{{ title }}</span>
                </div>
                <img src="@/assets/images/close.svg" @click="dialogVisible = false" />
            </div>
            <div class="content">
                您的申请已提交。请联系管理员审批您的账户，审批通过后即可登录使用。
            </div>
            <div class="footer">
                <el-button @click="dialogVisible = false">确认</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
const dialogVisible = defineModel({ default: false });

defineProps({
    title: {
        type: String,
        default: () => '提交成功'
    },
    width: {
        type: Number,
        default: () => 416
    }
});
</script>

<style lang="scss">
.confirmDialog {
    .el-overlay {
        background-color: rgba(0, 0, 0, 0.4);
        .el-dialog {
            padding: 32px;
            height: 158px;
            margin: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-sizing: content-box;

            .el-dialog__header {
                display: none;
            }
            .el-dialog__body {
                display: flex;
                flex-direction: column;
                height: 100%;
                .title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    img {
                        cursor: pointer;
                    }
                    > div {
                        display: flex;
                        align-items: center;
                        > span {
                            margin-left: 8px;

                            overflow: hidden;
                            color: var(--text-icon-font-gy-190-primary, rgba(0, 0, 0, 0.9));
                            text-overflow: ellipsis;
                            white-space: nowrap;

                            /* Title/Medium */
                            font-family: 'PingFang SC';
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 24px; /* 150% */
                        }
                    }
                }
                .content {
                    @include textLv2;
                    margin-top: 16px;
                    line-height: 22px;
                    color: rgba(0, 0, 0, 0.6);
                }
                .footer {
                    flex: 1;
                    display: flex;
                    justify-content: end;
                    align-items: end;
                    .el-button {
                        background-color: #0052d9;
                        width: 28px;
                        height: 22px;
                        padding: 5px 16px;
                        box-sizing: content-box;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
