<template>
    <Nuxt />
</template>

<style lang="scss">
#app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: $font-body-standard;
    color: $color-black;
}
header {
    background-color: $color-maroon-dark;
    color: $color-white;
    & > section {
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
main {
    flex: 1;
}
h1,
h2,
h3 {
    @include fontFunHeading;
}

h1 {
    font-size: 3.6em;
}

h2 {
    font-size: 3em;
}

h3 {
    font-size: 2.4em;
}

a {
    color: $color-orange;

    &:hover {
        color: $color-orange-dark;
        text-decoration: underline;
    }
}

section {
    padding: 1em 0 0 0;
    position: relative;
}
article {
    padding: 2em 4em;
}
.arrow {
    position: absolute;
    width: 20em;
    top: 0;
    right: 28%;
    z-index: 1;
}
.description {
    position: absolute;
    right: 0%;
    top: 12%;
}
.yellow {
    background-color: $color-yellow-light;
}
.light-yellow {
    background-color: lighten($color-yellow-light, 4%);
}
.tech-image {
    height: 5em;
    margin: 0 1em 1.5em;
}
</style>
