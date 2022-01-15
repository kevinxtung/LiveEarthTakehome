// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/calendar
import { ResponsiveTimeRange } from '@nivo/calendar';
import {dataToCalendarFormat} from './NivoUtils';
import {Box} from 'grommet';
import React from 'react';

export default ({dataset}) => {
    return (
        <Box height='medium'>
            <ResponsiveTimeRange
                data={dataToCalendarFormat(dataset.data)}
                from={dataset.dateRange.start}
                to={dataset.dateRange.end}
                emptyColor="#eeeeee"
                colors={['#cccc8d', '#e8c1a0', '#f47560', '#bf0132']}
                margin={{top: 40, right: 40, bottom: 100, left: 40}}
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
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
                    }
                ]}
            />
        </Box>
    )
}
