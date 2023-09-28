<script setup>
import { ChevronDownIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import { Popover, PopoverButton, PopoverOverlay, PopoverPanel, TransitionChild, TransitionRoot, } from '@headlessui/vue'
import MobileNavItem from "@/components/TheNavBar/NavItems/MobileNavItem.vue";
</script>

<template>
    <Popover v-slot="{ open }">
        <PopoverButton class="mr-4 sm:mr-6 group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
            Menu
            <ChevronDownIcon class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" :class="{ 'rotate-180 transform': open }" />
        </PopoverButton>
        <TransitionRoot>
            <TransitionChild
                :show="open"
                enter="transition-opacity duration-150"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity duration-250"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <PopoverOverlay class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm" />
            </TransitionChild>
            <TransitionChild
                :show="open"
                enter="transition-opacity duration-150"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity duration-250"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <PopoverPanel
                    class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
                >
                    <div class="flex flex-row-reverse items-center justify-between">
                        <PopoverButton aria-label="Close menu" class="-m-1 p-1">
                            <XMarkIcon class="h-4 w-4 text-zinc-700" />
                        </PopoverButton>
                        <h2 class="text-sm font-medium text-zinc-600">
                            Navigation
                        </h2>
                    </div>
                    <nav class="mt-6">
                        <ul class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                            <mobile-nav-item link="/">
                                Home
                            </mobile-nav-item>
                            <mobile-nav-item link="/about">
                                About
                            </mobile-nav-item>
                            <mobile-nav-item link="/experience-and-projects">
                                Experience & Projects
                            </mobile-nav-item>
                            <mobile-nav-item link="/articles">
                                Articles
                            </mobile-nav-item>
                        </ul>
                    </nav>
                </PopoverPanel>
            </TransitionChild>
        </TransitionRoot>
    </Popover>
</template>
