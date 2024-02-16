import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired

export default function PersonalDetails( { onInputChange } ) {
    return <div className="personalDetails">
        <InputBox id="firstName" label="First Name" type="text" placeholder="John" onChange={onInputChange} isRequired={true}/>
        <InputBox id="lastName" label="Last Name" type="text" placeholder="Doe" onChange={onInputChange} isRequired={true}/>
        <InputBox id="email" label="Email" type="email" placeholder="email@email.com" onChange={onInputChange} isRequired={true}/>
        <InputBox id="phone" label="Phone Number" type="tel" placeholder="555-555-5555" onChange={onInputChange} isRequired={true}/>
        <InputBox id="country" label="Country" type="text" placeholder="" onChange={onInputChange} isRequired={false}/>
        <InputBox id="city" label="City" type="text" placeholder="" onChange={onInputChange} isRequired={false}/>
        <InputBox id="birthday" label="Date of Birth" type="date" placeholder="" onChange={onInputChange} isRequired={false}/>
        <InputBox id="links" label="Related Links" type="text" placeholder="github, linkedIn, facebook, etc." onChange={onInputChange} isRequired={false}/>
    </div>
}