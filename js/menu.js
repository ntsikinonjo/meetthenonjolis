const menu = {

    template: getHtmlTemplate()
}
export default menu


function getHtmlTemplate() {

    var width = window.innerWidth

    // extra large
    if (width >= 1200) {

        return 'extra large'
    }

    // large
    else if (width >= 992) {

        return 'large'
    }

    // medium
    else if (width >= 768) {

        return 'medium'
    }

    // small
    else if (width >= 576) {

        return 'small'
    }

    // extra small
    else {
     
        return '<div class="container-fluid g-0 xs-menu-bg"><!-- n&n --><div class="row mb-3"><div class="col xs-menu-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-menu-top-title">n&n</h1></div></div></div><!-- links --><div class="row mt-5"><div class="col-2"></div><div class="col-8"><ul class="xs-menu-list"><!-- home --><li><router-link class="xs-menu-list-item" to="/"><h1>Home</h1><p class="xs-menu-list-item-description">All the important information is here.</p></router-link></li><!-- our story --><li class="mt-5"><router-link class="xs-menu-list-item" to="/"><h1>Our story</h1><p class="xs-menu-list-item-description">Learn about us, how we met, how long we have been together, etc.</p></router-link></li><!-- guest list --><li class="mt-5"><router-link class="xs-menu-list-item" to="/"><h1>Guest list</h1><p class="xs-menu-list-item-description">Find out if you are joining us.</p></router-link></li><!-- playlist --><li class="mt-5"><router-link class="xs-menu-list-item" to="/"><h1>Playlist</h1><p class="xs-menu-list-item-description">Get to know the playlist, so you can groove along. Listen on Spotify or YouTube Music.</p></router-link></li></ul></div><div class="col-2"></div></div></div>'
    }
}