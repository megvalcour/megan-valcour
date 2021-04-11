<template>
    <div id="app">
        <header>
            <TheNavBar />
            <section class="p-5">
                <h1 class="text-center">Hi!<br />I'm Megan.</h1>
                <FancyCodeTyping
                    message="A front-end developer out of Boston, MA"
                />
            </section>
            <BaseAccentBlock />
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
                    <FancyCaseCard
                        :image-source="
                            require('~/assets/images/bandanaproject.png')
                        "
                        image-title="Bandana Project"
                        case-text="Front is back and back is front! The Bandana Project is built on Strapi/Node.js for the backend and a Vue app for the frontend. It's a great program too -- check it out."
                        button-text="See the staging site"
                        button-link="https://aqueous-hamlet-77167.herokuapp.com/"
                    />
                    <FancyCaseCard
                        :image-source="
                            require('~/assets/images/amsweatherband.png')
                        "
                        image-title="Weather Band"
                        case-text="A whole new world! Our organization -- a professional society -- was creating a new program for weather enthusiasts. This means a whole new site (using Mura CMS) and theme (based on Bootstrap 4.5) as well as a new member portal (Vue.js)."
                        button-text="Go to amsweatherband.org"
                        button-link="https://amsweatherband.org/index.cfm/weatherband/"
                    />
                    <FancyCaseCard
                        :image-source="require('~/assets/images/ams.png')"
                        image-title="AMS"
                        case-text="A labor of love! To match our new logo and brand, I redesigned the main website of the AMS -- featuring a more modern look and feel as well as a more standardized development and deployment pipeline. Brought to you by Sass, Vue, Bootstrap 4, a sprinkle of ColdFusion, and a great team of testers and content creators."
                        button-text="Go to ametsoc.org"
                        button-link="https://www.ametsoc.org/index.cfm/ams/"
                    />
                    <FancyCaseCard
                        :image-source="
                            require('~/assets/images/bee-spelled.png')
                        "
                        image-title="Bee-Spelled"
                        case-text="Built with React! My first attempt at the framework is a little word game that randomly generates various sizes of boards and checks your guesses against the fantastic (and open source!) DataMuse API."
                        button-text="View on GitHub"
                        button-link="https://github.com/megvalcour/bee-spelled"
                    />
                    <FancyCaseCard
                        :image-source="require('~/assets/images/pdts.png')"
                        image-title="PDTS"
                        case-text="I leveraged Vue's ability to insert seamlessly into third-party systems but still be developed rapidly to meet a tight timeline. Also featuring Bootstrap and a sprinkle of ColdFusion and Mura.js to better integrate with our (ColdFusion- and Bootstrap-based) CMS, Mura."
                    />
                    <FancyCaseCard
                        :image-source="
                            require('~/assets/images/webinar-library.png')
                        "
                        image-title="Webinar Library"
                        case-text="Like PDTS, I chose Vue.js to integrate easily with our ColdFusion-based CMS. I pulled the user-entered content using a ColdFusion iterator with some help from Mura.js, and then displayed using my small but powerful inline Vue app."
                        button-text="View the Library"
                        button-link="https://www.ametsoc.org/index.cfm/ams/webinar-directory/"
                    />
                    <FancyCaseCard
                        :image-source="
                            require('~/assets/images/my-account.png')
                        "
                        image-title="My Account"
                        case-text="A wild ride, and my first-ever project at AMS. If I could do it all again, I'd refactor to use Single File Components and Vue CLI for sanity, but it's still something I'm thankful for: it taught me the importance of unit testing and staying DRY the hard way."
                    />
                    <FancyCaseCard
                        :image-source="
                            require('~/assets/images/megan-valcour.png')
                        "
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
                            src="~/assets/icons/html.png"
                        />
                        <img
                            class="tech-image"
                            alt="CSS"
                            src="~/assets/icons/css.png"
                        />
                        <img
                            class="tech-image"
                            alt="Sass"
                            src="~/assets/icons/sass.png"
                        />
                        <img
                            class="tech-image"
                            alt="Vue.js"
                            src="~/assets/icons/vue.png"
                        />
                        <img
                            class="tech-image"
                            alt="Webpack"
                            src="~/assets/icons/webpack.png"
                        />
                        <img
                            class="tech-image"
                            alt="Bootstrap"
                            src="~/assets/icons/bootstrap.svg"
                        />
                        <img
                            class="tech-image"
                            alt="Git"
                            src="~/assets/icons/git.png"
                        />
                    </div>
                </article>
            </section>
        </main>
        <BaseAccentBlock reversed />
        <TheFooter />
    </div>
</template>

<script>
export default {
    head: {
        title: "Megan Valcour",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Web Developer out of Boston, MA",
            },
        ],
    },
};
</script>

<style></style>
