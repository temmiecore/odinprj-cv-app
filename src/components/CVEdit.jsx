import ListWindow from "../_NEW/list sections forms/ListWindow";
import PersonalDetails from "../_NEW/edit section contents/PersonalDetails";
import ResumeObjective from "../_NEW/edit section contents/ResumeObjective";
import { v4 as uuidv4 } from 'uuid';
import EditSection from "../_NEW/EditSection";
import styles from "../_NEW/cvedit.module.css";
import EducationForm from "../_NEW/list sections forms/EducationForm";
import WorkForm from "../_NEW/list sections forms/WorkForm";

export default function CVEdit({ 
    setForm, 
    setEducation, 
    setWork, 
    form, 
    educationList, 
    workList, 
    loadDefault 
}) {
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

        const id = uuidv4();
        const degree = event.target[0].value;
        const school = event.target[1].value;
        const city = event.target[2].value;
        const startDate = event.target[3].value;
        const endDate = event.target[4].value;
        const desc = event.target[5].value;

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
        event.target[5].value = "";

        const educationItem = {
            "id": id,
            "Degree": degree,
            "School": school,
            "City": city,
            "Start Date": startDate,
            "End Date": endDate,
            "Description": desc
        };

        setEducation(prevData => ([...prevData, educationItem]));
    };

    const handleWorkAdd = event => {
        event.preventDefault();

        const id = uuidv4();
        const jobTitle = event.target[0].value;
        const employer = event.target[1].value;
        const city = event.target[2].value;
        const startDate = event.target[3].value;
        const endDate = event.target[4].value;
        const desc = event.target[5].value;

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
        event.target[5].value = "";

        const workItem = {
            "id": id,
            "Job Title": jobTitle,
            "Employer": employer,
            "City": city,
            "Start Date": startDate,
            "End Date": endDate,
            "Description": desc
        };

        setWork(prevData => ([...prevData, workItem]));
    };

    return <div className={styles.section}>
        <EditSection headerText="Personal Details">
            <PersonalDetails onInputChange={handlePersonalDetailChange} form={form} />
        </EditSection>

        <EditSection headerText="Resume Objective">
            <ResumeObjective onInputChange={handlePersonalDetailChange} form={form} />
        </EditSection>

        <EditSection headerText="Education">
            <ListWindow
                windowId={"Education"}
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={educationList} >
                <EducationForm addItem={handleEducationAdd} />
            </ListWindow>
        </EditSection>

        <EditSection headerText="Work">
            <ListWindow
                windowId={"Work"}
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={workList} >
                <WorkForm addItem={handleWorkAdd} />
            </ListWindow>
        </EditSection>

        <button onClick={() => loadDefault()}>Load Default</button>
    </div>
}
