const home = {

    template: getHtmlTemplate(),

    mounted : function () {

        mountedCallbacks()
    }
}
export default home



/**
 * Template by windows size
 * @returns rendered page
 */
function getHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) return 'extra large'

    // large
    else if (width >= 992) return 'large'

    // medium
    else if (width >= 768) return 'medium'

    // small
    else if (width >= 576) return getSmTemplate()

    // extra small
    else return getXsTemplate()
}

/** -------------------------------------------------------------------------------------------------------------------
 * CONSTANTS
 */
var isOpen = false




/** -------------------------------------------------------------------------------------------------------------------
 * START CALLBACKS
 */
function mountedCallbacks() {

    let width = window.innerWidth

    // small
    if (576 <= width && width < 768) setupMenuOverlay()
}
// END CALLBACKS ------------------------------------------------------------------------------------------------------




/** -------------------------------------------------------------------------------------------------------------------
 * START XS
 */
function getXsTemplate() {

    return '<div class="container-fluid g-0">' +
    '<!-- n&n --><div class="row"><div class="col"><div class="px-2 py-2 mx-auto"><h1 class="xs-top-bar-title">n&n</h1></div></div></div>' +
    '<!-- header image --><div class="row"><div class="col"><img class="mobile-image" src="svg/xs/home-header.svg" alt="header-image"></div></div>' +
    '<!-- invitation message --><div class="row"><div class="col"><div class="mt-4 mx-auto"><h1 class="xs-home-title">You are invited</h1></div></div></div>' +
    '<!-- invitation message divider --><div class="row"><div class="col"><div class="mx-auto"><img class="xs-home-divider" src="svg/xs/home-divider.svg" alt="title-divider"></div></div></div>' +
    '<!-- invitation message paragraph --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><p class="xs-home-paragraph">Together with their families</p><p class="xs-home-paragraph"><strong>Nthabiseng Nkomo</strong></p><p class="xs-home-paragraph"><strong>&#38;</strong></p><p class="xs-home-paragraph"><strong>Ntsikelelo Nonjoli</strong></p><p class="xs-home-paragraph">request your presence at the ceremony and celebration of their traditional wedding.</p></div></div></div>' +
    '<!-- event information image --><div class="row"><div class="col"><img class="mobile-image xs-home-event-info" src="svg/xs/home-event-info.svg" alt="event information"></div></div>' +
    '<!-- rsvp --><div class="row"><div class="col"><div class="mt-4 mx-auto"><h1 class="xs-home-title">RSVP</h1></div></div></div>' +
    '<!-- rsvp divider --><div class="row"><div class="col"><div class="mx-auto"><img class="xs-home-divider" src="svg/xs/home-divider.svg" alt="title-divider"></div></div></div>' +
    '<!-- rsvp paragraph --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><p class="xs-home-paragraph">Your response is requested by <strong>18 March 2023</strong>.</p><p class="xs-home-paragraph">In your response kindly include your dietary requirements and your drinking preference (alcoholic or non-alcoholic).</p><p class="xs-home-paragraph">Find our contacts details <strong>below</strong>.</p></div></div></div>' +
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
function getSmTemplate() {

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

function setupMenuOverlay() {

    isOpen = false
    document.getElementById('open-btn').addEventListener('click', showMenuOverlay);
    document.getElementById('close-btn').addEventListener('click', showMenuOverlay);
}

function showMenuOverlay() {

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
