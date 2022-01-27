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
