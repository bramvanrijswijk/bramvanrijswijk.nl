<template>
    <div id="app" class="w-screen h-screen flex items-center justify-center">
        <div class="flex flex-col sm:flex-row items-center justify-center container-xl space-x-0 sm:space-x-12 space-y-10 sm:space-y-0">

            <img alt="" class="block rounded-full border-4 border-white self-start"
                 src="./assets/ordina_foto.jpeg" style="max-width: 180px;">

            <section class="flex flex-col space-y-3 self-start sm:self-auto">
                <h1 class="text-2xl sm:text-3xl uppercase text-white font-black">Bram van Rijswijk</h1>
                <section>
                    <p class="text-sm sm:text-base text-white font-medium tracking-wider">Medior Software Engineer @ <a
                        class="font-extrabold hover:underline" href="https://ordina.nl" target="_blank">Ordina</a></p>
                    <p class="text-sm sm:text-base text-white font-medium tracking-wider">Creator of <a
                        class="font-extrabold hover:underline" href="https://watisonsbudget.nl" target="_blank">Watisonsbudget</a>
                    </p>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app {
    font-family: 'Inter UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
