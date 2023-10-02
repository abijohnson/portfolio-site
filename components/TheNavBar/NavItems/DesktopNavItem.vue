<script setup>
const props = defineProps({
    link: String
})
</script>

<template>
    <li>
        <NuxtLink :to="link" active-class="active-link" class="relative block px-3 py-2 transition hover:text-teal-500">
            <slot />
        </NuxtLink>
    </li>
</template>
<style scoped>
.active-link{
    color: rgb(20 184 166);
}
</style>
