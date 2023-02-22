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
     
        return '<div class="container-fluid g-0"><!-- terms and conditions --><div class="row"><div class="col"><div class="mt-4 mx-auto"><h1 class="xs-home-title">Terms &#38; Conditions</h1></div></div></div><!-- terms and conditions divider --><div class="row"><div class="col"><div class="mt-2 mx-auto"><img class="xs-home-divider" src="svg/xs/home-divider.svg" alt="title-divider"></div></div></div><!-- terms and conditions list --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><p class="xs-home-paragraph text-decoration-underline">The following will apply:</p><ul><li><p class="xs-home-list">The invitation only applies if you received it from either Nthabiseng or Ntsikelelo directly, unless otherwise stated by either Nthabiseng or Ntsikelelo.</p></li><li><p class="xs-home-list">All persons who are not present on the guest list will not be allowed inside as instructed by the venue.</p></li><li><p class="xs-home-list">If you would like to bring a plus one who is not on the guest list, the following applies:</p></li><ol><li><p class="xs-home-list">Inform Nthabiseng or Ntsikelelo.</p></li><li><p class="xs-home-list">Pay a <strong>R1,000.00</strong> fee for the additional person/s to Nthabiseng or Ntsikelelo.</p></li><li><p class="xs-home-list">Do the above by the <strong>15th of March 2023.</strong></p></li><li><p class="xs-home-list"><strong>The R1,000.00 fee is unfortunately not refundable as the venue does not refund us!</strong></p></li></ol></ul></div></div></div><!-- drinks image --><div class="row"><div class="col-2"></div><div class="col-8"><img class="mobile-image" src="img/xs/home-drinks.png" alt="title-divider"></div><div class="col-2"></div></div><!-- drinks --><div class="row"><div class="col"><div class="mt-4 mx-auto"><h1 class="xs-home-title">Drinks</h1></div></div></div><!-- drinks divider --><div class="row"><div class="col"><div class="mt-2 mx-auto"><img class="xs-home-divider" src="svg/xs/home-divider.svg" alt="title-divider"></div></div></div><!-- drinks paragraph --><div class="row"><div class="col"><div class="mt-2 mx-auto p-4"><p class="xs-home-paragraph text-decoration-underline">The following will apply:</p><ul><li><p class="xs-home-list">There will be alcohol and non-alcoholic (as per your selection) drinks provided.</p></li><li><p class="xs-home-list">If you would like to purchase any additional drinks, there will be a bar available and the <strong>prices are fair</strong>.</p></li><li><p class="xs-home-list">You will not be allowed to open tabs.</p></li><li><p class="xs-home-list">Card facilities are available, however please bring cash just in case.</p></li><li><p class="xs-home-list">You will not be allowed to bring alcohol from outside, as it will be confiscated and you will be <strong>fined heavily</strong>!</p></li><li><p class="xs-home-list">Please arrange your own accommodation if you feel you will have too much fun and not be able to drive home.</p></li><li><p class="xs-home-list"><strong>Drink responsibly. Do not Drink and Drive!</strong></p></li></ul></div></div></div><!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'
    }
}