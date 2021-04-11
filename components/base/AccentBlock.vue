<template>
    <div :class="[reversed ? 'reverse' : 'normal']"><p>&nbsp;</p></div>
</template>

<script>
export default {
    props: {
        reversed: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    width: 100%;
    height: 3em;
    background-color: $color-orange;
}
.reverse {
    border-bottom: 1em solid $color-maroon;
    border-top: 1em solid $color-yellow;
}
.normal {
    border-bottom: 1em solid $color-yellow;
    border-top: 1em solid $color-maroon;
}
</style>
