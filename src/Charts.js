import React from 'react';
import {Box, Text} from 'grommet';
import CalendarChart from "./CalendarChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

export default ({dataset, dispatch, theme}) => {

    return (
        dataset.data.length ?
        <>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <Text weight='bolder'>This pie chart is interactive! Click on a slice to filter out the category.</Text>
                <PieChart dataset={dataset} dispatch={dispatch}/>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <Text weight='bolder'>This calendar chart is not interactive! Click on a date to be disappointed.</Text>
                <CalendarChart dataset={dataset}/>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <Text weight='bolder'>The chart all the way at the bottom is definitely going to be interactive. Especially with the lack of a legend.</Text>
                <BarChart dataset={dataset}/>
            </Box>
        </>
        :
        <>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <Text weight='bolder'>Load some data to get started!</Text>
            </Box>
        </>
    )
}
