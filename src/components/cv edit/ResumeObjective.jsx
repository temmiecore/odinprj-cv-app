import { useState } from "react";
import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired

export default function ResumeObjective( { onInputChange } ) {
    const [open, setOpen] = useState(false);  

    return <div className="inputWindow">
        <div className="inputWindowHeader">
            <h2>Resume Objective</h2>
            <img src="src/assets/down.png" alt="close/open the window" onClick={() => setOpen(!open)}/>
        </div>
        <div style={ !open ? {display: "none"} : null }>
            <InputBox id="resumeObj" label="" type="textarea" placeholder="Type here." onChange={onInputChange} isRequired={true} />
        </div>
    </div>
}