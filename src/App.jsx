import { useState } from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";
import { useEffect } from 'react';
import { defaultForm, educationItem1, educationItem2, workItem1 } from "./components/cv preview/DefaultData";

export default function App() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        birthday: "",
        links: "",
        resumeObj: "",
    });

    const [education, setEducation] = useState([]);
    const [work, setWork] = useState([]);

    useEffect(() => {
        loadDefault();
    }, []);

    const loadDefault = () => {
        setForm(defaultForm);
        setEducation([educationItem1]);
        setEducation(prevData => ([...prevData, educationItem2]));
        setWork([workItem1]);
    }

    return <>
            <CVEdit setForm={setForm} setEducation={setEducation} setWork={setWork} form={form} educationList={education} workList={work} loadDefault={loadDefault}/>
            <CVPreview form={form} education={education} work={work}/>
        </>
}