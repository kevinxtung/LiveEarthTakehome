import {Box, Button, Select, Text, TextInput} from "grommet";
import React, {useState} from "react";

export default ({dispatch, fields}) => {
    const [filterField, setFilterField] = useState('');
    const [filterOperator, setFilterOperator] = useState('');
    const [filterValue, setFilterValue] = useState('');

    return (
        <Box background='light-3' elevation='small' margin='small' pad={{top: 'small'}}>
            <Box direction='row' width='medium'>
                <Box margin='small' width='xsmall'>
                    <Text>Where</Text>
                </Box>

                <Select
                    options={fields}
                    value={filterField}
                    onChange={({ option }) => setFilterField(option)}
                />

            </Box>
            <Box direction='row' width='medium'>
                <Box width='small' direction='row'>
                    <Box margin='small' >
                        <Text>Is</Text>
                    </Box>
                    <Box >
                        <Select
                            options={['=', '<', '>', '<=', '>=', '!=']}
                            value={filterOperator}
                            onChange={({ option }) => setFilterOperator(option)}
                        />
                    </Box>
                </Box>
                <TextInput
                    placeholder="type here"
                    value={filterValue}
                    onChange={event => setFilterValue(event.target.value)}
                />
            </Box>
            <Box width='100%' pad='small'>
                <Button label={'Add Filter'} primary={true} disabled={!(filterField && filterOperator && filterValue)} onClick={
                    () => {
                        dispatch({type: 'addFilter', payload: {
                            id: `${filterField} ${filterOperator} ${filterValue}`,
                            field: filterField,
                            operator: filterOperator,
                            value: filterValue
                    }})}
                }/>
            </Box>
        </Box>
    )
}
