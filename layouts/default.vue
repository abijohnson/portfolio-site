<script setup>
import TheNavBar from '../components/TheNavBar/TheNavBar.vue'
</script>

<template>
    <div class="bg-gray-50 min-h-screen">
        <div class="bg-white max-w-7xl mx-auto shadow-sm min-h-screen">
            <the-nav-bar />
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>
