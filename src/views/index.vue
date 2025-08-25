<template>
    <div class="common-layout templateClass">
        <el-container>
            <el-aside class="menu-aside">
                <baseMenu title="template" :is-collapse="store.isCollapse" />
            </el-aside>
            <el-container>
                <el-header style="height: auto">
                    <el-row align="middle">
                        <el-icon
                            style="margin-right: 20px"
                            @click="store.isCollapse = !store.isCollapse"
                        >
                            <i-ep-switch />
                        </el-icon>

                        <HeaderNav mode="history"></HeaderNav>
                    </el-row>
                </el-header>
                <el-main style="background-color: #e4e7ed">
                    <el-card class="mainCard" shadow="hover">
                        <router-view />
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore';

const store = useMenuStore();

const minWidth = computed(() => {
    return store.isCollapse ? '0px' : '200px';
});
</script>

<style lang="scss">
.templateClass {
    height: 100%;
    .el-container {
        height: 100%;
        .menu-aside {
            width: fit-content;
            min-width: v-bind(minWidth);
        }
        .el-main {
            height: 100%;
            overflow: hidden;
            .mainCard {
                height: 100%;
                box-sizing: border-box;
                .el-card__body {
                    height: 100%;
                }
            }
        }
    }
}
</style>
