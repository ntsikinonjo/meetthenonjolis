import guestList from '../json/guest-list.json' assert { type: 'json' };

const guest = {

    template: getHtmlTemplate()
}
export default guest



/**
 * Template by windows size
 * @returns rendered page
 */
function getHtmlTemplate() {

    // var data = JSON.parse(fs.readFileSync('./json/guest-list.json'))
    // fetch('./json/guest-list.json').then((response) => response.json()).then((json) => guestList = json);

    var sortedGuestList = guestList.guests.sort((a,b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0))

    let width = window.innerWidth

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
     
        return xsTemplate(sortedGuestList)
    }
}

function xsTemplate(sGuestList) {

    let xsTemplate = '<div class="container-fluid g-0 xs-guest-bg"><!-- n&n --><div class="row mb-3"><div class="col xs-guest-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-guest-top-title">n&n</h1></div></div></div><!-- guest list --><div class="row"><div class="col"><div class="mt-3 mx-auto px-4"><h1 class="xs-guest-title text-decoration-underline">Guest list</h1></div></div></div><!-- guest list caption --><div class="row"><div class="col"><div class="mx-auto px-4"><p>In alphabetical order (name)</p><p>RSVP by <span class="text-decoration-underline">18 March 2023</span></p></div></div></div><!-- list --><div class="row"><div class="col"><div id="xs-guest-list" class="mx-auto px-2">#$#$#$</div></div></div><!-- guest list caption --><div class="row mt-5"><div class="col"><div class="mx-auto px-4"><p>Total guests #total-guests</p></div></div></div><!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'

    let stringBuilder = ''

    let alphabetTemple = '<div class="row mt-5"><div class="col"><h1 class="xs-guest-list-alphabet ms-4">#letter</h1></div></div>'
    let guestTemplate = '<div class="row mt-3 mx-3"><div class="col"><table class="table table-bordered"><tbody><!-- full name --><tr><td class="xs-guest-list-alphabet-table-data p-3" colspan="10">#full-name</td></tr><!-- meta --><tr><td class="xs-guest-list-alphabet-table-data p-3" colspan="4">Attending</td><td class="xs-guest-list-alphabet-table-data xs-guest-list-alphabet-table-data-center p-3" colspan="2">#attending</td><td class="xs-guest-list-alphabet-table-data xs-guest-list-alphabet-table-data-center p-3" colspan="4">#relationship</td></tr></tbody></table></div></div>'

    let currentLetter = ''

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

        stringBuilder += guestTemplate.replace('#full-name', firstName + ' ' + lastName).replace('#attending', attending).replace('#relationship', relationship)
    }

    xsTemplate = xsTemplate.replace('#$#$#$', stringBuilder).replace('#total-guests', sGuestList.length)

    return xsTemplate
}