const menu = {

    template: getMenuHtmlTemplate()
}
export default menu


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