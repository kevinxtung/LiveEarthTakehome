import React from "react";
import {Box} from "grommet";

export default (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{left: 'medium', right: 'small', vertical: 'xxsmall'}}
        style={{zIndex: '1'}}
        {...props}
    />
);
