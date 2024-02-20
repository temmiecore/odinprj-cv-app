import { useState } from "react";
import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired
import WindowOpenArrow from "../WindowOpenArrow.";

export default function PersonalDetails({ onInputChange, form }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="inputWindow">
            <div className="inputWindowHeader">
                <h2>Personal Details</h2>
                <WindowOpenArrow open={open} setOpen={setOpen} />
            </div>
            <div style={!open ? { display: "none" } : null}>
                <InputBox
                    id="firstName"
                    label="First Name"
                    type="text"
                    placeholder="John"
                    onChange={onInputChange}
                    isRequired={true}
                    value={form.firstName}
                />
                <InputBox
                    id="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    onChange={onInputChange}
                    isRequired={true}
                    value={form.lastName}
                />
                <InputBox
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="email@email.com"
                    onChange={onInputChange}
                    isRequired={true}
                    value={form.email}
                />
                <InputBox
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    placeholder="555-555-5555"
                    onChange={onInputChange}
                    isRequired={true}
                    value={form.phone}
                />
                <InputBox
                    id="country"
                    label="Country"
                    type="text"
                    placeholder=""
                    onChange={onInputChange}
                    isRequired={false}
                    value={form.country}
                />
                <InputBox
                    id="city"
                    label="City"
                    type="text"
                    placeholder=""
                    onChange={onInputChange}
                    isRequired={false}
                    value={form.city}
                />
                <InputBox
                    id="birthday"
                    label="Date of Birth"
                    type="date"
                    placeholder=""
                    onChange={onInputChange}
                    isRequired={false}
                    value={form.birthday}
                />
                <InputBox
                    id="links"
                    label="Related Links"
                    type="text"
                    placeholder="github, linkedIn, facebook, etc."
                    onChange={onInputChange}
                    isRequired={false}
                    value={form.links}
                />
            </div>
        </div>
    );
}
