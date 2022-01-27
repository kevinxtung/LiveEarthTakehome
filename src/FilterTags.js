import React from 'react';
import {Box, Tag} from "grommet";

export default ({dataset, dispatch}) => {
    const tags = dataset.filters.map((filter) =>
        <Box>
            <Tag value={filter.id} onRemove={() => {dispatch({type: 'removeFilter', payload: filter.id})}}/>
        </Box>
    );

    return (
        <Box>
            {tags}
        </Box>
    )
}
