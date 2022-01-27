import {Box, Button, FileInput} from "grommet";
import React, {useState} from "react";

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
            </Box>

            <Box width='100%' pad='small'>
                <Button label={uploadedFile ? 'Set Source' : 'Needs File'} primary={true} disabled={!uploadedFile} onClick={
                    () => {
                        uploadedFile && reader.readAsText(uploadedFile);
                    }
                }/>
            </Box>
        </>
    );
}
