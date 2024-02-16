import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired

export default function Education( { educationAdd, educationRemove, educationEdit, educationList } ) {
    return <div className="education">
        <h2>Education</h2>
        <div className="educationList">
        {
            educationList.map((item) => {
                return (
                    <div className="educationItem" key={item.id}>
                        <InputBox label="Degree" type="text" placeholder="" onChange={(e) => educationEdit(item.id, "degree", e.target.value)} isRequired={true} value={item.degree}/>
                        <InputBox label="School" type="text" placeholder="" onChange={(e) => educationEdit(item.id, "school", e.target.value)} isRequired={true} value={item.school}/>
                        <InputBox label="City" type="text" placeholder="" onChange={(e) => educationEdit(item.id, "schoolCity", e.target.value)} isRequired={false} value={item.schoolCity}/>
                        <InputBox label="Start Date" type="date" onChange={(e) => educationEdit(item.id, "schoolStartDate", e.target.value)} placeholder="" isRequired={true} value={item.schoolStartDate}/>
                        <InputBox label="End Date" type="date" onChange={(e) => educationEdit(item.id, "schoolEndDate", e.target.value)} placeholder="" isRequired={false} value={item.schoolEndDate}/>
                        <InputBox label="Description" type="textarea" onChange={(e) => educationEdit(item.id, "schoolDesc", e.target.value)} placeholder="" isRequired={false} value={item.schoolDesc}/>
                        <button onClick={() => educationRemove(item.id)}>Remove</button>
                        <br/><br/><br/><br/>
                    </div>
                  );
            })
        }
        </div>
        <form className="addEducation" onSubmit={educationAdd}>
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