import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import {Box} from "grommet";
import { toast } from 'react-toastify'

import {dataToPieFormat} from "./NivoUtils";
import Filtration from "./Filtration";

export default ({dataset, dispatch}) => {
    const pieProps = {
        data: dataToPieFormat(Filtration(dataset.data, dataset.filters)),
        margin: { top: 50, right: 130, bottom: 50, left: 160 },
        padding: 0.3,
        colors: {scheme: 'nivo'},
        onClick: (node) => {
            if (node.id === "Remaining") return toast("Can't remove this!", {theme: 'light', type: 'warning'});
            dispatch({type: "addFilter", payload: {
                    field: 'incident_category',
                    operator: '!=',
                    value: node.id,
                    id: `incident_category != ${node.id}`,
                }});
        },
    }

    return (
        <Box height='large'>
            <ResponsivePie {...pieProps} />
        </Box>
    )
}
