import React, {useState} from "react";
import CustomDataPresenter from "./CustomDataPresenter";

const reader = new FileReader();


const turnJsonDataToObject =  (jsonData: JSON) => {
    const jsonObject = JSON.parse(jsonData)
    console.log(Object.keys(jsonObject))
}


export default ({}) => {
    const [data, setData] = useState(undefined);

    const onFileAdd = (file) => {
        reader.onload = (event) => {setData(event.target.result)};
        reader.readAsText(file);
    }

    return (<CustomDataPresenter data={data} onFileAdd={onFileAdd}/>);
}

