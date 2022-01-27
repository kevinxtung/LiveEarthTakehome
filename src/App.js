import React, {useState, useReducer} from 'react';
import {Box, Button, Heading, Grommet} from 'grommet';
import {Tasks} from 'grommet-icons';
import DeckMap from "./DeckMap";
import Sidebar from "./Sidebar";
import Appbar from "./Appbar";
import CalendarChart from './CalendarChart';

export default () => {
    const initialState = {
        data: [],
        filters: [],
        color: '#ffffae',
        secondaryColor: '#bf0132',
        layerType: 'Scatterplot',
        dateRange: {
            start: '2022-01-01',
            end: '2022-01-14'
        }
    }

    const [state, dispatch] = useReducer(reducer, {...initialState});
    const [showSidebar, setShowSidebar] = useState(true);

    function reducer(state, action) {
        switch (action.type) {
            case 'setData':
                return {...state, data: action.payload};
            case 'setColor':
                return {...state, color: action.payload};
            case 'setSecondaryColor':
                return {...state, secondaryColor: action.payload};
            case 'setLayerType':
                return {...state, layerType: action.payload};
            case 'addFilter':
                return {...state, filters: [...state.filters, action.payload]}
            case 'removeFilter':
                return {...state, filters: state.filters.filter(filter => filter.id !== action.payload)}
            case 'setDateRange':
                return {...state, dateRange: action.payload}
            default: throw new Error();
        }
    }

    const theme = {
        global: {
            colors: {
                brand: '#228BE6',
                background: '#494949',
                body: 'light-2'
            },
            font: {
                family: 'Roboto',
                size: '18px',
                height: '20px',
            },
        },
    };

    const widgetStyle = {
        pad: {left: '8%', right: '8%', top: '3%'},
        backgroundColor: theme.global.colors.body,
    }

    return (
        <Grommet theme={theme} full>
            <Box {...widgetStyle} direction='column' fill>
                <Appbar>
                    <Heading level='4' margin='none'>San Francisco, But Crime</Heading>
                    <Button
                        icon={<Tasks/>}
                        onClick={() => {
                            setShowSidebar(!showSidebar);
                            console.log(state);
                        }}
                    />
                </Appbar>
                <Box direction='row' flex overflow={{horizontal: 'hidden'}} >

                    <Box flex align='center' justify='center' overflow='hidden'>
                        <DeckMap dataset={state}/>
                    </Box>

                    <Sidebar dispatch={dispatch} open={showSidebar} dataset={state}/>
                </Box>

            </Box>
            <Box {...widgetStyle}>
                <CalendarChart dataset={state}/>
            </Box>

        </Grommet>
    );
}

