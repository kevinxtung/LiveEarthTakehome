import React from 'react';
import {Box, Tag} from "grommet";

export default ({dataset, dispatch}) => {
    const tags = dataset.filters.map((filter) =>
        <Box pad={{bottom: 'small'}}>
            <Tag value={filter.id} onClick={() => dispatch({type: 'removeFilter', payload: filter.id})}/>
        </Box>
    );

    return (
        <Box>
            {tags}
        </Box>
    )
}
