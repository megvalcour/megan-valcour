<template>
    <p class="text-center">
        <span :class="[lettersRevealed === message.length ? 'blink' : '']">{{
            visibleMessage
        }}</span>
    </p>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
        secondsToReveal: {
            type: Number,
            required: false,
            default: 10,
        },
    },
    data() {
        return {
            lettersRevealed: 0,
            interval: '',
        }
    },
    computed: {
        // Calculates rate of letter reveal based on length of message and time allowed for reveal
        milisecondsBetweenLetters() {
            return (this.secondsToReveal * 1000) / this.message.length
        },
        // Returns the string currently to be revealed
        visibleMessage() {
            return this.message.slice(0, this.lettersRevealed)
        },
    },
    mounted() {
        this.revealMessage()
    },
    watch: {
        lettersRevealed(newVal) {
            if (newVal === this.message.length) {
                clearInterval(this.interval)
            }
        },
    },
    methods: {
        revealMessage() {
            this.interval = setInterval(() => {
                this.lettersRevealed = this.lettersRevealed + 1
            }, this.milisecondsBetweenLetters)
        },
    },
}
</script>

<style lang="scss" scoped>
span {
    font-family: 'Fira Mono', monospace;
    padding: 0;
    margin: 0;
    border-right: 5px solid $color-orange;
    display: inline;
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
.blink {
    animation: blink 0.5s step-end infinite alternate;
    padding-right: 5px;
}
</style>
