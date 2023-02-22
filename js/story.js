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
     
        return 'extra small story'
    }
}