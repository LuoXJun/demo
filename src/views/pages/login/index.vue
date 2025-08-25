<template>
    <div class="login-containar" ref="loginRef">
        <div class="logo">
            <img src="@/assets/images/logo.svg" />
            <div>
                <img src="@/assets/images/Group-1.svg" />
                <img src="@/assets/images/Group.svg" />
            </div>
        </div>
        <div class="login-box">
            <p>输水隧洞多源检测数据信息融合及健康诊断平台</p>
            <img src="@/assets/images/login-box.png" alt="" />
            <img src="@/assets/images/login-box-shadow.png" class="login-box-shadow" />
            <div class="content">
                <div>
                    <component
                        :is="componentDic[currentType]"
                        :type="currentType"
                        v-model="form"
                    ></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import loginComponent from './loginComponent/index.vue';
import registerComponent from './registerComponent/index.vue';
import { getType } from '@/utils/provide.ts';
const currentType = ref<TlogType>('login');
const loginRef = ref();
const form = ref<any>({ username: 'luo', password: 9527 });

const componentDic = {
    login: loginComponent,
    change: registerComponent,
    regi: registerComponent
};

provide(getType, {
    value: currentType,
    setValue(val) {
        form.value = {};
        currentType.value = val;
    }
});

const resize = () => {
    const body = document.body;
    const h = body.clientHeight;
    console.log(2);

    loginRef.value.style.zoom = h / 1080;
};

onMounted(() => {
    resize();
    window.addEventListener('resize', resize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
});
</script>

<style scoped lang="scss">
.login-containar {
    height: 100%;
    width: 100%;
    background: url('@/assets/images/loginBg.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    .logo {
        display: flex;
        align-items: center;
        padding: 30px 60px;
        > div {
            display: flex;
            margin-left: 10px;
            flex-direction: column;
            > img:first-child {
                margin-bottom: 4px;
            }
        }
    }

    .login-box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 936px;
        height: 563px;
        border-radius: 14px;
        background: #fff;
        display: flex;
        > p {
            position: absolute;
            left: 50%;
            top: -30px;
            font-family: 'YouSheBiaoTiHei';
            transform: translate(-50%, -50%);
            white-space: nowrap;

            font-size: 45px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 2.25px;
            color: #0e2780;

            &::after {
                content: '输水隧洞多源检测数据信息融合及健康诊断平台';
                font-size: 45px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 2.25px;
                position: absolute;
                left: 0;
                top: -3px;

                background: linear-gradient(180deg, #a5dfff 0%, #fff 50.78%);
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
            }
        }

        > img {
            width: 50%;
        }
        .login-box-shadow {
            width: 970px;
            height: 209px;
            position: absolute;
            bottom: -49px;
            left: -18px;
            transform: translateY(100%);
        }
        > .content {
            flex: 50% 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            > div {
                width: 420px;
                height: 483px;
            }
        }
    }
}
</style>
