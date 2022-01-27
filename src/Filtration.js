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

const operators = {
    '=': (a, b) => a == b,
    '<': (a, b) => a < b,
    '>': (a, b) => a > b,
    '<=': (a, b) => a <= b,
    '>=': (a, b) => a >= b,
    '!=': (a, b) => a != b
}

export default function Filtration(data: Data[], filters: Filter[] = []) {
    const checks = filters.map(i => {
        const operator = operators[i.operator];
        if (!operator) throw new Error('Operator does not exist')
        return item => operator(item[i.field], i.value)
    })

    const check = item => item.point && checks.every(i => i(item))
    return data.filter(check)
}
