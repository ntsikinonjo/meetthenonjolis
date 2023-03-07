// import schedule from "./schedule.js";
// import seat from "./seat.js"
// import playlist from "./playlist.js"
// import menu from "./menu.js"
// import tcs from "./tcs.js";

// 1. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const home = { template: getHomeHtmlTemplate(), mounted : function () { mountedHomeCallbacks() }}
const story = { template: getStoryXsTemplate() }
const schedule = { template: getScheduleHtmlTemplate(), mounted : function () { mountedScheduleCallbacks() }}
const seat = { template: getSeatHtmlTemplate() }
const playlist = { template: getPlaylistHtmlTemplate() }
const tcs = { template: getTcsHtmlTemplate(), mounted : function () { mountedTcsCallbacks() }}
const menu = { template: getMenuHtmlTemplate() }

// 1. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: home },
    { path: '/story', component: story },
    { path: '/schedule', component: schedule },
    { path: '/seat', component: seat },
    { path: '/playlist', component: playlist },
    { path: '/menu', component: menu },
    { path: '/tcs', component: tcs }
]

// 2. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 4. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')










/** -------------------------------------------------------------------------------------------------------------------
 *  HOME --------------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */

/**
 * Template by windows size
 * @returns rendered page
 */
function getHomeHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return getHomeSmTemplate()

    // extra small
    else return getHomeXsTemplate()
}

/** -------------------------------------------------------------------------------------------------------------------
 * CONSTANTS
 */
var isOpen = false




/** -------------------------------------------------------------------------------------------------------------------
 * START CALLBACKS
 */
function mountedHomeCallbacks() {

    let width = window.innerWidth

    // small
    if (576 <= width && width < 768) setupHomeMenuOverlay()
}
// END CALLBACKS ------------------------------------------------------------------------------------------------------




/** -------------------------------------------------------------------------------------------------------------------
 * START XS
 */
function getHomeXsTemplate() {

    return '<div class="container-fluid g-0">' +
    '<!-- n&n --><div class="row"><div class="col"><div class="px-2 py-2 mx-auto"><h1 class="xs-top-bar-title">n&n</h1></div></div></div>' +
    '<!-- header image --><div class="row"><div class="col"><img class="mobile-image" src="svg/xs/home-header.svg" alt="header-image"></div></div>' +
    '<!-- invitation message --><div class="row"><div class="col"><div class="mt-4 mx-auto"><h1 class="xs-home-title">You are invited</h1></div></div></div>' +
    '<!-- invitation message divider --><div class="row"><div class="col"><div class="mx-auto"><img class="xs-home-divider" src="svg/xs/home-divider.svg" alt="title-divider"></div></div></div>' +
    '<!-- invitation message paragraph --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><p class="xs-home-paragraph">Together with their families</p><p class="xs-home-paragraph"><strong>Nthabiseng Nkomo</strong></p><p class="xs-home-paragraph"><strong>&#38;</strong></p><p class="xs-home-paragraph"><strong>Ntsikelelo Nonjoli</strong></p><p class="xs-home-paragraph">request your presence at the ceremony and celebration of their traditional wedding.</p></div></div></div>' +
    '<!-- event information image --><div class="row"><div class="col"><img class="mobile-image xs-home-event-info" src="svg/xs/home-event-info.svg" alt="event information"></div></div>' +
    '<!-- rsvp --><div class="row"><div class="col"><div class="mt-4 mx-auto"><h1 class="xs-home-title">RSVP</h1></div></div></div>' +
    '<!-- rsvp divider --><div class="row"><div class="col"><div class="mx-auto"><img class="xs-home-divider" src="svg/xs/home-divider.svg" alt="title-divider"></div></div></div>' +
    '<!-- rsvp paragraph --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><p class="xs-home-paragraph">Your response is requested by <strong>18 March 2023</strong>.</p><p class="xs-home-paragraph">In your response kindly include your dietary requirements and your drinking preference (alcoholic or non-alcoholic).</p><p class="xs-home-paragraph">Find our contact details <strong>below</strong>.</p></div></div></div>' +
    '<!-- gifts --><div class="row"><div class="col"><div class="mt-4 mx-auto"><h1 class="xs-home-title">Gifts</h1></div></div></div>' +
    '<!-- gifts divider --><div class="row"><div class="col"><div class="mx-auto"><img class="xs-home-divider" src="svg/xs/home-divider.svg" alt="title-divider"></div></div></div>' +
    '<!-- gifts paragraph --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><p class="xs-home-paragraph">Should you wish to bring a gift, here is the link to the gift registry.</p><a class="xs-home-gift-link" href="https://www.easyregistry.co.za/Registry/Gifts/meetthenonjolis" target="_blank"><img class="xs-home-gift-link-image" src="img/giftbox.png" alt="gifts" width="40" height="40"></a></div></div></div>' +
    '<!-- bottom drawer --><div class="row xs-home-bottom-drawer mt-3"><div class="col"><div class="mt-2 mx-auto p-4">' +
    '<!-- links --><div class="row mt-2"><div class="col"><h4 class="xs-home-bottom-drawer-heading">Links</h4></div></div><div class="row">' +
    '<!-- house rules --><div class="col"><ul><li class="mb-3"><router-link class="xs-home-bottom-list-item" to="/tcs">House Rules</router-link></li><li class="mb-3"><router-link class="xs-home-bottom-list-item" to="/schedule">Schedule</router-link></li><li class="mb-3"><router-link class="xs-home-bottom-list-item" to="/playlist">Playlist</router-link></li></ul></div>' +
    '<!-- our story --><div class="col"><ul><li class="mb-3"><router-link class="xs-home-bottom-list-item" to="/story">Our story</router-link></li><li class="mb-3"><router-link class="xs-home-bottom-list-item" to="/seat">Seating plan</router-link></li></ul></div></div>' +
    '<!-- links divider --><div class="row xs-home-bottom-border"><div class="col"><div class="mb-3"></div></div></div>' +
    '<!-- contact details --><div class="row mt-4"><div class="col"><h4 id="bookmark-contact-details" class="xs-home-bottom-drawer-heading">Contact details</h4></div></div><div class="row"><div class="col"><p>Mobile</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">+27 74 318 3487</p></div></div><div class="row"><div class="col"><p>Email</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">kotiandmkwe@gmail.com</p></div></div>' +
    '<!-- banking details --><div class="row mt-3"><div class="col"><h4 class="xs-home-bottom-drawer-heading">Bank details</h4></div></div>' +
    '<!-- bank --><div class="row"><div class="col"><p>Bank</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">FNB/RMB</p></div></div>' +
    '<!-- account holder --><div class="row"><div class="col"><p>Account holder</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">Nthabiseng Nkomo</p></div></div>' +
    '<!-- account type --><div class="row"><div class="col"><p>Account type</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">FNB Premier Current Account</p></div></div>' +
    '<!-- account number --><div class="row"><div class="col"><p>Account number</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">63029629516</p></div></div>' +
    '<!-- swift code --><div class="row"><div class="col"><p>Swift code</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">FIRNZAJJ</p><p class="xs-home-bottom-drawer-right-column">FIRNZAJJXXX &#40;11 digit&#41;</p></div></div>' +
    '<!-- branch code --><div class="row"><div class="col"><p>Branch code</p></div><div class="col"><p class="xs-home-bottom-drawer-right-column">250655</p></div></div>' +
    '<!-- space at the bottom --><div class="row"><div class="col"><div class="mb-5"></div></div></div>' +
    '<!-- est --><div class="row"><div class="col"><p class="xs-home-bottom-drawer-est">Est. 2015</p></div></div></div></div></div>' +
    '<!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'
}
// END XS -------------------------------------------------------------------------------------------------------------




/** -------------------------------------------------------------------------------------------------------------------
 * START SM
 */
function getHomeSmTemplate() {

    return '<div class="container-fluid g-0 sm-tcs-bg">' +
    '<!-- n&n --><div class="row"><div class="col-2">' +
    '<!-- open button --><div id="open-btn" style="display:block"><img src="svg/sm/sm-open-btn.svg" alt="menu-btn" width="48" height="48"></div>' +
    '<!-- close button --><div id="close-btn" style="display:none"><img src="svg/sm/sm-close-btn.svg" alt="menu-btn" width="48" height="48"></div></div><div class="col-8"><div class="px-2 py-2 mx-auto"><h1 class="sm-top-bar-title">n&n</h1></div></div><div class="col-2">' +
    '<!-- menu overlay --><div id="menu-overlay" style="display:none"><ul class="sm-menu-list">' +
    '<!-- home --><li><router-link class="sm-menu-list-item" to="/"><h1>Home</h1><p class="sm-menu-list-item-description">All the important information is here.</p></router-link></li>' +
    '<!-- our story --><li class="mt-3"><router-link class="sm-menu-list-item" to="/story"><h1>Our story</h1><p class="sm-menu-list-item-description">Learn about us, how we met, how long we have been together, etc.</p></router-link></li>' +
    '<!-- our story --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Schedule</h1><p class="sm-menu-list-item-description">Be on time, relax and enjoy</p></router-link></li>' +
    '<!-- guest list --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Guest list</h1><p class="sm-menu-list-item-description">Find out if you are joining us.</p></router-link></li>' +
    '<!-- playlist --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Playlist</h1><p class="sm-menu-list-item-description">Get to know the playlist, so you can groove along. Listen on Spotify or YouTube Music.</p></router-link></li></ul></div></div></div><div class="mx-auto">' +
    '<!-- house rules --><div class="row"><div class="col"><div class="mt-5 mx-auto pl-4 px-4"><h1 class="sm-tcs-title text-decoration-underline">House Rules</h1></div></div></div>' +
    '<!-- house rules subtitle --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h4 class="sm-tcs-subtitle">Just a few house rules to ensure that we have a good time.</h4></div></div></div>' +
    '<!-- general --><div class="row mt-5"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>General</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="sm-tcs-list"><li><p>Attendance is strictly by <strong>confirmed</strong> invitation only.</p></li><li><p>Should you wish to bring a plus one, it will be at your cost of a <strong>R1000.00</strong>, to be paid by <strong>15 March 2023</strong>. This amount is not refundable. Banking details are available on the home page.</p></li><li><p>A bar will be available, cash and cards are accepted.</p></li></ul></div></div></div>' +
    '<!-- not allowed --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>Not allowed</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="sm-tcs-list"><li><p>Open tabs.</p></li><li><p>Drinks from outside the venue.</p></li><li><p>Children under 18.</p></li></ul></div></div></div></div></div>'
}

function setupHomeMenuOverlay() {

    isOpen = false
    document.getElementById('open-btn').addEventListener('click', showHomeMenuOverlay);
    document.getElementById('close-btn').addEventListener('click', showHomeMenuOverlay);
}

function showHomeMenuOverlay() {

    if (!isOpen) {

        document.getElementById('open-btn').style.display = 'none'
        document.getElementById('close-btn').style.display = 'block'
        document.getElementById('sm-tcs-menu-overlay').style.display = 'block'
    }
    else {

        document.getElementById('open-btn').style.display = 'block'
        document.getElementById('close-btn').style.display = 'none'
        document.getElementById('sm-tcs-menu-overlay').style.display = 'none'
    }

    isOpen = !isOpen
}
// END SM -------------------------------------------------------------------------------------------------------------










/** -------------------------------------------------------------------------------------------------------------------
 *  STORY -------------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */
function getStoryHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return 'small'

    // extra small
    else return getStoryXsTemplate()
}

/** -------------------------------------------------------------------------------------------------------------------
 * XS
 */
function getStoryXsTemplate() {

    return '<div class="container-fluid g-0 xs-story-bg">' +
    '<!-- n&n --><div class="row mb-3"><div class="col xs-story-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-story-top-title">n&n</h1></div></div></div>' +
    '<!-- our story --><div class="row"><div class="col"><div class="mt-3 mx-auto px-4"><h1 class="xs-story-title">Our story</h1></div></div></div>' +
    '<!-- jetline --><div class="row mt-4 mx-3 p-2 xs-story-jetline"><div class="col"><p>We met at a printing shop called Jetline in university. She was waiting to pay for her documents. I asked her where the line is... and she giggled and replied &ldquo;It&lsquo;s everywhere&rdquo;.</p><p>I asked her what her name is, and she said Nthabiseng. I told her my name is Ntsikelelo.</p></div></div>' +
    '<!-- jetline image --><div class="row mt-4 mx-3 p-2"><div class="col-1"></div><div class="col-10"><div class="mx-auto"><img class="mobile-image xs-story-img" src="img/xs/jetline-wits.jpg" alt="jetline-image"></div></div><div class="col-1"></div></div>' +
    '<!-- jetline --><div class="row mt-4 mx-3 p-2 xs-story-jetline"><div class="col"><p>Little did we know our paths will cross again. Nthabiseng and I found out later that week that we shared a class together. She would sit at the upper benches (because she was always late for class lol) and I would sit more lower.</p><p>After some time seeing her regularly in class, I decided to gather some courage and ask her out.</p></div></div>' +
    '<!-- wss2 image --><div class="row mt-4 mx-3 p-2"><div class="col-1"></div><div class="col-10"><div class="mx-auto"><img class="mobile-image xs-story-img" src="img/xs/wss2-wits.jpg" alt="wss2-image"></div></div><div class="col-1"></div></div>' +
    '<!-- wss2 --><div class="row mt-4 mx-3 p-2 xs-story-jetline"><div class="col"><p>After the lecture ended I walked up the stairs towards the late door and followed her. I stopped her outside the lecture room and made some small talk.</p><p>It was time to ask for her numbers... she was hesitant to give me the contact details. I asked her what is my name and she could not remember. I then made a deal with her, saying that if I can remember her name she must give me her numbers... I said &ldquo;your name is Nthabiseng&rdquo;.&#128513;</p><p>We have been inseparable ever since.</p></div></div>' +
    '<!-- wss2 image --><div class="row mt-5 mx-4 p-2"><div class="col-2"></div><div class="col-8"><div class="mx-auto"><h5 class="xs-story-subtitle">Our First Selfie</h5><img class="mobile-image xs-story-img-round" src="img/xs/first-selfie.jpg" alt="first-selfie-image"></div></div><div class="col-2"></div></div>' +
    '<!-- questions --><div class="row"><div class="col"><div class="mt-5 mx-auto px-4"><h1 class="xs-story-title">Questions</h1></div></div></div>' +
    '<!-- questions table --><div class="row mt-3 mx-3"><div class="col"><div class="mx-auto"><table class="table table-bordered"><tbody>' +
    '<!-- q1 --><tr><td class="xs-story-table-data p-3 xs-story-table-data-header">1</td><td class="xs-story-table-data p-3 xs-story-table-data-header">How long have we been together?</td></tr>' +
    '<!-- ans1 --><tr><td class="xs-story-table-data p-3" colspan="2">We have been together 7 years, 11 months, and some days.</td></tr>' +
    '<!-- q2 --><tr><td class="xs-story-table-data p-3 xs-story-table-data-header">2</td><td class="xs-story-table-data p-3 xs-story-table-data-header">What is our guilty pleasure?</td></tr>' +
    '<!-- ans2 --><tr><td class="xs-story-table-data p-3" colspan="2">Anything to do with food, we love eating and restauranting.</td></tr>' +
    '<!-- q3 --><tr><td class="xs-story-table-data p-3 xs-story-table-data-header">3</td><td class="xs-story-table-data p-3 xs-story-table-data-header">Top bucket list item?</td></tr>' +
    '<!-- ans3 --><tr><td class="xs-story-table-data p-3" colspan="2">Swimming with a whale shark.</td></tr></tbody></table></div></div></div>' +
    '<!-- est --><div class="row mt-5"><div class="col"><div class="mx-auto"><p class="xs-story-est">Est. 2015</p></div></div></div>' +
    '<!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'
}
// END XS -------------------------------------------------------------------------------------------------------------










/** -------------------------------------------------------------------------------------------------------------------
 *  SCHEDULE ----------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */
function getScheduleHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return getScheduleSmTemplate()

    // extra small
    else return getScheduleXsTemplate()
}

/** -------------------------------------------------------------------------------------------------------------------
 * CONSTANTS
 */
var isOpen = false




/** -------------------------------------------------------------------------------------------------------------------
 * START CALLBACKS
 */
function mountedScheduleCallbacks() {

    let width = window.innerWidth

    // small
    if (576 <= width && width < 768) setupScheduleMenuOverlay()
}
// END CALLBACKS ------------------------------------------------------------------------------------------------------




/** -------------------------------------------------------------------------------------------------------------------
 * START XS
 */
function getScheduleXsTemplate() {

    return '<div class="container-fluid g-0 xs-schedule-bg">' +
    '<!-- n&n --><div class="row mb-3"><div class="col xs-schedule-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-schedule-top-title">n&n</h1></div></div></div>' +
    '<!-- playlist --><div class="row"><div class="col"><div class="mt-3 mx-auto px-4"><h1 class="xs-schedule-title text-decoration-underline">Schedule</h1></div></div></div>' +
    '<!-- get to know --><div class="row"><div class="col"><div class="mx-auto px-5"><p class="xs-schedule-subtitle">The business of the day &#40;arrive on time&#41;. If you need a place to stay overnight, there is an affordable guest house next to the venue. The details of the guest house are below.</p></div></div></div><div class="row mt-3 mx-3"><div class="col"><table class="table table-fit table-bordered"><tbody><tr><td class="xs-schedule-table-data-center p-3">09:45</td><td class="p-3">Arrival</td></tr><tr><td class="xs-schedule-table-data-center p-3">10:00</td><td class="p-3">Chapel</td></tr><tr><td class="xs-schedule-table-data-center p-3">--</td><td class="p-3">Say cheese</td></tr><tr><td class="xs-schedule-table-data-center p-3">--</td><td class="p-3">Lunch time</td></tr><tr><td class="xs-schedule-table-data-center p-3">--</td><td class="p-3">Toast &#x1f942;</td></tr><tr><td class="xs-schedule-table-data-center p-3">--</td><td class="p-3">Good times</td></tr></tbody></table></div></div>' +
    '<!-- bottom links --><div class="row xs-schedule-bottom-links mt-4 pb-5"><div class="col pb-5">' +
    '<!-- guest house --><div class="row mt-4"><div class="col"><div class="mx-auto px-4"><p class="xs-schedule-bottom-links-heading">Guest house</p></div></div></div>' +
    '<!-- guest house name --><div class="row mt-4"><div class="col"><div class="mx-auto px-4"><p class="xs-schedule-bottom-links-heading">The Orchards Executive Accommodation</p></div></div></div>' +
    '<!-- guest house contact --><div class="row my-2"><div class="col"><div class="mx-auto ps-4 pe-3 pt-3 pb-3"><p class="xs-schedule-text-left">Contact number</p></div></div><div class="col"><div class="mx-auto p-3"><p class="xs-schedule-text-right">+27 82 223 5151</p></div></div></div>' +
    '<!-- guest house contact --><div class="row my-2"><div class="col"><div class="mx-auto ps-4 pe-3 pt-3 pb-3"><p class="xs-schedule-text-left">Email</p></div></div><div class="col"><div class="mx-auto p-3"><p class="xs-schedule-text-right">theorchardsmidrand@gmail.com</p></div></div></div></div></div>' +
    '<!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'
}
// END XS -------------------------------------------------------------------------------------------------------------




/** -------------------------------------------------------------------------------------------------------------------
 * START SM
 */
function getScheduleSmTemplate() {

    return '<div class="container-fluid g-0 sm-tcs-bg">' +
    '<!-- n&n --><div class="row"><div class="col-2">' +
    '<!-- open button --><div id="open-btn" style="display:block"><img src="svg/sm/sm-open-btn.svg" alt="menu-btn" width="48" height="48"></div>' +
    '<!-- close button --><div id="close-btn" style="display:none"><img src="svg/sm/sm-close-btn.svg" alt="menu-btn" width="48" height="48"></div></div><div class="col-8"><div class="px-2 py-2 mx-auto"><h1 class="sm-top-bar-title">n&n</h1></div></div><div class="col-2">' +
    '<!-- menu overlay --><div id="menu-overlay" style="display:none"><ul class="sm-menu-list">' +
    '<!-- home --><li><router-link class="sm-menu-list-item" to="/"><h1>Home</h1><p class="sm-menu-list-item-description">All the important information is here.</p></router-link></li>' +
    '<!-- our story --><li class="mt-3"><router-link class="sm-menu-list-item" to="/story"><h1>Our story</h1><p class="sm-menu-list-item-description">Learn about us, how we met, how long we have been together, etc.</p></router-link></li>' +
    '<!-- our story --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Schedule</h1><p class="sm-menu-list-item-description">Be on time, relax and enjoy</p></router-link></li>' +
    '<!-- guest list --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Guest list</h1><p class="sm-menu-list-item-description">Find out if you are joining us.</p></router-link></li>' +
    '<!-- playlist --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Playlist</h1><p class="sm-menu-list-item-description">Get to know the playlist, so you can groove along. Listen on Spotify or YouTube Music.</p></router-link></li></ul></div></div></div><div class="mx-auto">' +
    '<!-- house rules --><div class="row"><div class="col"><div class="mt-5 mx-auto pl-4 px-4"><h1 class="sm-tcs-title text-decoration-underline">House Rules</h1></div></div></div>' +
    '<!-- house rules subtitle --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h4 class="sm-tcs-subtitle">Just a few house rules to ensure that we have a good time.</h4></div></div></div>' +
    '<!-- general --><div class="row mt-5"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>General</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="sm-tcs-list"><li><p>Attendance is strictly by <strong>confirmed</strong> invitation only.</p></li><li><p>Should you wish to bring a plus one, it will be at your cost of a <strong>R1000.00</strong>, to be paid by <strong>15 March 2023</strong>. This amount is not refundable. Banking details are available on the home page.</p></li><li><p>A bar will be available, cash and cards are accepted.</p></li></ul></div></div></div>' +
    '<!-- not allowed --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>Not allowed</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="sm-tcs-list"><li><p>Open tabs.</p></li><li><p>Drinks from outside the venue.</p></li><li><p>Children under 18.</p></li></ul></div></div></div></div></div>'
}

function setupScheduleMenuOverlay() {

    isOpen = false
    document.getElementById('open-btn').addEventListener('click', showScheduleMenuOverlay);
    document.getElementById('close-btn').addEventListener('click', showScheduleMenuOverlay);
}

function showScheduleMenuOverlay() {

    if (!isOpen) {

        document.getElementById('open-btn').style.display = 'none'
        document.getElementById('close-btn').style.display = 'block'
        document.getElementById('sm-tcs-menu-overlay').style.display = 'block'
    }
    else {

        document.getElementById('open-btn').style.display = 'block'
        document.getElementById('close-btn').style.display = 'none'
        document.getElementById('sm-tcs-menu-overlay').style.display = 'none'
    }

    isOpen = !isOpen
}
// END SM -------------------------------------------------------------------------------------------------------------










/** -------------------------------------------------------------------------------------------------------------------
 *  SEAT --------------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */
/**
 * Template by windows size
 * @returns rendered page
 */
function getSeatHtmlTemplate() {

    var jsonData = JSON.parse(getJsonGuestListString())

    var sortedGuestList = jsonData.guests.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0))

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return ''

    // extra small
    else return xsSeatTemplate(sortedGuestList)
}

/** -------------------------------------------------------------------------------------------------------------------
 *  START XS
 */
function xsSeatTemplate(sGuestList) {


    let stringBuilder = ''
    let currentLetter = ''

    let alphabetTemple = '<div class="row mt-5"><div class="col"><h1 class="xs-seat-list-alphabet ms-4">#letter</h1></div></div>'
    let guestTemplate = '<div class="row mt-3 mx-3"><div class="col"><table class="table table-bordered"><tbody><!-- full name --><tr><td class="xs-seat-list-alphabet-table-data p-3" colspan="10">#full-name</td></tr><!-- meta --><tr><td class="xs-seat-list-alphabet-table-data p-3" colspan="4">Attending</td><td class="xs-seat-list-alphabet-table-data xs-seat-list-alphabet-table-data-center p-3" colspan="2">#attending</td><td class="xs-seat-list-alphabet-table-data xs-seat-list-alphabet-table-data-center p-3" colspan="4">#relationship</td></tr><!-- seat number --><tr><td class="xs-seat-list-alphabet-table-data p-3" colspan="6">Table number</td><td class="xs-seat-list-alphabet-table-data xs-seat-list-alphabet-table-data-center p-3" colspan="4">#table</td></tr></tbody></table></div></div>'
    let xsTemplate = '<div class="container-fluid g-0 xs-seat-bg"><!-- n&n --><div class="row mb-3"><div class="col xs-seat-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-seat-top-title">n&n</h1></div></div></div><!-- guest list --><div class="row"><div class="col"><div class="mt-3 mx-auto px-4"><h1 class="xs-seat-title text-decoration-underline">Seating plan</h1></div></div></div><!-- guest list caption --><div class="row"><div class="col"><div class="mx-auto px-4"><!-- <p>In alphabetical order (name)</p> --><p>RSVP by <span class="text-decoration-underline">18 March 2023</span></p></div></div></div><!-- list --><div class="row"><div class="col"><div id="xs-seat-list" class="mx-auto px-2">#$#$#$</div></div></div><!-- guest list caption --><div class="row mt-5"><div class="col"><div class="mx-auto px-4"><!-- <p>Total guests #total-guests</span></p> --></div></div></div><!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'


    for (let i = 0; i < sGuestList.length; i++) {

        let guestItem = sGuestList[i]

        let letter = Array.from(guestItem.firstName)[0].toLowerCase()

        if (currentLetter !== letter) {

            stringBuilder += alphabetTemple.replace('#letter', letter)
            currentLetter = letter
        }

        let firstName = guestItem.firstName
        let lastName = guestItem.lastName
        let attending = guestItem.attending
        let relationship = guestItem.relationship
        let table = guestItem.table

        stringBuilder += guestTemplate.replace('#full-name', firstName + ' ' + lastName).replace('#attending', attending).replace('#relationship', relationship).replace('#table', table)
    }

    xsTemplate = xsTemplate.replace('#$#$#$', '<p class="mt-5 px-5">Please check the seating plan on the night before the wedding</p>').replace('#total-guests', '--')

    return xsTemplate
}
// END XS -------------------------------------------------------------------------------------------------------------









/** -------------------------------------------------------------------------------------------------------------------
 *  PLAYLIST ----------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */
/**
 * Template by windows size
 * @returns rendered page
 */
function getPlaylistHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return 'small'

    // extra small
    else return getPlaylistXsTemplate()
}

function getPlaylistXsTemplate() {

    return '<div class="container-fluid g-0 xs-playlist-bg">' +
    '<!-- n&n --><div class="row mb-3"><div class="col xs-playlist-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-playlist-top-title">n&n</h1></div></div></div>' +
    '<!-- playlist --><div class="row"><div class="col"><div class="mt-3 mx-auto px-4"><h1 class="xs-playlist-title text-decoration-underline">Playlist</h1></div></div></div>' +
    '<!-- get to know --><div class="row"><div class="col"><div class="mx-auto px-4"><h4 class="xs-playlist-subtitle">Get to know the music, listen and enjoy. Bring your dance moves!</h4></div></div></div><div class="row mt-3"><div class="col-1"></div>' +
    '<!-- playlist --><div class="col-10 p-0"><iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0HaCnSumqr4lZbI7fQIsm5?utm_source=generator&theme=0" width="100%" height="512" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div><div class="col-1"></div></div>' +
    '<!-- bottom links --><div class="row xs-playlist-bottom-links mt-4 pb-5"><div class="col pb-5">' +
    '<!-- follow --><div class="row mt-4"><div class="col"><div class="mx-auto px-4"><p class="xs-playlist-bottom-links-heading">Follow our playlist</p></div></div></div>' +
    '<!-- yt music + spotify --><div class="row my-2">' +
    '<!-- yt music --><div class="col"><div class="mx-auto ps-4 pe-3 pt-3 pb-3"><a class="xs-playlist-link" href="https://music.youtube.com/playlist?list=PLnuWhUnPio2kSmBmnp2xT0m-3CHCrg58c&feature=share" target="_blank"><img src="img/xs/yt-music.png" alt="yt-music" width="132"></a></div></div>' +
    '<!-- spotify --><div class="col"><div class="mx-auto p-3"><a class="xs-playlist-link" href="https://open.spotify.com/playlist/0HaCnSumqr4lZbI7fQIsm5?si=bM0MPtglTCyNnioqWDv3Vw" target="_blank"><img src="img/xs/spotify.png" alt="spotify" width="96"></a></div></div></div></div></div>' +
    '<!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'
}









/** -------------------------------------------------------------------------------------------------------------------
 *  TCS ---------------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */
function getTcsHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return getTcsSmTemplate()

    // extra small
    else return getTcsXsTemplate()
}

/** -------------------------------------------------------------------------------------------------------------------
 * CONSTANTS
 */
var isOpen = false




/** -------------------------------------------------------------------------------------------------------------------
 * START CALLBACKS
 */
function mountedTcsCallbacks() {

    let width = window.innerWidth

    // small
    if (576 <= width && width < 768) setupTcsMenuOverlay()
}
// END XS -------------------------------------------------------------------------------------------------------------




/** -------------------------------------------------------------------------------------------------------------------
 * START XS
 */
function getTcsXsTemplate() {

    return '<div class="container-fluid g-0 xs-tcs-bg">' +
    '<!-- n&n --><div class="row mb-3"><div class="col xs-menu-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-tcs-top-title">n&n</h1></div></div></div><div class="mx-auto">' +
    '<!-- house rules --><div class="row"><div class="col"><div class="mt-5 mx-auto pl-4 px-4"><h1 class="xs-tcs-title text-decoration-underline">House Rules</h1></div></div></div>' +
    '<!-- house rules subtitle --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h4 class="xs-tcs-subtitle">Just a few house rules to ensure that we have a good time.</h4></div></div></div>' +
    '<!-- general --><div class="row"><div class="col"><div class="mt-5 mx-auto px-4"><h5><strong>General</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="xs-tcs-list"><li><p>Attendance is strictly by <strong>confirmed</strong> invitation only.</p></li><li><p>Should you wish to bring a plus one, it will be at your cost of a <strong>R1000.00</strong>, to be paid by <strong>15 March 2023</strong>. This amount is not refundable. Banking details are available on the home page.</p></li><li><p>A bar will be available, cash and cards are accepted.</p></li></ul></div></div></div>' +
    '<!-- not allowed --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>Not allowed</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="xs-tcs-list"><li><p>Open tabs.</p></li><li><p>Drinks from outside the venue.</p></li><li><p>Children under 18.</p></li></ul></div></div></div>' +
    '<!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div></div>'
}
// END XS -------------------------------------------------------------------------------------------------------------




/** -------------------------------------------------------------------------------------------------------------------
 * START SM
 */
function getTcsSmTemplate() {

    return '<div class="container-fluid g-0 sm-tcs-bg">' +
    '<!-- n&n --><div class="row"><div class="col-2">' +
    '<!-- open button --><div id="open-btn" style="display:block"><img src="svg/sm/sm-open-btn.svg" alt="menu-btn" width="48" height="48"></div>' +
    '<!-- close button --><div id="close-btn" style="display:none"><img src="svg/sm/sm-close-btn.svg" alt="menu-btn" width="48" height="48"></div></div><div class="col-8"><div class="px-2 py-2 mx-auto"><h1 class="sm-top-bar-title">n&n</h1></div></div><div class="col-2">' +
    '<!-- menu overlay --><div id="menu-overlay" style="display:none"><ul class="sm-menu-list">' +
    '<!-- home --><li><router-link class="sm-menu-list-item" to="/"><h1>Home</h1><p class="sm-menu-list-item-description">All the important information is here.</p></router-link></li>' +
    '<!-- our story --><li class="mt-3"><router-link class="sm-menu-list-item" to="/story"><h1>Our story</h1><p class="sm-menu-list-item-description">Learn about us, how we met, how long we have been together, etc.</p></router-link></li>' +
    '<!-- our story --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Schedule</h1><p class="sm-menu-list-item-description">Be on time, relax and enjoy</p></router-link></li>' +
    '<!-- guest list --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Guest list</h1><p class="sm-menu-list-item-description">Find out if you are joining us.</p></router-link></li>' +
    '<!-- playlist --><li class="mt-3"><router-link class="sm-menu-list-item" to="/"><h1>Playlist</h1><p class="sm-menu-list-item-description">Get to know the playlist, so you can groove along. Listen on Spotify or YouTube Music.</p></router-link></li></ul></div></div></div><div class="mx-auto">' +
    '<!-- house rules --><div class="row"><div class="col"><div class="mt-5 mx-auto pl-4 px-4"><h1 class="sm-tcs-title text-decoration-underline">House Rules</h1></div></div></div>' +
    '<!-- house rules subtitle --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h4 class="sm-tcs-subtitle">Just a few house rules to ensure that we have a good time.</h4></div></div></div>' +
    '<!-- general --><div class="row mt-5"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>General</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="sm-tcs-list"><li><p>Attendance is strictly by <strong>confirmed</strong> invitation only.</p></li><li><p>Should you wish to bring a plus one, it will be at your cost of a <strong>R1000.00</strong>, to be paid by <strong>15 March 2023</strong>. This amount is not refundable. Banking details are available on the home page.</p></li><li><p>A bar will be available, cash and cards are accepted.</p></li></ul></div></div></div>' +
    '<!-- not allowed --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>Not allowed</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="sm-tcs-list"><li><p>Open tabs.</p></li><li><p>Drinks from outside the venue.</p></li><li><p>Children under 18.</p></li></ul></div></div></div></div></div>'
}

function setupTcsMenuOverlay() {

    isOpen = false
    document.getElementById('open-btn').addEventListener('click', showTcsMenuOverlay);
    document.getElementById('close-btn').addEventListener('click', showTcsMenuOverlay);
}

function showTcsMenuOverlay() {

    if (!isOpen) {

        document.getElementById('open-btn').style.display = 'none'
        document.getElementById('close-btn').style.display = 'block'
        document.getElementById('sm-tcs-menu-overlay').style.display = 'block'
    }
    else {

        document.getElementById('open-btn').style.display = 'block'
        document.getElementById('close-btn').style.display = 'none'
        document.getElementById('sm-tcs-menu-overlay').style.display = 'none'
    }

    isOpen = !isOpen
}
// END SM -------------------------------------------------------------------------------------------------------------









/** -------------------------------------------------------------------------------------------------------------------
 *  MENU --------------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */
function getMenuHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return 'small'

    // extra small
    else return getMenuXsTemplate()
}



/** -------------------------------------------------------------------------------------------------------------------
 * START XS
 */
function getMenuXsTemplate() {

    return '<div class="container-fluid g-0 xs-menu-bg">' +
    '<!-- n&n --><div class="row mb-3"><div class="col xs-menu-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-menu-top-title">n&n</h1></div></div></div>' +
    '<!-- links --><div class="row mt-5"><div class="col-2"></div><div class="col-8"><ul class="xs-menu-list">' +
    '<!-- home --><li><router-link class="xs-menu-list-item" to="/"><h1>Home</h1><p class="xs-menu-list-item-description">All the important information is here.</p></router-link></li>' +
    '<!-- our story --><li class="mt-5"><router-link class="xs-menu-list-item" to="/story"><h1>Our story</h1><p class="xs-menu-list-item-description">Learn about us, how we met, how long we have been together, etc.</p></router-link></li>' +
    '<!-- our story --><li class="mt-5"><router-link class="xs-menu-list-item" to="/schedule"><h1>Schedule</h1><p class="xs-menu-list-item-description">Be on time, relax and enjoy</p></router-link></li>' +
    '<!-- seating plan --><li class="mt-5"><router-link class="xs-menu-list-item" to="/seat"><h1>Seating plan</h1><p class="xs-menu-list-item-description">Find out where you are seated.</p></router-link></li>' +
    '<!-- playlist --><li class="mt-5"><router-link class="xs-menu-list-item" to="/playlist"><h1>Playlist</h1><p class="xs-menu-list-item-description">Get to know the playlist, so you can groove along. Listen on Spotify or YouTube Music.</p></router-link></li></ul></div><div class="col-2"></div></div></div>'
}
// END XS -------------------------------------------------------------------------------------------------------------










/** -------------------------------------------------------------------------------------------------------------------
 *  JSON --------------------------------------------------------------------------------------------------------------
 *  -------------------------------------------------------------------------------------------------------------------
 */
function getJsonGuestListString() {

    return '{' +
    '    "guests": [' +
    '' +
    '        {' +
    '            "id": 1,' +
    '            "firstName": "Gogo",' +
    '            "lastName": "Agnes",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 2,' +
    '            "firstName": "Ndumiso",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 3,' +
    '            "firstName": "Sibusiso",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 4,' +
    '            "firstName": "Sifiso",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 5,' +
    '            "firstName": "Siphathisiwe",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 6,' +
    '            "firstName": "Ntokozo",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 7,' +
    '            "firstName": "Sbusiso",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 8,' +
    '            "firstName": "Sihle",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 9,' +
    '            "firstName": "Leroy",' +
    '            "lastName": "G",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 10,' +
    '            "firstName": "Elaine",' +
    '            "lastName": "G",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 11,' +
    '            "firstName": "Zoe",' +
    '            "lastName": "",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 12,' +
    '            "firstName": "MaHlelo",' +
    '            "lastName": "",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 13,' +
    '            "firstName": "Eli",' +
    '            "lastName": "C",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 14,' +
    '            "firstName": "Buhle",' +
    '            "lastName": "C",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 15,' +
    '            "firstName": "Takunda",' +
    '            "lastName": "",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 16,' +
    '            "firstName": "Vusa",' +
    '            "lastName": "D",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 17,' +
    '            "firstName": "Andile",' +
    '            "lastName": "D",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 18,' +
    '            "firstName": "Michael",' +
    '            "lastName": "C",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 19,' +
    '            "firstName": "Emanuel",' +
    '            "lastName": "C",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 20,' +
    '            "firstName": "Paul",' +
    '            "lastName": "D",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 21,' +
    '            "firstName": "Mbali",' +
    '            "lastName": "",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 22,' +
    '            "firstName": "Gogo",' +
    '            "lastName": "Clorane",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 23,' +
    '            "firstName": "Gogo",' +
    '            "lastName": "Thandiwe",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 24,' +
    '            "firstName": "Nomthandazo",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 25,' +
    '            "firstName": "Andrew",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 26,' +
    '            "firstName": "Nomsa",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 27,' +
    '            "firstName": "Ronnie",' +
    '            "lastName": "P",' +
    '            "attending": "TBC",' +
    '            "relationship": "Pastor",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 28,' +
    '            "firstName": "Ntando",' +
    '            "lastName": "P",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 29,' +
    '            "firstName": "Koketso",' +
    '            "lastName": "R",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 30,' +
    '            "firstName": "Puleng",' +
    '            "lastName": "T",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 31,' +
    '            "firstName": "Yvette",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 32,' +
    '            "firstName": "Kutala",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 33,' +
    '            "firstName": "Dikeledi",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 34,' +
    '            "firstName": "Nomasondo",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 4' +
    '        },' +
    '        {' +
    '            "id": 35,' +
    '            "firstName": "Noma",' +
    '            "lastName": "D",' +
    '            "attending": "Yes",' +
    '            "relationship": "Mother",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 36,' +
    '            "firstName": "Mduduzi",' +
    '            "lastName": "N",' +
    '            "attending": "Yes",' +
    '            "relationship": "Brother",' +
    '            "table": 8' +
    '        },' +
    '        {' +
    '            "id": 37,' +
    '            "firstName": "Charles",' +
    '            "lastName": "N",' +
    '            "attending": "Yes",' +
    '            "relationship": "Father",' +
    '            "table": 2' +
    '        },' +
    '        {' +
    '            "id": 1,' +
    '            "firstName": "Gontse",' +
    '            "lastName": "N",' +
    '            "attending": "Yes",' +
    '            "relationship": "Mother",' +
    '            "table": 6' +
    '        },' +
    '        {' +
    '            "id": 2,' +
    '            "firstName": "Letlhogonolo",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 9' +
    '        },' +
    '        {' +
    '            "id": 3,' +
    '            "firstName": "Mebra",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 4,' +
    '            "firstName": "Patrick",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 5,' +
    '            "firstName": "Phakamile",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 6,' +
    '            "firstName": "Tokozi",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 7,' +
    '            "firstName": "Dibuseng",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 8,' +
    '            "firstName": "Patrick",' +
    '            "lastName": "Plus 1",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 9,' +
    '            "firstName": "Phakamile",' +
    '            "lastName": "Plus 1",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 10,' +
    '            "firstName": "Tokozi",' +
    '            "lastName": "Plus 1",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 7' +
    '        },' +
    '        {' +
    '            "id": 11,' +
    '            "firstName": "Mpho",' +
    '            "lastName": "T",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 6' +
    '        },' +
    '        {' +
    '            "id": 12,' +
    '            "firstName": "Lekoko",' +
    '            "lastName": "T",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 6' +
    '        },' +
    '        {' +
    '            "id": 13,' +
    '            "firstName": "Kenewang",' +
    '            "lastName": "T",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 6' +
    '        },' +
    '        {' +
    '            "id": 14,' +
    '            "firstName": "Lizzy",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 6' +
    '        },' +
    '        {' +
    '            "id": 15,' +
    '            "firstName": "Anele",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 16,' +
    '            "firstName": "Andro",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 17,' +
    '            "firstName": "Ayanda",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Sister",' +
    '            "table": 3' +
    '        },' +
    '        {' +
    '            "id": 18,' +
    '            "firstName": "Portia",' +
    '            "lastName": "D",' +
    '            "attending": "TBC",' +
    '            "relationship": "Sister",' +
    '            "table": 3' +
    '        },' +
    '        {' +
    '            "id": 19,' +
    '            "firstName": "Dinah",' +
    '            "lastName": "D",' +
    '            "attending": "TBC",' +
    '            "relationship": "Sister",' +
    '            "table": 3' +
    '        },' +
    '        {' +
    '            "id": 20,' +
    '            "firstName": "Thandolwethu",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Sister",' +
    '            "table": 3' +
    '        },' +
    '        {' +
    '            "id": 21,' +
    '            "firstName": "Kagiso",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 3' +
    '        },' +
    '        {' +
    '            "id": 22,' +
    '            "firstName": "Hope",' +
    '            "lastName": "S",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 1' +
    '        },' +
    '        {' +
    '            "id": 23,' +
    '            "firstName": "Thozamile",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 3' +
    '        },' +
    '        {' +
    '            "id": 24,' +
    '            "firstName": "Bulelani",' +
    '            "lastName": "N",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 3' +
    '        },' +
    '        {' +
    '            "id": 25,' +
    '            "firstName": "Rorisang",' +
    '            "lastName": "P",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 9' +
    '        },' +
    '        {' +
    '            "id": 26,' +
    '            "firstName": "Rorisang",' +
    '            "lastName": "Plus 1",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 9' +
    '        },' +
    '        {' +
    '            "id": 27,' +
    '            "firstName": "Lesego",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Family",' +
    '            "table": 9' +
    '        },' +
    '        {' +
    '            "id": 28,' +
    '            "firstName": "Mpho",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 9' +
    '        },' +
    '        {' +
    '            "id": 29,' +
    '            "firstName": "Malcolm",' +
    '            "lastName": "B",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 9' +
    '        },' +
    '        {' +
    '            "id": 30,' +
    '            "firstName": "Palesa",' +
    '            "lastName": "M",' +
    '            "attending": "TBC",' +
    '            "relationship": "Friend",' +
    '            "table": 9' +
    '        }' +
    '    ]' +
    '}'
}