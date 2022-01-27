import {take} from "ramda";

import {truncateTimeInDatetime} from "./Util";

export function dataToCalendarFormat(data) {
    const dateBins = data.reduce((dateBins, datum) => {
        const date = truncateTimeInDatetime(datum.incident_date);
        dateBins[date] = (dateBins[date] || 0) + 1;
        return dateBins;
    }, {})

    return Object.keys(dateBins).map((key) => {
        return {day: key, value: dateBins[key]}
    })
}

export function dataToBarFormat(data) {
    const dayBins = data.reduce((dayBins, datum) => {
        const dayOfWeek = datum.incident_day_of_week;
        const district = datum.police_district;
        if (!dayBins[dayOfWeek]) {
            dayBins[dayOfWeek] = {};
        }
        dayBins[dayOfWeek][district] = (dayBins[dayOfWeek][district] || 0) + 1;
        return dayBins;
    }, {});

    return Object.keys(dayBins).map((dayOfWeek) => {
        return {incident_day_of_week: dayOfWeek, ...dayBins[dayOfWeek]};
    });
}

export function dataToPieFormat(data) {
    const [crimeBins, total] = data.filter(i => i.incident_category).reduce(([crimeBins, total], datum) => {
        const crimeType = datum.incident_category;
        crimeBins[crimeType] = (crimeBins[crimeType] || 0) + 1;
        return [crimeBins, total + 1];
    }, [{}, 0]);

    const largest = take(5, Object.keys(crimeBins)
        .map((key) => ({id: key, label: key, value: crimeBins[key]}))
        .sort((binA, binB) => binB.value - binA.value))

    const remaining = total - largest.reduce((sum, bin) => sum+bin.value, 0)

    return remaining ? [...largest, {id: 'Remaining', label: 'Remaining', value: remaining}] : largest;
}
