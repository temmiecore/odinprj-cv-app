import { useState } from "react";
import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired

export default function Education( { educationAdd, educationRemove, educationEdit, educationList } ) {
    const [open, setOpen] = useState(false); 

    return <div className="inputWindow">
        <div className="inputWindowHeader">
            <h2>Education</h2>
            <img src="src/assets/down.png" alt="close/open the window" onClick={() => setOpen(!open)}/>
        </div>
        <div className="inputList" style={ !open ? {display: "none"} : null }>
        {
            educationList.map((item) => {
                return (
                    <div className="inputListItem" key={item.id}>
                        <InputBox label="Degree" type="text" placeholder="" onChange={(e) => educationEdit(item.id, "degree", e.target.value, "education")} isRequired={true} value={item.degree}/>
                        <InputBox label="School" type="text" placeholder="" onChange={(e) => educationEdit(item.id, "school", e.target.value, "education")} isRequired={true} value={item.school}/>
                        <InputBox label="City" type="text" placeholder="" onChange={(e) => educationEdit(item.id, "schoolCity", e.target.value, "education")} isRequired={false} value={item.schoolCity}/>
                        <InputBox label="Start Date" type="date" onChange={(e) => educationEdit(item.id, "schoolStartDate", e.target.value, "education")} placeholder="" isRequired={true} value={item.schoolStartDate}/>
                        <InputBox label="End Date" type="date" onChange={(e) => educationEdit(item.id, "schoolEndDate", e.target.value, "education")} placeholder="" isRequired={false} value={item.schoolEndDate}/>
                        <InputBox label="Description" type="textarea" onChange={(e) => educationEdit(item.id, "schoolDesc", e.target.value, "education")} placeholder="" isRequired={false} value={item.schoolDesc}/>
                        <button onClick={() => educationRemove(item.id, "education")}>Remove</button>
                        <div className="divider"></div>
                    </div>
                  );
            })
        }
        </div>
        <form className="addForm" onSubmit={educationAdd} style={ !open ? {display: "none"} : null }>
            <InputBox id="degree" label="Degree" type="text" placeholder="" isRequired={true}/>
            <InputBox id="school" label="School" type="text" placeholder="" isRequired={true}/>
            <InputBox id="schoolCity" label="City" type="text" placeholder="" isRequired={false}/>
            <InputBox id="schoolStartDate" label="Start Date" type="date" placeholder="" isRequired={true}/>
            <InputBox id="schoolEndDate" label="End Date" type="date" placeholder="" isRequired={false}/>
            <InputBox id="schoolDesc" label="Description" type="textarea" placeholder="" isRequired={false}/>
            <button type="submit">Add</button>
        </form>
    </div>
}