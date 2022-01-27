import {truncateTimeInDatetime} from "./Util";

export function dataToCalendarFormat(data) {
    let dateBins = {};
    data.forEach((datum) => {
        const date = truncateTimeInDatetime(datum.incident_date)
        dateBins[date] = (dateBins[date] ? dateBins[date] + 1 : 1);
    })

    return Object.keys(dateBins).map((key) => {
        return {day: key, value: dateBins[key]}
    })
}
