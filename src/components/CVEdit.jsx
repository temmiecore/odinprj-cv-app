import ListWindow from "../_NEW/list sections forms/ListWindow";
import PersonalDetails from "../_NEW/edit section contents/PersonalDetails";
import ResumeObjective from "../_NEW/edit section contents/ResumeObjective";
import EditSection from "../_NEW/EditSection";
import styles from "../_NEW/cvedit.module.css";
import EducationForm from "../_NEW/list sections forms/EducationForm";
import WorkForm from "../_NEW/list sections forms/WorkForm";

export default function CVEdit({ 
    setForm, 
    dispatch,
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

    const handleItemAdd = (event, listId) => {
        event.preventDefault();
        dispatch({
            type: "add",
            event: event,
            listId: listId,
        });
    }

    const handleItemEdit = (itemId, propertyName, propertyValue, listId) => {
        dispatch({
            type: "edit",
            itemId: itemId,
            listId: listId,
            propertyName: propertyName,
            propertyValue: propertyValue
        });
    }

    const handleItemRemoval = (itemId, listId) => {
        dispatch({
            type: "remove",
            itemId: itemId,
            listId: listId
        });
    }

    return <div className={styles.section}>
        <EditSection headerText="Personal Details">
            <PersonalDetails onInputChange={handlePersonalDetailChange} form={form} />
        </EditSection>

        <EditSection headerText="Resume Objective">
            <ResumeObjective onInputChange={handlePersonalDetailChange} form={form} />
        </EditSection>

        <EditSection headerText="Education">
            <ListWindow
                windowId={"education"}
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={educationList} >
                <EducationForm addItem={(e) => handleItemAdd(e, "education")} />
            </ListWindow>
        </EditSection>

        <EditSection headerText="Work">
            <ListWindow
                windowId={"work"}
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={workList} >
                <WorkForm addItem={(e) => handleItemAdd(e, "work")} />
            </ListWindow>
        </EditSection>

        <button onClick={() => loadDefault()}>Load Default</button>
    </div>
}


