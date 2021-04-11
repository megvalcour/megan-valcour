<template>
    <nav class="nav d-flex justify-content-end">
        <a
            class="nav-link"
            href="mailto:meg.valcour@gmail.com"
            @mouseover="showEmail = true"
            @mouseleave="showEmail = false"
        >
            <i class="fas fa-envelope"></i><br />
            <span class="sr-only">Email</span>
        </a>
        <a
            class="nav-link"
            target="_blank"
            href="https://github.com/megvalcour"
            @mouseover="showGithub = true"
            @mouseleave="showGithub = false"
        >
            <i class="fab fa-github"></i><br />
            <span :class="showGitHub ? '' : 'sr-only'">Github</span>
        </a>
    </nav>
</template>

<script>
export default {
    props: {
        showBrand: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    data() {
        return {
            showGitHub: false,
            showEmail: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.nav {
    background-color: $color-maroon-dark;
}
.nav-link {
    color: lighten($color-maroon, 40%);
    text-align: center;
    font-size: 2em;

    &:hover,
    &:focus,
    &:active {
        color: $color-white;
    }
}
</style>
