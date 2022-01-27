import React from "react";
import {Box, Collapsible} from "grommet";

import InputData from "./InputData";
import DatasetSidebarConfig from "./DatasetSidebarConfig";

export default ({open, dispatch, dataset}) => {

    return (
        <Collapsible direction="horizontal" open={open}>
            <Box flex
                 width='medium'
                background='light-2'
                 elevation='small'
                 align='center'
                 justify='center'
                 alignContent='start'
                 overflow='scroll'
                 direction='column'
            >
                <Box pad="medium" background="light-2">
                    <InputData dataset={dataset} dispatch={dispatch}/>
                </Box>

                <Box width='medium'>
                    <DatasetSidebarConfig dataset={dataset} dispatch={dispatch}/>
                </Box>

            </Box>
        </Collapsible>
    );
}
