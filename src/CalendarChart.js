import React from 'react';
import { ResponsiveCalendar, ResponsiveTimeRange } from '@nivo/calendar';
import {Box} from 'grommet';

import {dataToCalendarFormat} from './NivoUtils';
import Filtration from "./Filtration";

export default ({dataset}) => {

    const calendarProps = {
        data: dataToCalendarFormat(Filtration(dataset.data, dataset.filters)),
        from: dataset.dateRange.start,
        to: dataset.dateRange.end,
        emptyColor: "#eeeeee",
        colors: ['#cccc8d', '#e8c1a0', '#f47560', '#bf0132'],
        margin: {top: 20, right: 20, bottom: 40, left: 20},
        dayBorderWidth: 2,
        dayBorderColor: "#ffffff",
        legends: [{
            anchor: 'bottom-right',
            direction: 'row',
            justify: false,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
            translateX: -60,
            translateY: -60,
            symbolSize: 20
        }]
    }

    const datesSpanMultipleYears = dataset.dateRange.start.substr(0, 4) !== dataset.dateRange.end.substr(0, 4);


    return (
        <Box height={datesSpanMultipleYears ? 'large' : 'medium'}>
            {datesSpanMultipleYears ? <ResponsiveCalendar {...calendarProps}/> : <ResponsiveTimeRange {...calendarProps}/>}
        </Box>
    )
}
