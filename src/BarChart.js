import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import {Box} from "grommet";

import {dataToBarFormat} from "./NivoUtils";
import {getUniqueValuesFromKey} from "./Util";
import Filtration from "./Filtration";

export default ({dataset}) => {
    const barProps = {
        data: dataToBarFormat(Filtration(dataset.data, dataset.filters)),
        keys: getUniqueValuesFromKey(dataset.data, 'police_district'),
        indexBy: 'incident_day_of_week',
        margin: { top: 50, right: 130, bottom: 50, left: 60 },
        padding: 0.3,
        valueScale: {type: 'linear'},
        indexScale: {type: 'band', round: true},
        colors: {scheme: 'nivo'},
    }

    return (
        <Box height='large'>
            <ResponsiveBar {...barProps}/>
        </Box>
    )
}
