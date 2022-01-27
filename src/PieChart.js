import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import {dataToPieFormat} from "./NivoUtils";
import Filtration from "./Filtration";
import {Box} from "grommet";

export default ({dataset}) => {
    const pieProps = {
        data: dataToPieFormat(Filtration(dataset.data, dataset.filters)),
        margin: { top: 50, right: 130, bottom: 50, left: 160 },
        padding: 0.3,
        colors: {scheme: 'nivo'},

    }

    return (
        <Box height='large'>
            <ResponsivePie {...pieProps}/>
        </Box>
    )
}
