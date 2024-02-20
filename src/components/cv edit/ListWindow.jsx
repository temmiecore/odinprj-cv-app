import { useState } from "react";
import InputBox from "../InputBox"; //id, label, type, placeholder, onChange, isRequired
import WindowOpenArrow from "../WindowOpenArrow.";

export default function ListWindow({ windowHeader, addItem, removeItem, editItem, itemList }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="inputWindow">
            <div className="inputWindowHeader">
                <h2>{windowHeader}</h2>
                <WindowOpenArrow open={open} setOpen={setOpen} />
            </div>
            <div className="inputList" style={!open ? { display: "none" } : null}>
                {itemList.map((item) => {
                    return (
                        <div className="inputListItem" key={item.id}>
                            {Object.keys(item).map((key) => {
                                if (key !== "id")
                                    return (
                                        <InputBox
                                            key={key}
                                            label={key}
                                            type={ 
                                                key.includes("Date") 
                                                ? "date" 
                                                : key.includes("Description") 
                                                    ? "textarea" 
                                                    : "text" }
                                            onChange={(e) => editItem(item.id, key, e.target.value, windowHeader) }
                                            isRequired={
                                                key.includes("End") || key.includes("Description")
                                                    ? false
                                                    : true
                                            }
                                            value={item[key]}
                                        />
                                    );
                            })}
                            <button onClick={() => removeItem(item.id, windowHeader)}> Remove </button>
                            <div className="divider"></div>
                        </div>
                    );
                })}
            </div>
            {windowHeader == "Education" ? (
                <form
                    className="addForm"
                    onSubmit={addItem}
                    style={!open ? { display: "none" } : null} >
                    <InputBox
                        id="degree"
                        label="Degree"
                        type="text"
                        placeholder=""
                        isRequired={true}
                    />
                    <InputBox
                        id="school"
                        label="School"
                        type="text"
                        placeholder=""
                        isRequired={true}
                    />
                    <InputBox
                        id="schoolCity"
                        label="City"
                        type="text"
                        placeholder=""
                        isRequired={false}
                    />
                    <InputBox
                        id="schoolStartDate"
                        label="Start Date"
                        type="date"
                        placeholder=""
                        isRequired={true}
                    />
                    <InputBox
                        id="schoolEndDate"
                        label="End Date"
                        type="date"
                        placeholder=""
                        isRequired={false}
                    />
                    <InputBox
                        id="schoolDesc"
                        label="Description"
                        type="textarea"
                        placeholder=""
                        isRequired={false}
                    />
                    <button type="submit">Add</button>
                </form>
            ) : (
                <form
                    className="addForm"
                    onSubmit={addItem}
                    style={!open ? { display: "none" } : null} >
                    <InputBox
                        id="jobTitle"
                        label="Job Title"
                        type="text"
                        placeholder=""
                        isRequired={true}
                    />
                    <InputBox
                        id="employer"
                        label="Employer"
                        type="text"
                        placeholder=""
                        isRequired={true}
                    />
                    <InputBox
                        id="workCity"
                        label="City"
                        type="text"
                        placeholder=""
                        isRequired={false}
                    />
                    <InputBox
                        id="workStartDate"
                        label="Start Date"
                        type="date"
                        placeholder=""
                        isRequired={true}
                    />
                    <InputBox
                        id="workEndDate"
                        label="End Date"
                        type="date"
                        placeholder=""
                        isRequired={false}
                    />
                    <InputBox
                        id="workDesc"
                        label="Description"
                        type="textarea"
                        placeholder=""
                        isRequired={false}
                    />
                    <button type="submit">Add</button>
                </form>
            )}
        </div>
    );
}
