const schedule = {

    template: getScheduleHtmlTemplate()
}
export default schedule


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
    if (576 <= width && width < 768) setupMenuOverlay()
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