import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired

export default function ResumeObjective( { onInputChange } ) {
    return <div className="resumeObjective">
        <InputBox id="resumeObj" label="" type="textarea" placeholder="Type here." onChange={onInputChange} isRequired={true}/>
    </div>
}