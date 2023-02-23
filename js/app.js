import home from "./home.js"
import menu from "./menu.js"
import playlist from "./playlist.js"
import story from "./story.js";
import tcs from "./tcs.js";

// 1. Define route components.
// These can be imported from other files
//const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: home },
    { path: '/menu', component: menu },
    { path: '/playlist', component: playlist },
    { path: '/story', component: story },
    { path: '/about', component: About },
    { path: '/tcs', component: tcs },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
