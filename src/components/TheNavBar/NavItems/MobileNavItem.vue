<script setup>
import { PopoverButton } from '@headlessui/vue'

const props = defineProps({
    link: String,
})
</script>

<template>
    <li>
        <PopoverButton class="block py-2">
            <router-link :to="link">
                <slot />
            </router-link>
        </PopoverButton>
    </li>
</template>

<style scoped>

</style>