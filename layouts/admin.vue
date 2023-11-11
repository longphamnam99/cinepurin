<script lang="ts" setup>
const router = [
    { path: '/categories', name: 'Danh mục' },
    { path: '/actors', name: 'Diễn viên' },
    { path: '/directors', name: 'Đạo diễn' },
    { path: '/movies', name: 'Phim' }
]
</script>

<template>
    <div class="flex">
        <div class="w-[10%]">
            <div class="bg-red flex flex-col">
                <Nuxt-link v-for="data in router" :key="data.path" class="p-2 hover:bg-red-200"
                    :to="'/manager' + data.path">{{ data.name
                    }}</Nuxt-link>
            </div>
        </div>
        <div class="w-[90%]">
            <div class="bg-red-100 w-full h-10 flex gap-2 justify-end px-2 items-center">
                <div>Xin chào: Admin</div>
                <div class="cursor-pointer">
                    <img class="w-7 h-5" src="/images/logout.png" alt="logout">
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
.active {
    background: #f18720;
}
</style>