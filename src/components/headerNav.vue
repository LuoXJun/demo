<template>
    <div class="header-nav">
        <el-breadcrumb v-if="mode === 'location'" :separator-icon="ArrowRight">
            <template v-for="item in $route.matched" :key="item.path">
                <el-breadcrumb-item
                    v-if="item.meta?.title"
                    :class="{ canJump: item.meta.type != 'menu' }"
                    @click="goPath(item)"
                >
                    {{ item.meta?.title }}
                </el-breadcrumb-item>
            </template>
        </el-breadcrumb>
        <el-breadcrumb v-else>
            <template v-for="item in store.records" :key="item.path">
                <el-breadcrumb-item :class="{ canJump: true }" @click="router.push(item.path)">
                    {{ item.title }}
                </el-breadcrumb-item>
            </template>
        </el-breadcrumb>
        <div class="logout">
            <span @click="logout">退出</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import type { PropType } from 'vue';
import { type RouteRecord, useRouter } from 'vue-router';
import { useMenuStore } from '@/stores/useMenuStore';
defineProps({
    mode: {
        type: String as PropType<'location' | 'history'>,
        default: () => 'location'
    }
});
const router = useRouter();
const store = useMenuStore();
const logout = () => {
    router.push('/login');
};

const goPath = (row: RouteRecord) => {
    if (row.meta.type == 'menu') return;
    router.push(row.path);
};
</script>
<style lang="scss" scoped>
.header-nav {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    .canJump {
        cursor: pointer;
    }

    .el-breadcrumb {
        padding: 20px 0;
    }

    .logout {
        flex: 1;
        text-align: right;
        span {
            cursor: pointer;
        }
    }
}
</style>
