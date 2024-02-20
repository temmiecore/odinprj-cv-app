import ListWindow from "./cv edit/ListWindow";
import PersonalDetails from "./cv edit/PersonalDetails";
import ResumeObjective from "./cv edit/ResumeObjective";
import { v4 as uuidv4 } from 'uuid';
import "../styles/cvEdit.css"

export default function CVEdit({ setForm, setEducation, setWork, form, educationList, workList, loadDefault }) {
    const handlePersonalDetailChange = event => {
        const { name, value } = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleItemRemoval = (id, type) => {
        switch (type) {
            case "Education": {
                setEducation(prevData => {
                    return prevData.filter((item) => item.id !== id);
                });
                break; 
            }
            case "Work": {
                setWork(prevData => {
                    return prevData.filter((item) => item.id !== id);
                });
                break; 
            }
        }
    };

    const handleItemEdit = (id, name, value, type) => {
        switch (type) {
            case "Education": {
                setEducation(prevData => {
                    return prevData.map((item) => {
                        if (item.id === id) {
                            return { ...item, [name]: value };
                        }
                        return item;
                    });
                });
                break; 
            }
            case "Work": {
                setWork(prevData => {
                    return prevData.map((item) => {
                        if (item.id === id) {
                            return { ...item, [name]: value };
                        }
                        return item;
                    });
                });
                break; 
            }
        }
    };

    const handleEducationAdd = event => {
        event.preventDefault();

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
        event.target[5].value = "";

        const educationItem = { 
            "id":uuidv4(), 
            "Degree":event.target[0].value, 
            "School":event.target[1].value, 
            "City":event.target[2].value, 
            "Start Date":event.target[3].value, 
            "End Date":event.target[4].value, 
            "Description":event.target[5].value
        };

        setEducation(prevData => ([...prevData, educationItem]));
    };

    const handleWorkAdd = event => {
        event.preventDefault();

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
        event.target[5].value = "";

        const workItem = { 
            "id":uuidv4(), 
            "Job Title":event.target[0].value, 
            "Employer":event.target[1].value, 
            "City":event.target[2].value, 
            "Start Date":event.target[3].value, 
            "End Date":event.target[4].value, 
            "Description":event.target[5].value
        };

        setWork(prevData => ([...prevData, workItem]));
    };

    return <div className="CVEdit">
            <PersonalDetails onInputChange={handlePersonalDetailChange} form={form}/>
            <ResumeObjective onInputChange={handlePersonalDetailChange} form={form}/>
            <ListWindow 
            windowHeader={"Education"} 
            addItem={handleEducationAdd} 
            removeItem={handleItemRemoval} 
            editItem={handleItemEdit} 
            itemList={educationList}
            />
            <ListWindow 
            windowHeader={"Work"} 
            addItem={handleWorkAdd} 
            removeItem={handleItemRemoval} 
            editItem={handleItemEdit} 
            itemList={workList}
            />
            <button onClick={() => loadDefault()}>Load Default</button>
        </div>
}