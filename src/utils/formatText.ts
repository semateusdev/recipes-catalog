export function formatTextAPI(text:string) {
    const elements = ['<b>', '</b>', '<a href="', '</a>', '">'];
        let newText = text;
        elements.forEach(element => {
            newText = newText.split(element).map(text => text.replace(element, '')
                .replace(',,', ', ').replace(' ,', ', ').replace(',.', '.'))
            .join();
        });
        return newText;
}