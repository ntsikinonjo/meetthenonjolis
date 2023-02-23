const tcs = {

    template: getHtmlTemplate()
}
export default tcs


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
     
        return '<div class="container-fluid g-0 xs-tcs-bg"><div class="xs-tcs-bg-img"><!-- house rules --><div class="row"><div class="col"><div class="mt-4 mx-auto pl-4 px-4"><h1 class="xs-tcs-title text-decoration-underline">House Rules</h1></div></div></div><!-- house rules subtitle --><div class="row"><div class="col"><div class="mt-2 mx-auto px-4"><h4 class="xs-tcs-subtitle">Just a few house rules to ensure that we have a good time.</h4></div></div></div><!-- house rules list --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><ul><li><p>Attendance is strictly by confirmed invitation only.</p></li><li><p>Should you wish to bring a plus one, it will be at your cost of a <strong>R1000.00</strong>, to be paid by <strong>15 March 2023</strong>. This amount is not refundable. Banking details are available on the home page.</p></li><li><p>A bar will be available, cash and cards are accepted.</p></li><li><p class="text-decoration-underline">Not allowed:</p></li><ol><li><p>Open tabs.</p></li><li><p>Drinks from outside the venue.</p></li><li><p>Children under 18.</p></li></ol></ul></div></div></div><!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div></div>'
    }
}