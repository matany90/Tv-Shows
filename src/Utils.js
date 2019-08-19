
export const deleteHTMLTags = (text) => {
    const REGEX = /(<([^>]+)>)/ig;
    return text.replace(REGEX, '')
}

/* Android support Https */
export const HttpsStringFormat = (img) => {
    if (img != undefined) {
        return img.slice(0, 4) + "s" + img.slice(4); //from http to https
    }
    return img;
}