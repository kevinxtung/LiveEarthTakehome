import React from "react";
import {Accordion, AccordionPanel, Box, RadioButtonGroup, Text} from 'grommet';
import {excludeFieldsWithNonAlphaFirstChar, getUniqueFieldsInData} from "./Util";
import Filters from "./FilterBuilder";
import FilterTags from "./FilterTags";
import ChartConfig from "./ChartConfig";

export default ({dataset, dispatch}) => {
    // const fields = excludeStrangeFields(getUniqueFieldsInData(dataset.data).map(toPrettyField);
    const fields = excludeFieldsWithNonAlphaFirstChar(getUniqueFieldsInData(dataset.data));

    return (
        <Box  width='medium'>
            <Accordion alignSelf='start' width='medium' multiple={true}>
                <AccordionPanel label='Config'>
                    <RadioButtonGroup name='_'
                                      options={['Scatterplot', 'Heatmap', 'Hexagon',]}
                                      value={dataset.layerType}
                                      onChange={(event) =>
                                          dispatch({type: 'setLayerType', payload: event.target.value})}
                    />

                    <Box direction='row'>
                        <Box pad='small'>
                            <Text>Primary Color</Text>
                        </Box>
                        <Box pad='small'>
                            <input type='color' value={dataset.color} onChange={
                                (event) => {
                                    dispatch({
                                        type: 'setColor',
                                        payload: event.target.value
                                    })
                                }}/>
                        </Box>
                        <Box pad='small'>
                            <Text>Secondary Color</Text>
                        </Box>
                        <Box pad='small'>
                            <input type='color' value={dataset.secondaryColor} onChange={
                                (event) => {
                                    dispatch({
                                        type: 'setSecondaryColor',
                                        payload: event.target.value
                                    })
                                }}/>
                        </Box>
                    </Box>
                </AccordionPanel>

                <AccordionPanel label='Filters'>
                    <FilterTags dataset={dataset} dispatch={dispatch}/>
                    <Filters fields={fields} dispatch={dispatch}/>
                </AccordionPanel>
            </Accordion>
        </Box>
    );
}
