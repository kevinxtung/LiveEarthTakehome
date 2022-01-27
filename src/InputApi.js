import React, {useEffect, useState} from 'react';
import {Box, Button, DateInput, Spinner, Text} from "grommet";
import {SOCRATA_APP_TOKEN} from "./KEYS";

export default ({dataset, dispatch}) => {
    const [dates, setDates] = useState(dataset.dateRange);
    const [requestBusy, setRequestBusy] = useState(false);

    useEffect(() => {
        if (requestBusy) {
            UpdateSfCrimes(dates.start, dates.end).then(()=>{setRequestBusy(false)})
        }
    }, [requestBusy])

    const UpdateSfCrimes = async (startDate, endDate) => {
        let offset = 0;
        const limit = 100000;
        let fetched = -1;
        let crimes = [];

        while (fetched !== 0) {
            await fetch(`https://data.sfgov.org/resource/wg3w-h783.json?%24where=((incident_date%20%3E%3D%20%22${startDate}%22)%20and%20(incident_date%20%3C%3D%20%22${endDate}%22))&%24offset=${offset}&%24limit=${limit}`,
                // {method: 'GET', headers: {'X-App-Token': SOCRATA_APP_TOKEN}})
                // {method: 'GET', headers: {'X-App-Token': SOCRATA_APP_TOKEN}})
                {method: 'GET'})
                .then(response => response.json())
                .then(result => {
                    crimes = [...crimes, ...result];
                    fetched = result.length;
                    offset += fetched;
                });
        }
        console.log("setting crimes " + crimes.length);
        dispatch({type: 'setDateRange', payload: dates})
        dispatch({type: 'setData', payload: crimes});
    }

    return (
        <Box pad={{top: 'small'}}>
            <Box direction='row'>
                <Box margin='small' width='xsmall'>
                    <Text>From</Text>
                </Box>
                <DateInput
                    calendarProps={{bounds: ["2018-01-01", new Date().toISOString()]}}
                    format="mm/dd/yyyy"
                    defaultValue={dates.start}
                    onChange={(event) => {
                        setDates({...dates, start: event.value})
                    }}
                />
            </Box>
            <Box direction='row'>
                <Box margin='small' width='xsmall'>
                    <Text>To</Text>
                </Box>
                <DateInput
                    calendarProps={{bounds: ["2018-01-01", new Date().toISOString()]}}
                    format="mm/dd/yyyy"
                    defaultValue={dates.end}
                    onChange={(event) => {
                        setDates({...dates, end: event.value})
                    }}
                />
            </Box>
            <Box width='100%' pad='small'>
                <Button label={requestBusy ? 'Loading...' : 'Update Map'} disabled={requestBusy} primary={true} onClick={
                    () => {
                        setRequestBusy(true);
                    }
                }/>

                {requestBusy &&
                <Box align='center' alignContent='center' pad={{top: 'medium'}}>
                    <Spinner/>
                </Box>}
            </Box>
        </Box>
    )

}
