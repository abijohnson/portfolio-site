<template>
    <header class="absolute inset-x-0 top-0 z-50 pt-5">
        <div class="flex flex-1 justify-end md:justify-center">
            <desktop-nav class="pointer-events-auto hidden md:block" />
            <mobile-nav class="pointer-events-auto md:hidden"/>
        </div>
    </header>
</template>

<script setup>
import DesktopNav from "@/components/TheNavBar/DesktopNav.vue";
import MobileNav from "@/components/TheNavBar/MobileNav.vue";

const navigation = [
    { name: 'About me', href: '#about' },
    { name: 'Tech I love', href: '#tech' },
    { name: 'Experience/Projects', href: '#experience' },
]


</script>