<template>
    <div class="register-component">
        <div class="header">
            <div class="title">{{ type === 'change' ? '更改密码' : '注册' }}</div>
            <div class="des">
                {{
                    type === 'change'
                        ? '通过验证身份信息，立即重置您的账户密码'
                        : '注册账户，开启高效协作新篇章'
                }}
            </div>
        </div>
        <div class="userInfo">
            <el-form :model="form" :label-width="0" class="register-form">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="请输入手机号">
                        <template #prefix>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M7.8291 6.36443C7.8291 6.95624 7.94566 7.54225 8.17213 8.089C8.3986 8.63576 8.73054 9.13255 9.14901 9.55102C9.56748 9.96949 10.0643 10.3014 10.611 10.5279C11.1578 10.7544 11.7438 10.871 12.3356 10.871C12.9274 10.871 13.5134 10.7544 14.0602 10.5279C14.6069 10.3014 15.1037 9.96949 15.5222 9.55102C15.9406 9.13255 16.2726 8.63576 16.4991 8.089C16.7255 7.54225 16.8421 6.95624 16.8421 6.36443C16.8421 5.77263 16.7255 5.18662 16.4991 4.63986C16.2726 4.09311 15.9406 3.59631 15.5222 3.17784C15.1037 2.75937 14.6069 2.42742 14.0602 2.20095C13.5134 1.97447 12.9274 1.85791 12.3356 1.85791C11.7438 1.85791 11.1578 1.97447 10.611 2.20095C10.0643 2.42742 9.56748 2.75937 9.14901 3.17784C8.73054 3.59631 8.3986 4.09311 8.17213 4.63986C7.94566 5.18662 7.8291 5.77263 7.8291 6.36443Z"
                                    fill="#0266F0"
                                />
                                <path
                                    d="M19.9965 14.9364C15.6406 12.1602 15.6855 12.1602 12.55 12.1602C9.46731 12.1602 9.45938 12.1602 4.75742 15.0474C3.71664 15.7395 3.10645 19.1524 3.10645 20.0584C3.10645 22.4279 7.29595 21.7754 12.4628 21.7754C17.6297 21.7754 21.8192 22.4279 21.8192 20.0584C21.8219 19.1022 21.143 15.647 19.9965 14.9364Z"
                                    fill="#0266F0"
                                />
                            </svg>
                            <p class="line"></p>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item class="verifyCodeBox">
                    <el-input v-model="form.verifyCode" placeholder="请输入验证码"></el-input>
                    <el-button>获取验证码</el-button>
                </el-form-item>
                <el-form-item class="includeTips">
                    <el-input
                        v-model="form.password"
                        :type="!isShowPassword ? 'password' : 'text'"
                        :placeholder="type === 'regi' ? '请设置密码' : '请重新设置密码'"
                    >
                        <template #suffix>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                v-if="!isShowPassword"
                                @click="isShowPassword = !isShowPassword"
                            >
                                <g clip-path="url(#clip0_476_25310)">
                                    <path
                                        d="M9.62634 13.3951C8.88438 13.3451 8.15998 13.2195 7.46631 13.0263L6.0298 16.1066C5.981 16.2105 5.91215 16.3038 5.82719 16.3811C5.74224 16.4584 5.64285 16.5181 5.53475 16.5568C5.42664 16.5956 5.31195 16.6126 5.19725 16.6069C5.08255 16.6012 4.9701 16.5729 4.86637 16.5236C4.65663 16.4259 4.49396 16.2493 4.41373 16.0323C4.33349 15.8152 4.34217 15.5753 4.43787 15.3646L5.81643 12.4082C4.64458 11.8571 3.6008 11.0672 2.752 10.0892C2.12462 9.36421 1.63269 8.53233 1.29968 7.63327C1.26001 7.52499 1.24206 7.40996 1.24685 7.29475C1.25164 7.17954 1.27907 7.0664 1.32759 6.96179C1.3761 6.85718 1.44474 6.76315 1.5296 6.68506C1.61445 6.60698 1.71385 6.54638 1.82213 6.50671C1.9304 6.46705 2.04543 6.44909 2.16064 6.45388C2.27586 6.45867 2.389 6.48611 2.49361 6.53462C2.59822 6.58313 2.69225 6.65178 2.77033 6.73663C2.84841 6.82148 2.90901 6.92088 2.94868 7.02916C3.20954 7.73074 3.59439 8.3797 4.08489 8.94509C5.53721 10.638 7.85002 11.6653 10.3753 11.6653C12.9015 11.6653 15.2143 10.6371 16.6666 8.94509C17.1571 8.3797 17.542 7.73074 17.8029 7.02916C17.883 6.81049 18.0467 6.6326 18.2579 6.53462C18.4692 6.43664 18.7107 6.4266 18.9294 6.50671C19.1481 6.58682 19.326 6.75052 19.424 6.96179C19.5219 7.17306 19.532 7.41459 19.4519 7.63327C19.1188 8.53233 18.6269 9.36421 17.9995 10.0892C17.8754 10.2339 17.7465 10.3744 17.6132 10.5107L19.7609 12.6584C19.9229 12.8236 20.013 13.0461 20.0119 13.2774C20.0107 13.5087 19.9183 13.7303 19.7548 13.8938C19.6742 13.9756 19.5782 14.0406 19.4725 14.0851C19.3667 14.1297 19.2531 14.1529 19.1383 14.1535C19.0236 14.1541 18.9098 14.132 18.8036 14.0885C18.6974 14.045 18.6008 13.9809 18.5194 13.9L16.2627 11.6434C15.8413 11.9331 15.3935 12.1904 14.9246 12.4134L16.3014 15.3637C16.3974 15.5745 16.4062 15.8147 16.3259 16.0319C16.2457 16.2491 16.0828 16.4259 15.8729 16.5236C15.7691 16.5729 15.6567 16.6012 15.542 16.6069C15.4273 16.6126 15.3126 16.5956 15.2045 16.5568C15.0964 16.5181 14.997 16.4584 14.9121 16.3811C14.8271 16.3038 14.7582 16.2105 14.7094 16.1066L13.2747 13.029C12.6556 13.2008 12.0223 13.3166 11.3825 13.3749V16.0635C11.3804 16.295 11.287 16.5164 11.1225 16.6793C10.9581 16.8423 10.7359 16.9337 10.5044 16.9337C10.0162 16.9337 9.62634 16.5438 9.62634 16.0644V13.3951Z"
                                        fill="#757F96"
                                    />
                                    <path
                                        d="M3.59115 10.1641C3.6725 10.0831 3.76904 10.019 3.87524 9.97543C3.98143 9.93185 4.09518 9.90967 4.20996 9.91016C4.32474 9.91065 4.4383 9.9338 4.54411 9.97828C4.64993 10.0228 4.74592 10.0877 4.82658 10.1694C4.99041 10.333 5.08297 10.5547 5.08412 10.7863C5.08527 11.0178 4.99492 11.2404 4.83273 11.4057L2.33815 13.9002C2.25673 13.9813 2.16008 14.0455 2.05378 14.089C1.94748 14.1326 1.83361 14.1547 1.71872 14.1542C1.60383 14.1536 1.49019 14.1303 1.38433 14.0857C1.27846 14.0411 1.18246 13.976 1.10184 13.8941C0.938282 13.7305 0.845888 13.509 0.844737 13.2776C0.843587 13.0463 0.933772 12.8239 1.0957 12.6587L3.59115 10.1632V10.1641Z"
                                        fill="#757F96"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_476_25310">
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="white"
                                            transform="translate(0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                fill="none"
                                @click="isShowPassword = !isShowPassword"
                                v-else
                            >
                                <path
                                    d="M9 0.4375C12.2084 0.4375 15.0707 2.46223 17.5806 6.41764C17.6912 6.59171 17.75 6.7937 17.75 6.99995C17.75 7.2062 17.6912 7.40818 17.5806 7.58226C15.0707 11.5377 12.2084 13.5624 9 13.5624C5.79162 13.5624 2.9293 11.5377 0.419379 7.58226C0.308752 7.40818 0.25 7.2062 0.25 6.99995C0.25 6.7937 0.308752 6.59171 0.419379 6.41764C2.9293 2.46223 5.79162 0.4375 9 0.4375ZM9 3.06248C6.82542 3.06248 5.06253 4.82537 5.06253 6.99995C5.06253 9.17453 6.82542 10.9374 9 10.9374C11.1746 10.9374 12.9375 9.17453 12.9375 6.99995C12.9375 4.82537 11.1746 3.06248 9 3.06248ZM9 9.62493C10.4496 9.62493 11.625 8.44959 11.625 6.99995C11.625 5.5503 10.4496 4.37497 9 4.37497C7.55035 4.37497 6.37502 5.5503 6.37502 6.99995C6.37502 8.44959 7.55035 9.62493 9 9.62493Z"
                                    fill="#606C90"
                                />
                            </svg>
                        </template>
                    </el-input>
                    <span class="tips">8-12个字符，需同时包含数字，字母和符号</span>
                </el-form-item>
                <el-button class="logBtn" @click="registerBtn">
                    {{ type === 'regi' ? '注册' : '更改密码' }}
                </el-button>
                <div class="regi">
                    <span>{{ type === 'regi' ? '已有帐户？' : '想起密码？' }}</span>
                    <span @click="currentType.setValue('login')">
                        {{ type === 'regi' ? '立即登录' : '去登陆' }}
                    </span>
                </div>
            </el-form>
        </div>
        <confirmDialog v-model="dialog" />
    </div>
</template>

<script setup lang="ts">
import { inject, ref, type PropType } from 'vue';
import { getType, getTypeDefault } from '@/utils/provide';
import confirmDialog from '@/components/confirmDialog.vue';

const currentType = inject(getType, getTypeDefault);

const form = defineModel<Record<string, any>>({ default: {} });
const props = defineProps({
    type: {
        // 注册或者忘记密码
        type: String as PropType<'regi' | 'change'>,
        default: () => 'regi'
    }
});

const isShowPassword = ref(false);
const dialog = ref(false);

const registerBtn = () => {
    if (props.type === 'regi') dialog.value = true;
};
</script>

<style lang="scss">
.register-component {
    .header {
        .title {
            @include textLv1;
            margin-bottom: 14px;
        }
        .des {
            @include textLv3;
        }
    }
    .userInfo {
        .register-form {
            margin-top: 54px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .includeTips {
                svg {
                    cursor: pointer;
                }
                .el-form-item__content {
                    position: relative;
                    .tips {
                        @include textLv2;
                        color: $textLv3Color;
                        position: absolute;
                        bottom: 0px;
                        left: 0;
                        transform: translateY(110%);
                    }
                }
            }

            .el-input__inner {
                @include textLv2;
                &::placeholder {
                    @include textNull;
                }
            }
            .el-form-item {
                margin-bottom: 24px;
            }

            .el-input {
                width: 376px;
            }
            .el-input__wrapper {
                width: 376px;
                height: 24px;
                padding: 12px;
                border-radius: 6px;
                border: 1px solid $defaultColor;
                .line {
                    height: 24px;
                    width: 1px;
                    background: #0266f0;
                    margin: 0 13px;
                }
            }
            .verifyCodeBox {
                .el-input {
                    margin: 0;
                }
                .el-form-item__content {
                    .el-input__wrapper {
                        padding: 9px;
                    }

                    .el-input {
                        width: 255px;
                    }
                }
                .el-button {
                    height: 44px;
                    flex: 1;
                    margin-left: 24px;
                    border: 1px solid $defaultColor;
                }
            }
            .logBtn {
                width: 376px;
                height: 50px;
                margin-top: 51px;

                color: #fff;
                font-family: 'PingFang SC';
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                background-color: $defaultColor;
            }
            .is-disabled {
                background-color: #b5c7ff;
            }
            .regi {
                display: flex;
                align-items: center;
                width: 376px;

                color: #757f96;
                text-align: right;
                font-family: 'PingFang SC';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 157.143% */
                margin-top: 4px;
                > span:last-child {
                    color: $defaultColor;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
