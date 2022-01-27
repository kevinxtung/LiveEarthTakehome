import React from 'react';
import {Box, Text} from 'grommet';
import CalendarChart from "./CalendarChart";
import BarChart from "./BarChart";

export default ({dataset, theme}) => {

    return (
        dataset.data.length !== 0 ?
        <>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <CalendarChart dataset={dataset}/>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <BarChart dataset={dataset}/>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                {/*<CalendarChart dataset={dataset}/>*/}
            </Box>
        </>
        :
        <>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <Text>Add some data to the map for some charts here!</Text>
            </Box>
        </>
    )
}
