import React from "react";
import {Accordion, AccordionPanel, Box, Heading, RadioButtonGroup, Text} from 'grommet';
import {excludeFieldsWithNonAlphaFirstChar, getUniqueFieldsInData} from "./Util";
import Filters from "./FilterBuilder";
import FilterTags from "./FilterTags";

export default ({dataset, dispatch}) => {
    // const fields = excludeStrangeFields(getUniqueFieldsInData(dataset.data).map(toPrettyField);
    const fields = excludeFieldsWithNonAlphaFirstChar(getUniqueFieldsInData(dataset.data));

    return (
        <Box  width='medium'>
            <Accordion  alignSelf='start' width='medium' multiple={true}>
                <AccordionPanel label='Config'>
                    <Box pad='small'>
                        <Box margin='small' pad={{bottom: 'medium', left: 'small', right: 'small', top: 0}} background='light-3' elevation='small'>
                            <Heading level='3'>
                                Map Type
                            </Heading>
                            <RadioButtonGroup name='_'
                                              options={['Scatterplot', 'Heatmap', 'Hexagon',]}
                                              value={dataset.layerType}
                                              onChange={(event) =>
                                                  dispatch({type: 'setLayerType', payload: event.target.value})}
                            />
                        </Box>

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
                    </Box>
                </AccordionPanel>

                <AccordionPanel label='Filters'>
                    <Box pad='small'>
                        <Filters fields={fields} dispatch={dispatch}/>
                        <Box margin='small'>
                            <FilterTags dataset={dataset} dispatch={dispatch}/>
                        </Box>
                    </Box>
                </AccordionPanel>
            </Accordion>
        </Box>
    );
}
