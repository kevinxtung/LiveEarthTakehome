// Stackoverflow
export function hexToRgb(hex) {
    hex = hex.substr(1);
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b]
}

// This function exists because we need the fields in each datum,
// but not every field gets represented in each datum.
export function getUniqueFieldsInData(json: any[]): string[] {
    const reasonableAmountOfElements = json.slice(0, 100);
    const uniqueKeys = new Set();
    reasonableAmountOfElements.forEach((element) => {
        Object.keys(element).forEach((key) => {
            uniqueKeys.add(key);
        })
    })
    return [...uniqueKeys];
}

export function toPrettyField(field: string): string {
    return field
        .split('_')
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(' ');
}

export function beautifyForDeckGl(json) {
    let element = '';

    for (const key in json) {
        if (key === 'point') {
            continue;
        }

        const value = json[key];
        element += `<text><b>${key}:</b> ${value.toString()}</text><br>`;
    }
    return element;
}

export function excludeFieldsWithNonAlphaFirstChar(fields: string[]): string[] {
    return fields.filter((field) => (isAlpha(field[0])));
}

const isAlpha = (ch) => {
    return /^[A-Z]$/i.test(ch);
}

// Is this function happy? Perhaps not. Is nights and weekends Kevin brain happy? Perhaps not.
export function lerpRgbColors(from, to) {
    let colorList = [];
    const difference = [to[0] - from[0], to[1]-from[1], to[2]-from[2]];
    for (let i = 0; i < 6; i++) {
        colorList.push([from[0]+difference[0]/6*i, from[1]+difference[1]/6*i, from[2]+difference[2]/6*i])
    }
    return colorList;
}

export function truncateTimeInDatetime(datetime: string) {
    return datetime.split('T')[0];
}
