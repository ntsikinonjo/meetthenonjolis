const story = {

    template: getStoryHtmlTemplate()
}
export default story

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