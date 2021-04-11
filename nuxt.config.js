export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Megan Valcour",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            {
                href:
                    "https://fonts.googleapis.com/css?family=Bangers|Nunito&display=swap",
                rel: "stylesheet",
            },
            {
                rel: "stylesheet",
                href:
                    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
                integrity:
                    "sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",
                crossorigin: "anonymous",
            },
        ],
        script: [
            {
                src: "https://kit.fontawesome.com/22e7e3e4da.js",
                crossorigin: "anonymous",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~assets/styles/_variables.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
    ],

    // For the @nuxt/style-resources module
    styleResources: {
        scss: ["./assets/styles/*.scss"],
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    stories: {
        stories: ["~/components/**/*.stories.js"],
    },
};
