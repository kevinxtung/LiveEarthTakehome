import React from 'react';
import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import {StaticMap} from 'react-map-gl';
import {HeatmapLayer, HexagonLayer} from "@deck.gl/aggregation-layers";
import mapboxgl from 'mapbox-gl'

import Filtration from "./Filtration";
import {lerpRgbColors, hexToRgb, getTooltip, interpolateHex} from "./Util";
import {MAPBOX_KEY} from './KEYS';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

export default ({dataset}) => {
    const initialSanFranMapView = {
        longitude: -122.41669,
        latitude: 37.7853,
        zoom: 13,
        pitch: 0,
        bearing: 0
    };

    const layerTypes = {
        'Scatterplot': ScatterplotLayer,
        'Heatmap': HeatmapLayer,
        'Hexagon': HexagonLayer,
    }

    const baseParams = {
        data: Filtration(dataset.data, dataset.filters),
        getPosition: d => {return (d.point ? d.point.coordinates : [90, 0])},
    }

    const params = {
        'Scatterplot': {
            id: 'seventh-layer-of-heck',
            getFillColor: d => hexToRgb(dataset.color),
            getLineColor: d => [0, 0, 0],
            getRadius: d => 100,
            pickable: true,
            opacity: 0.25,
            stroked: true,
            filled: true,
            radiusScale: 6,
            radiusMinPixels: 4,
            radiusMaxPixels: 8,
            lineWidthMinPixels: 1,
        },
        'Heatmap': {
            id: 'seventh-layer-of-bazinga',
            getWeight: d => 1,
            aggregation: 'SUM',
            colorRange: interpolateHex(dataset.color, dataset.secondaryColor),
        },
        'Hexagon': {
            id: 'zeroth-layer-of-hex',
            pickable: true,
            extruded: true,
            radius: 200,
            elevationScale: 4,
            colorRange: interpolateHex(dataset.color, dataset.secondaryColor),
            autoHighlight: true,
        }
    }

    const layers = [new layerTypes[dataset.layerType]({...baseParams, ...(params[dataset.layerType])})];

    return (
        <DeckGL
            initialViewState={initialSanFranMapView}
            controller={true}
            layers={layers}
            style={{position: 'relative'}}
            getTooltip={getTooltip}
        >
            <StaticMap mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY || MAPBOX_KEY}/>
        </DeckGL>
    );
}
