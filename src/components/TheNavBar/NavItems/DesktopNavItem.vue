<script setup>
const props = defineProps({
    link: String,
    isActive: Boolean
})
</script>

<template>
    <li>
        <router-link :to="link" :class="isActive ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400'" class="relative block px-3 py-2 transition">
            <slot />
            <span :class="isActive ? 'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0': ''" />
        </router-link>
    </li>
</template>
