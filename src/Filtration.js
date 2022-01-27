type Filter = {
    field: string,
    operator: string,
    value: string,
}

type Data = {
    incident_datetime: string,
    incident_date: string,
    incident_year: string,
    incident_day_of_week: string,
    filed_online: boolean,
}

// const filters = [
//     {
//         field: 'incident_datetime',
//         operator: '=',
//         value: '3'
//     },
//     {
//         field: 'incident_day_of_week',
//         operator: '!=',
//         value: 'Tuesday'
//     },
// ]
//
// const data = [
//     {
//         "incident_year": "2021",
//         "incident_day_of_week": "Wednesday",
//     },
//     {
//         "incident_year": "2021",
//         "incident_day_of_week": "Sunday",
//         "incident_number": "216053762",
//     },
//     {
//         "incident_day_of_week": "Tuesday",
//     },
// ]

export default (data, filters= []) => {
    let filteredData = data;
    filters.forEach((filter) => {
        filteredData = filteredData.filter((datum) => {
            switch (filter.operator) {
                case '=':
                    return datum[filter.field] === filter.value;
                case '<':
                    return datum[filter.field] < filter.value;
                case '>':
                    return datum[filter.field] > filter.value;
                case '<=':
                    return datum[filter.field] <= filter.value;
                case '>=':
                    return datum[filter.field] >= filter.value;
                case '!=':
                    return datum[filter.field] !== filter.value;

                default:
                    console.error(filter.operator)
                    throw new Error();
            }
        });
        }
    )
    console.log(filteredData.length);
    filteredData = filteredData.filter((datum) => {
        return datum["point"]}
    );
    console.log(filteredData.length);
    return filteredData;
}
