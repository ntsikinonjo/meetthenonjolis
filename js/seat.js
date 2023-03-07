import guestList from '../json/guest-list.json' assert { type: 'json' };

const seat = {

    template: getHtmlTemplate()
}
export default seat


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

/** -------------------------------------------------------------------------------------------------------------------
 *  START XS
 */
function xsTemplate(sGuestList) {


    let stringBuilder = ''
    let currentLetter = ''

    let alphabetTemple = '<div class="row mt-5"><div class="col"><h1 class="xs-seat-list-alphabet ms-4">#letter</h1></div></div>'
    let guestTemplate = '<div class="row mt-3 mx-3"><div class="col"><table class="table table-bordered"><tbody><!-- full name --><tr><td class="xs-seat-list-alphabet-table-data p-3" colspan="10">#full-name</td></tr><!-- meta --><tr><td class="xs-seat-list-alphabet-table-data p-3" colspan="4">Attending</td><td class="xs-seat-list-alphabet-table-data xs-seat-list-alphabet-table-data-center p-3" colspan="2">#attending</td><td class="xs-seat-list-alphabet-table-data xs-seat-list-alphabet-table-data-center p-3" colspan="4">#relationship</td></tr><!-- seat number --><tr><td class="xs-seat-list-alphabet-table-data p-3" colspan="6">Table number</td><td class="xs-seat-list-alphabet-table-data xs-seat-list-alphabet-table-data-center p-3" colspan="4">#table</td></tr></tbody></table></div></div>'
    let xsTemplate = '<div class="container-fluid g-0 xs-seat-bg"><!-- n&n --><div class="row mb-3"><div class="col xs-seat-divider"><div class="px-2 py-2 mx-auto"><h1 class="xs-seat-top-title">n&n</h1></div></div></div><!-- guest list --><div class="row"><div class="col"><div class="mt-3 mx-auto px-4"><h1 class="xs-seat-title text-decoration-underline">Seating plan</h1></div></div></div><!-- guest list caption --><div class="row"><div class="col"><div class="mx-auto px-4"><!-- <p>In alphabetical order (name)</p> --><p>RSVP by <span class="text-decoration-underline">18 March 2023</span></p></div></div></div><!-- list --><div class="row"><div class="col"><div id="xs-seat-list" class="mx-auto px-2">#$#$#$</div></div></div><!-- guest list caption --><div class="row mt-5"><div class="col"><div class="mx-auto px-4"><!-- <p>Total guests #total-guests</span></p> --></div></div></div><!-- menu btn --><div class="row"><div class="col"><router-link to="/menu"><div class="xs-home-menu-btn mx-auto"><img src="svg/xs/menu-btn.svg" alt="menu-btn" width="48" height="48"></div></router-link></div></div></div>'


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
        let table = guestItem.table

        stringBuilder += guestTemplate.replace('#full-name', firstName + ' ' + lastName).replace('#attending', attending).replace('#relationship', relationship).replace('#table', table)
    }

    xsTemplate = xsTemplate.replace('#$#$#$', '<p class="mt-5 px-5">Please check the seating plan the night before the wedding</p>').replace('#total-guests', '--')

    return xsTemplate
}
// END XS -------------------------------------------------------------------------------------------------------------