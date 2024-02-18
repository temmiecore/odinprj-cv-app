import { useState } from "react";
import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired
import down from '../../assets/down.png';

export default function WorkExperience( { workAdd, workRemove, workEdit, workList } ) {
    const [open, setOpen] = useState(false); 

    return <div className="inputWindow">
        <div className="inputWindowHeader">
            <h2>Work</h2>
            <img src={down} alt="close/open the window" onClick={() => setOpen(!open)}/>
        </div>
        <div className="inputList" style={ !open ? {display: "none"} : null }>
        {
            workList.map((item) => {
                return (
                    <div className="inputListItem" key={item.id}>
                        <InputBox label="Job Title" type="text" placeholder="" onChange={(e) => workEdit(item.id, "jobTitle", e.target.value, "work")} isRequired={true} value={item.jobTitle}/>
                        <InputBox label="Employer" type="text" placeholder="" onChange={(e) => workEdit(item.id, "employer", e.target.value, "work")} isRequired={true} value={item.employer}/>
                        <InputBox label="City" type="text" placeholder="" onChange={(e) => workEdit(item.id, "workCity", e.target.value, "work")} isRequired={false} value={item.workCity}/>
                        <InputBox label="Start Date" type="date" onChange={(e) => workEdit(item.id, "workStartDate", e.target.value, "work")} placeholder="" isRequired={true} value={item.workStartDate}/>
                        <InputBox label="End Date" type="date" onChange={(e) => workEdit(item.id, "workEndDate", e.target.value, "work")} placeholder="" isRequired={false} value={item.workEndDate}/>
                        <InputBox label="Description" type="textarea" onChange={(e) => workEdit(item.id, "workDesc", e.target.value, "work")} placeholder="" isRequired={false} value={item.workDesc}/>
                        <button onClick={() => workRemove(item.id, "work")}>Remove</button>
                        <div className="divider"></div>
                    </div>
                  );
            })
        }
        </div>
        <form className="addForm" onSubmit={workAdd} style={ !open ? {display: "none"} : null }>
            <InputBox id="jobTitle" label="Job Title" type="text" placeholder="" isRequired={true}/>
            <InputBox id="employer" label="Employer" type="text" placeholder="" isRequired={true}/>
            <InputBox id="workCity" label="City" type="text" placeholder="" isRequired={false}/>
            <InputBox id="workStartDate" label="Start Date" type="date" placeholder="" isRequired={true}/>
            <InputBox id="workEndDate" label="End Date" type="date" placeholder="" isRequired={false}/>
            <InputBox id="workDesc" label="Description" type="textarea" placeholder="" isRequired={false}/>
            <button type="submit">Add</button>
        </form>
    </div>
}