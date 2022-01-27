import React from 'react';
import {Box, Text} from 'grommet';
import CalendarChart from "./CalendarChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import {Bold} from "grommet-icons";

export default ({dataset, dispatch, theme}) => {

    return (
        dataset.data.length ?
        <>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <Text weight='bolder'>This pie chart is interactive! Click on a slice* to filter out the category.</Text>
                <PieChart dataset={dataset} dispatch={dispatch}/>
                <Text weight='lighter'>*do not click on remaining</Text>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <CalendarChart dataset={dataset}/>
            </Box>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <BarChart dataset={dataset}/>
            </Box>
        </>
        :
        <>
            <Box width='100%' background={theme.global.colors.body} margin={{bottom: "medium"}} pad='medium'>
                <Text>Load some data to get started!</Text>
            </Box>
        </>
    )
}
