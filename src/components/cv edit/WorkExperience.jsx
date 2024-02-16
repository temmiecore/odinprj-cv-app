import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired

export default function WorkExperience( { workAdd, workRemove, workEdit, workList } ) {
    return <div className="work">
        <h2>Work</h2>
        <div className="workList">
        {
            workList.map((item) => {
                return (
                    <div className="workItem" key={item.id}>
                        <InputBox label="Job Title" type="text" placeholder="" onChange={(e) => workEdit(item.id, "jobTitle", e.target.value)} isRequired={true} value={item.jobTitle}/>
                        <InputBox label="Employer" type="text" placeholder="" onChange={(e) => workEdit(item.id, "employer", e.target.value)} isRequired={true} value={item.employer}/>
                        <InputBox label="City" type="text" placeholder="" onChange={(e) => workEdit(item.id, "workCity", e.target.value)} isRequired={false} value={item.workCity}/>
                        <InputBox label="Start Date" type="date" onChange={(e) => workEdit(item.id, "workStartDate", e.target.value)} placeholder="" isRequired={true} value={item.workStartDate}/>
                        <InputBox label="End Date" type="date" onChange={(e) => workEdit(item.id, "workEndDate", e.target.value)} placeholder="" isRequired={false} value={item.workEndDate}/>
                        <InputBox label="Description" type="textarea" onChange={(e) => workEdit(item.id, "workDesc", e.target.value)} placeholder="" isRequired={false} value={item.workDesc}/>
                        <button onClick={() => workRemove(item.id)}>Remove</button>
                        <br/><br/><br/><br/>
                    </div>
                  );
            })
        }
        </div>
        <form className="addWork" onSubmit={workAdd}>
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