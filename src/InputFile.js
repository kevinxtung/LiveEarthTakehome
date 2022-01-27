import React, {useState} from "react";
import {Box, Button, FileInput, Text} from "grommet";

export default ({dispatch}) => {
    const [uploadedFile, setUploadedFile] = useState();

    const reader = new FileReader();
    reader.onload = (event) => {
        dispatch({type: 'setData', payload: JSON.parse(event.target.result)})
    };

    return (
        <>
            <Box pad={{top: 'small'}}>
                <FileInput
                    name="file"
                    multiple={false}
                    onChange={(event) => {
                        setUploadedFile(event.target.files[0])
                    }}
                />
                {uploadedFile ? null : <Text weight='lighter' size='medium' margin='small'>File should be type JSON</Text>}
            </Box>

            <Box width='100%' pad='small'>
                <Button
                    label={uploadedFile ? 'Set Source' : 'Needs File'}
                    primary={true}
                    disabled={!uploadedFile}
                    onClick={
                    () => uploadedFile && reader.readAsText(uploadedFile)}
                />
            </Box>
        </>
    );
}
