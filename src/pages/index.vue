<template>
  <div class="bg-white">
    <the-nav-bar />
    <div class="relative isolate px-6 pt-14 lg:px-8">
        <!--Blur SVGS-->
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
        <div class="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 sm:py-32 lg:grid-cols-2 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <div class="flex">
                    <p class="relative flex items-center py-1 text-xl leading-6">
                        <span class="font-semibold text-indigo-600">Hey, I'm Abi</span>
                    </p>
                </div>
                <h1 class="mt-5 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Front-End Developer, UX/UI Designer, & People Enthusiast</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                    With 3 years of professional experience and a passion for building products that people love, I think we’d make a great team.
                </p>
            </div>
            <div class="mt-16 mx-auto sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                <img src="../assets/hero_img.png" alt="hero image" class="max-w-xs mx-auto md:max-w-sm"/>
            </div>
        </div>
        <about />
        <tech />
        <experience />
        <contact />
    </div>
  </div>
</template>

<script>
import TheNavBar from '../components/TheNavBar.vue'
import About from '../components/homepage/About.vue'
import Tech from '../components/homepage/Tech.vue'
import Experience from '../components/homepage/Experience.vue'
import Contact from '../components/homepage/Contact.vue'
export default {
    components: { Contact, Experience, Tech, About, TheNavBar }
}
</script>