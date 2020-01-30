<template>
    <div id="app">
        <header>
            <NavBar />
            <section class="p-5">
                <h1 class="text-center">Hi!<br />I'm Megan.</h1>
                <CodeTyping
                    message="A front-end developer out of New Haven, CT"
                />
            </section>
            <AccentBlock />
        </header>
        <main class="container-fluid">
            <section class="row">
                <article class="col-md-6 offset-md-3 text-center">
                    <h2>Who I Am</h2>
                    <p class="lead">
                        Currently I work at the
                        <a href="https://www.ametsoc.org"
                            >American Meteorological Society</a
                        >
                        as the front-end web developer within the Department of
                        Digital Projects and Design.
                    </p>
                    <p class="lead">
                        Prior to that, I worked in the same organization's
                        publications department, and then at various other
                        nonprofits in event-planning, publications, web content
                        editing, and more.
                    </p>
                    <!-- <p class="text-center">
                        <a class="btn btn-primary" href="resume.pdf"
                            >My Resume (PDF)</a
                        >
                    </p>
                    <p class="small text-center">
                        Having trouble?
                        <a href="https://get.adobe.com/reader/" target="_blank"
                            >Download Adobe Reader for free&nbsp;<i
                                class="fas fa-external-link-alt"
                            ></i
                        ></a>
                    </p> -->
                </article>
            </section>
            <section class="pb-5 light-yellow px-5">
                <h2 class="text-center my-5">What I've Done</h2>
                <div
                    class="d-flex flex-wrap justify-content-center align-items-around"
                >
                    <CaseCard
                        image-source="images/ams.png"
                        image-title="AMS"
                        case-text="A labor of love! To match our new logo and brand, I redesigned the main website of the AMS -- featuring a more modern look and feel as well as a more standardized development and deployment pipeline. Brought to you by Sass, Vue, Bootstrap 4, a sprinkle of ColdFusion, and a great team of testers and content creators."
                        button-text="Go to ametsoc.org"
                        button-link="https://www.ametsoc.org/index.cfm/ams/"
                    />
                    <CaseCard
                        image-source="images/bee-spelled.png"
                        image-title="Bee-Spelled"
                        case-text="Built with React! My first attempt at the framework is a little word game that randomly generates various sizes of boards and checks your guesses against the fantastic (and open source!) DataMuse API."
                        button-text="View on GitHub"
                        button-link="https://github.com/megvalcour/bee-spelled"
                    />
                    <CaseCard
                        image-source="images/pdts.png"
                        image-title="PDTS"
                        case-text="I leveraged Vue's ability to insert seamlessly into third-party systems but still be developed rapidly to meet a tight timeline. Also featuring Bootstrap and a sprinkle of ColdFusion and Mura.js to better integrate with our (ColdFusion- and Bootstrap-based) CMS, Mura."
                    />
                    <CaseCard
                        image-source="images/webinar-library.png"
                        image-title="Webinar Library"
                        case-text="Like PDTS, I chose Vue.js to integrate easily with our ColdFusion-based CMS. I pulled the user-entered content using a ColdFusion iterator with some help from Mura.js, and then displayed using my small but powerful inline Vue app."
                        button-text="View the Library"
                        button-link="https://www.ametsoc.org/index.cfm/ams/webinar-directory/"
                    />
                    <CaseCard
                        image-source="images/my-account.png"
                        image-title="My Account"
                        case-text="A wild ride, and my first-ever project at AMS. If I could do it all again, I'd refactor to use Single File Components and Vue CLI for sanity, but it's still something I'm thankful for: it taught me the importance of unit testing and staying DRY the hard way."
                    />
                    <CaseCard
                        image-source="images/newdial.png"
                        image-title="The New Dial"
                        case-text="A quick volunteer project to help out my class while I was finishing up my MFA (Creative Writing). An update to an older-looking WordPress site to hold our class portfolio."
                        button-text="Read the New Dial"
                        button-link="https://newdialmag.wordpress.com/"
                    />
                    <CaseCard
                        image-source="images/megan-valcour.png"
                        image-title="This Site"
                        case-text="Built (a bit quickly!) with Vue.js for fast scaffolding, Bootstrap for some quick responsivity and utility classes, and some Sass sprinkled in to stay DRY."
                        button-text="See on GitHub"
                        button-link="https://github.com/megvalcour/megan-valcour"
                    />
                </div>
            </section>
            <section class="row yellow">
                <article class="col-md-10 offset-md-1">
                    <h2 class="text-center">What I Like Best</h2>
                    <div class="d-flex justify-content-between flex-wrap mt-5">
                        <img
                            class="tech-image"
                            alt="HTML"
                            src="icons/html.png"
                        />
                        <img class="tech-image" alt="CSS" src="icons/css.png" />
                        <img
                            class="tech-image"
                            alt="Sass"
                            src="icons/sass.png"
                        />
                        <img
                            class="tech-image"
                            alt="Vue.js"
                            src="icons/vue.png"
                        />
                        <img class="tech-image" alt="Git" src="icons/git.png" />
                    </div>
                </article>
            </section>
        </main>
        <AccentBlock reversed />
        <BaseFooter />
    </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar'
import AccentBlock from '@/components/layout/AccentBlock'
import CodeTyping from '@/components/fancy/CodeTyping'
import BaseFooter from '@/components/layout/BaseFooter'
import CaseCard from '@/components/fancy/CaseCard'

export default {
    components: {
        NavBar,
        AccentBlock,
        BaseFooter,
        CodeTyping,
        CaseCard,
    },
}
</script>

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
