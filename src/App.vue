<template>
    <div id="app" class="w-screen h-screen flex items-center justify-center">
        <div class="flex items-center justify-center container space-x-12">
            <img src="https://pbs.twimg.com/profile_images/1387132385431625735/7vyJtFhz_200x200.jpg" alt="" class="rounded-full border-4 border-white">
            <section class="flex flex-col space-y-3">
                <h1 class="text-3xl uppercase text-white font-black">Bram van Rijswijk</h1>
                <section>
                    <p class="text-white font-medium tracking-wider">Back-end Developer @ <a href="https://socialblue.com" class="font-extrabold hover:underline">Social Blue</a></p>
                    <p class="text-white font-medium tracking-wider">Creator of <a href="https://watisonsbudget.nl" class="font-extrabold hover:underline">Watisonsbudget</a></p>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Inter UI', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
