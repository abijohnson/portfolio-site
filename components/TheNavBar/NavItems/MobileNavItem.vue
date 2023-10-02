<script setup>
import { PopoverButton } from '@headlessui/vue'

const props = defineProps({
    link: String,
})
</script>

<template>
    <li>
        <PopoverButton class="block py-2">
            <NuxtLink :to="link">
                <slot />
            </NuxtLink>
        </PopoverButton>
    </li>
</template>

<style scoped>

</style>