<script setup>
import WorkItem from "@/components/homepage/WorkItem.vue";
import { ArrowDownIcon, BriefcaseIcon } from "@heroicons/vue/20/solid";
import work from '@/work.json'
</script>

<template>
    <div class="rounded-2xl border border-zinc-100 p-6">
        <h2 class="flex text-sm font-semibold text-zinc-900">
            <BriefcaseIcon class="h-6 w-6 flex-none" />
            <span class="ml-3">Work</span>
        </h2>
        <ol class="mt-6 space-y-4">
            <work-item v-for="job in work" :id="job" :title="job.title" :company_name="job.company_name" :date="job.date" :icon="job.icon" />
        </ol>
        <div class="mt-6">
            <button type="button" class="w-full inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 group">
                <a href="./../../../Abi_Kilborn_Resume.pdf" download="Abi_Kilborn_Resume" class="flex">
                    Download Resume
                    <ArrowDownIcon class="ml-2 mt-0.5 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600" />
                </a>
            </button>
        </div>

    </div>
</template>

<style scoped>

</style>