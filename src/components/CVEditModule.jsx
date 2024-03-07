import PersonalDetails from "./cv edit/edit section contents/PersonalDetails";
import ResumeObjective from "./cv edit/edit section contents/ResumeObjective";
import ListWindow from "./cv edit/edit section contents/ListWindow";
import EditSection from "./cv edit/EditSection";
import EducationForm from "./cv edit/list sections forms/EducationForm";
import WorkForm from "./cv edit/list sections forms/WorkForm";
import SkillsForm from "./cv edit/list sections forms/SkillsForm";
import { useState } from "react";
import styles from "../styles/cvEditModule.module.css";

function CVEdit({
    setForm,
    dispatch,
    form,
    educationList,
    workList,
    skillList,
    loadDefault,
    toPDF
}) {

    const [openedSections, setOpenedSection] = useState([false, false, false, false, false]);

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

    const handleOpeningSection = (sectionId) => {
        setOpenedSection(prevData => 
            prevData.map((section, i) => i == sectionId ? !section : false))
    }

    return <div className={styles.section}>
        <EditSection headerText="Personal Details" open={openedSections[0]} setOpen={() => handleOpeningSection(0)}>
            <PersonalDetails onInputChange={handlePersonalDetailChange} form={form} />
        </EditSection>

        <EditSection headerText="Resume Objective" open={openedSections[1]} setOpen={() => handleOpeningSection(1)}>
            <ResumeObjective onInputChange={handlePersonalDetailChange} form={form} />
        </EditSection>

        <EditSection headerText="Education" open={openedSections[2]} setOpen={() => handleOpeningSection(2)}>
            <ListWindow
                windowId="education"
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={educationList}
            >
                <EducationForm addItem={(e) => handleItemAdd(e, "education")} />
            </ListWindow>
        </EditSection>

        <EditSection headerText="Work" open={openedSections[3]} setOpen={() => handleOpeningSection(3)}>
            <ListWindow
                windowId="work"
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={workList}
            >
                <WorkForm addItem={(e) => handleItemAdd(e, "work")} />
            </ListWindow>
        </EditSection>

        <EditSection headerText="Skills" open={openedSections[4]} setOpen={() => handleOpeningSection(4)}>
            <ListWindow
                windowId="skills"
                removeItem={handleItemRemoval}
                editItem={handleItemEdit}
                itemList={skillList}
            >
                <SkillsForm addItem={(e) => handleItemAdd(e, "skills")} />
            </ListWindow>
        </EditSection>

        <button onClick={loadDefault}>Load Default</button>
        <button onClick={toPDF}>Download Preview</button>
    </div>
}

export default CVEdit;
