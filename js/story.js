const story = {

    template: getHtmlTemplate()
}
export default story

function getHtmlTemplate() {

    let width = window.innerWidth

    // extra large
    if (width >= 1200) {

        return 'extra large story'
    }

    // large
    else if (width >= 992) {

        return 'large story'
    }

    // medium
    else if (width >= 768) {

        return 'medium story'
    }

    // small
    else if (width >= 576) {

        return 'small story'
    }

    // extra small
    else {
     
        return '<div class="container-fluid g-0 xs-story-bg"><!-- n&n --><div class="row mb-3"><div class="col xs-story-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-story-top-title">n&n</h1></div></div></div><!-- our story --><div class="row"><div class="col"><div class="mt-3 mx-auto px-4"><h1 class="xs-story-title">Our story</h1></div></div></div><!-- jetline --><div class="row mt-4 mx-3 p-2 xs-story-jetline"><div class="col"><p>We met at a printing shop called Jetline in university. She was waiting to pay for her documents. I asked her where the line is... and she giggled and replied &ldquo;It&lsquo;s everywhere&rdquo;.</p><p>I asked her what name is, and she said Nthabiseng. I told her my name is Ntsikelelo</p></div></div><!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'
    }
}