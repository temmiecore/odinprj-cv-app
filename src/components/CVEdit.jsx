import PersonalDetails from "../components/cv edit/edit section contents/PersonalDetails";
import ResumeObjective from "../components/cv edit/edit section contents/ResumeObjective";
import ListWindow from "../components/cv edit/edit section contents/ListWindow";
import EditSection from "../components/cv edit/EditSection";
import EducationForm from "../components/cv edit/list sections forms/EducationForm";
import WorkForm from "../components/cv edit/list sections forms/WorkForm";
import styles from "../styles/cvedit.module.css";
import SkillsForm from "./cv edit/list sections forms/SkillsForm";

export default function CVEdit({
    setForm,
    dispatch,
    form,
    educationList,
    workList,
    skillList,
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
                windowId="education"
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={educationList}
            >
                <EducationForm addItem={(e) => handleItemAdd(e, "education")} />
            </ListWindow>
        </EditSection>

        <EditSection headerText="Work">
            <ListWindow
                windowId="work"
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={workList}
            >
                <WorkForm addItem={(e) => handleItemAdd(e, "work")} />
            </ListWindow>
        </EditSection>

        <EditSection headerText="Skills">
            <ListWindow
                windowId="skills"
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={skillList}
            >
                <SkillsForm addItem={(e) => handleItemAdd(e, "skills")} />
            </ListWindow>
        </EditSection>

        <button onClick={() => loadDefault()}>Load Default</button>
    </div>
}


