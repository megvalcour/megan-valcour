<template>
    <header>
        <TheNavBar />
        <section class="p-5">
            <h1 class="text-center">
                {{ title }}<br v-if="titleSecondLine" />{{ titleSecondLine }}
            </h1>
            <FancyCodeTyping v-if="message" :message="message" />
        </section>
        <BaseAccentBlock />
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
    background-color: $color-maroon-dark;
    color: $color-white;
    & > section {
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
