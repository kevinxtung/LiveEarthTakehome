import React from 'react';
import {Box} from 'grommet';
import CalendarChart from "./CalendarChart";

export default ({dataset, theme}) => {

    return (
        <>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <CalendarChart dataset={dataset}/>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <CalendarChart dataset={dataset}/>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <CalendarChart dataset={dataset}/>
            </Box>
        </>
    )
}
