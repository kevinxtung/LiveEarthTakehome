import { ResponsiveCalendar, ResponsiveTimeRange } from '@nivo/calendar';
import {dataToCalendarFormat} from './NivoUtils';
import {Box} from 'grommet';
import React from 'react';

export default ({dataset}) => {

    const calendarProps = {
        data: dataToCalendarFormat(dataset.data),
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

    const datesSpanMultipleYears = dataset.dateRange.start.substring(0, 3) !== dataset.dateRange.end.substring(0, 3);


    return (
        <Box height='medium'>
            {datesSpanMultipleYears ? <ResponsiveCalendar {...calendarProps}/> : <ResponsiveTimeRange {...calendarProps}/>}
        </Box>
    )
}
