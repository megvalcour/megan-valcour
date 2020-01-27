<template>
    <section class="p-3">
        <div class="case-card__container">
            <div
                class="case-card"
                :class="{ flipped: flipped }"
                @click="flipped = !flipped"
            >
                <div
                    class="front"
                    :style="'--bg-img: url(\'' + imageSource + '\')'"
                >
                    <h3>{{ imageTitle }}</h3>
                </div>
                <div class="back">
                    <h3>{{ imageTitle }}</h3>
                    <p>{{ caseText }}</p>
                    <p v-if="buttonLink" class="text-center">
                        <a class="btn btn-primary" :href="buttonLink">{{
                            buttonText ? buttonText : 'View'
                        }}</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        imageSource: {
            type: String,
            required: true,
        },
        imageTitle: {
            type: String,
            required: true,
        },
        caseText: {
            type: String,
            required: true,
        },
        buttonLink: {
            type: String,
            required: false,
            default: '',
        },
        buttonText: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            flipped: false,
        }
    },
}
</script>

<style lang="scss">
.case-card__container {
    width: 25em;
    height: 20em;
    position: relative;
    perspective: 100em;
}

.case-card {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform 1s;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    cursor: pointer;
    box-shadow: $box-shadow-rest;

    &:hover {
        transform: translateY(-10px);
        box-shadow: $box-shadow-hover;
    }
}
.case-card div {
    display: block;
    height: 100%;
    width: 100%;
    color: $color-white;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 2px;
}
.case-card .front {
    background-image: linear-gradient(
            rgba($color-maroon-dark, 0.27),
            rgba($color-maroon-dark, 0.27)
        ),
        var(--bg-img);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    color: $color-white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 3em;

    h3 {
        text-shadow: -2px 2px 0 $color-black;
    }
}
.case-card .back {
    background-color: $color-maroon-dark;
    padding: 1em;
    color: $color-white;
    transform: rotateY(180deg);
}
.case-card.flipped {
    transform: rotateY(180deg);
}
</style>
