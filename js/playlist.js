const playlist = {

    template: getHtmlTemplate()
}
export default playlist


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
     
        return '<div class="container-fluid g-0 xs-playlist-bg"><!-- n&n --><div class="row mb-3"><div class="col xs-playlist-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-playlist-top-title">n&n</h1></div></div></div><!-- playlist --><div class="row"><div class="col"><div class="mt-5 mx-auto pl-4 px-4"><h1 class="xs-playlist-title text-decoration-underline">Playlist</h1></div></div></div><!-- caption --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h4 class="xs-playlist-subtitle">Get to know the music, listen and enjoy. Also bring your dance moves!</h4></div></div></div><!-- general --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>General</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="xs-tcs-list"><li><p>Attendance is strictly by <strong>confirmed</strong> invitation only.</p></li><li><p>Should you wish to bring a plus one, it will be at your cost of a <strong>R1000.00</strong>, to be paid by <strong>15 March 2023</strong>. This amount is not refundable. Banking details are available on the home page.</p></li><li><p>A bar will be available, cash and cards are accepted.</p></li></ul></div></div></div><!-- not allowed --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h5><strong>Not allowed</strong></h5></div></div></div><div class="row"><div class="col"><div class="mx-auto px-4"><ul class="xs-tcs-list"><li><p>Open tabs.</p></li><li><p>Drinks from outside the venue.</p></li><li><p>Children under 18.</p></li></ul></div></div></div><!-- bottom links --><div class="row xs-playlist-bottom-links"><div class="col mb-5"><!-- follow --><div class="row mt-4"><div class="col"><div class="mx-auto px-4"><p class="xs-playlist-bottom-links-heading">Follow our playlist</p></div></div></div><!-- yt music + spotify --><div class="row mt-2"><!-- yt music --><div class="col"><div class="mx-auto ps-4 pe-3 pt-3 pb-3"><a class="xs-playlist-link" href="https://www.easyregistry.co.za/Registry/Gifts/meetthenonjolis" target="_blank"><img src="img/xs/yt-music.png" alt="yt-music" width="132"></a></div></div><!-- spotify --><div class="col"><div class="mx-auto p-3"><a class="xs-playlist-link" href="https://open.spotify.com/playlist/0HaCnSumqr4lZbI7fQIsm5?si=bM0MPtglTCyNnioqWDv3Vw" target="_blank"><img src="img/xs/spotify.png" alt="spotify" width="96"></a></div></div></div></div></div><!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'
    }
}