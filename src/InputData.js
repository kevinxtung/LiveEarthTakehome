import React from "react";
import {Box, Tabs, Tab} from "grommet";

import InputApi from "./InputApi";
import InputFile from "./InputFile";

export default ({dataset, dispatch}) => {
    return (
        <Box direction='column' width='90%' elevation='medium' pad='medium' margin='medium'>
            <Tabs alignSelf='start' justify='start'>
                <Tab alignSelf='start' justify='start' title="API Call">
                    <InputApi dataset={dataset} dispatch={dispatch}/>
                </Tab>

                <Tab alignSelf='start' justify='start' title="File Upload">
                    <InputFile dispatch={dispatch}/>
                </Tab>
            </Tabs>
        </Box>
    );
}
