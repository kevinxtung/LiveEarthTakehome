import {hsv, hex} from "color-convert";

export function hexToRgb(hexCode: string) {
    return hex.rgb(hexCode);
}

/**
 * Jesse whined at me about the colors, so he gave me this code.
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} intervals
 */
function interpolateArrays(a, b, intervals = 12) {
    if (a.length !== b.length) {
        throw new Error('a and b must have the same length')
    }

    // get the differences between each slot in the array
    const stepSizes = a.map((v, i) => (b[i] - v) / (intervals - 1))
    const result = []

    for (let i = 0; i < intervals; i++) {
        // linear interpolate each slot by the step size
        result.push(a.map((v, j) => v + i * stepSizes[j]))
    }

    return result
}

/**
 * Jesse whined at me about the colors, so he gave me this code. He decries RGB lerping and sings praise for the one true HSV.
 * @param {string} a
 * @param {string} b
 * @param {number} intervals
 */
export function interpolateHex (a, b, intervals = 12) {
    return interpolateArrays(hex.hsv(a), hex.hsv(b), intervals).map(i => hsv.rgb(...i))
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

export function getUniqueValuesFromKey(data: any[], key: string): string[] {
    const uniqueValues = new Set();
    data.forEach((datum) => {uniqueValues.add(datum[key])})
    return [...uniqueValues];
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

const tooltipStyle = {
    backgroundColor: '#444444',
    body: {
        color: '#F8F8F8'
    },
    borderRadius: '3px',
    fontSize: '0.8em',
}

export function getTooltip({object}) {
    if (!object || object.constructor !== Object) return null;

    if (object.points) {
        return `Total: ${object.points.length}`;
    }

    return {
        html:
            `<h2>${object.incident_subcategory === 'Other' ? object.incident_description : object.incident_subcategory}</h2>
            <div>${beautifyForDeckGl(object)}</div>`,
        style: tooltipStyle,
    }
}
