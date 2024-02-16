import { useState } from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";

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

    return <>
            <CVEdit setForm={setForm} setEducation={setEducation} setWork={setWork} educationList={education} workList={work}/>
            <CVPreview form={form} education={education} work={work}/>
        </>
}