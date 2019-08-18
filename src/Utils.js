export const deleteHTMLTags = (text) => {
    const REGEX = /(<([^>]+)>)/ig;
    return text.replace(REGEX, '')
}