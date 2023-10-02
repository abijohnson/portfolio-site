<script setup lang="ts">
import ArticleLayout from '~/components/articles/ArticleLayout.vue'
useSeoMeta({
    title: 'Nuxt vs Vue: Which should you pick for your app and why?',
    ogTitle: 'Nuxt vs Vue: Which should you pick for your app and why?',
    description: 'Both seem to be very similar, yet very different. Find out which will be best for your app!',
    ogDescription: 'Both seem to be very similar, yet very different. Find out which will be best for your app!',
})
</script>

<template>
    <ArticleLayout title="Nuxt vs Vue: Which should you pick for your app and why?" date="September 26th, 2023">
        <div class="text-zinc-700">
            <p>
                As a 3 year (and counting) Vue/Nuxt user, this is a question I have now been asked 3 times in interviews and embarrassingly stumble over every time. Admittedly, I didn't
                have a solid understanding of Nuxt vs Vue, but I finally decided to hunker down and answer this question.
            </p>
            <p class="font-semibold text-zinc-900 text-lg pt-8 underline underline-offset-2 decoration-teal-500">
                What is Nuxt?
            </p>
            <p class="pt-3">
                Per the documentation: <span class="italic">"Nuxt is a free and open-source framework with an intuitive and extendable way to create type-safe,
                performant and production-grade full-stack web applications and websites with Vue.js."</span> Nuxt is also rendered on the server, we will get into why that matters in a second.
                Think of Nuxt as sort of a "beefed up"/structured version of Vue (in some respects)
            </p>
            <p class="font-semibold text-zinc-900 text-lg pt-8 underline underline-offset-2 decoration-teal-500">
                What is Vue?
            </p>
            <p class="pt-3">
                Per the documentation: <span class="italic">"Vue (pronounced /vjuː/, like view) is a JavaScript framework
                for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a
                declarative and component-based programming model that helps you efficiently develop user interfaces, be they
                simple or complex."</span> Vue is ideal for those looking to learn/use their first front-end framework, as the learning
                curve is not nearly as steep compared to it's counterparts (React, Angular). It is lightweight, and ideal for SPAs. Both
                Vue3 and Nuxt3 use Javascript/Typescript (it's up to your preference), and have built in state-management.
            </p>
            <p class="font-semibold text-zinc-900 text-lg pt-8 underline underline-offset-2 decoration-teal-500">
                So...what's the difference?
            </p>
            <p class="pt-3">
                Like I said above, Nuxt is rendered on the server <a href="https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/" class="underline decoration-teal-500 italic">(read here about server side vs client side rendering)</a> . Nuxt
                offers much better SEO, has better meta-tag customization capabilities, uses automatic routing, and handles high traffic better.
                Vue on the other hand is rendered on the client, so SEO is pretty sub-par. However, Vue does not use automatic routing,
                which is honestly a preference thing (in this case, Vue is the winner for me because I like to have more control over
                routes). I have found that Vue is also more customizable in general compared to Nuxt, which I appreciate because I
                personally like to have a bit more flexibility on the front-end. But again, Vue is rendered on the client, which lends
                itself to slower performance as compared to it being rendered on the server.
            </p>
            <p class="font-semibold text-zinc-900 text-lg pt-8 underline underline-offset-2 decoration-teal-500">
                Which one should I go with for my project?
            </p>
            <p class="pt-3">
                If you're looking to build a larger, more structured web app, I would suggest going with Nuxt.
                It is ideal also for e-Commerce sites, and other public facing apps that heavily
                rely on high-traffic and SEO performance. If you're looking for a more lightweight option
                that doesn't need to handle a lot of interactions at once nor needs to really care about SEO performance, I would choose Vue. Additionally,
                Vue is more flexible and customizable, so if you have needs that require some really out-of-the-box stuff, I'd go with Vue.
            </p>
        </div>
    </ArticleLayout>
</template>
