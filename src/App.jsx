import { useState } from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

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
        setForm({
            firstName: "Name",
            lastName: "Surname",
            email: "email@email.com",
            phone: "555-555-5555",
            country: "USA",
            city: "California",
            birthday: "04-23-1994",
            links: "github.com/username",
            resumeObj: "Doggo ipsum heckin snoot heckin good boys heckin you are doin me a concern pats, mlem pupper clouds long bois.  Borkdrive extremely cuuuuuute clouds super chub, sub woofer. Many pats very jealous pupper ur givin me a spook noodle horse shibe thicc snoot big ol, length boy shoob snoot heckin good boys and girls long bois.",
        });

        let id = uuidv4();
        let degree = "Bachelor of General Studies";
        let school = "California State University";
        let schoolCity = "California";
        let schoolStartDate = "02-02-2222";
        let schoolEndDate = "02-02-2226";
        let schoolDesc = "Doggo ipsum heckin snoot heckin good boys heckin you are doin me a concern pats, mlem pupper clouds long bois.  Borkdrive extremely cuuuuuute clouds super chub, sub woofer. Many pats very jealous pupper ur givin me a spook noodle horse shibe thicc snoot big ol, length boy shoob snoot heckin good boys and girls long bois.";
        const educationItem1 = { id, degree, school, schoolCity, schoolStartDate, schoolEndDate, schoolDesc};
        setEducation([educationItem1]);

        id = uuidv4();
        degree = "Master of Business Administration";
        school = "Harvard University";
        schoolCity = "Massachusetts";
        schoolStartDate = "02-02-2228";
        schoolEndDate = "02-02-2234";
        schoolDesc = "Pats puggo snoot woofer, long doggo.  Boofers you are doin me a concern lotsa pats, stop it fren. What a nice floof long doggo lotsa pats heckin angery woofer you are doin me a concern, wrinkler you are doin me a concern doge. ";
        const educationItem2 = { id, degree, school, schoolCity, schoolStartDate, schoolEndDate, schoolDesc};
        setEducation(prevData => ([...prevData, educationItem2]));

        id = uuidv4();
        let jobTitle = "Computer support Specialist";
        let employer = "Delta Industries";
        let workCity = "California";
        let workStartDate = "02-02-2233";
        let workEndDate = "02-02-2245";
        let workDesc = "Heck bork pupper thicc such treat, doggo long doggo. Heckin angery woofer wow such tempt ruff tungg doing me a frighten adorable doggo, wow such tempt very good spot clouds wow such tempt. Maximum borkdrive very hand that feed shibe dat tungg tho woofer very good spot fluffer, I am bekom fat very good spot doge.";

        const workItem = { id, jobTitle, employer, workCity, workStartDate, workEndDate, workDesc};
        setWork([workItem]);
    }

    return <>
            <CVEdit setForm={setForm} setEducation={setEducation} setWork={setWork} form={form} educationList={education} workList={work} loadDefault={loadDefault}/>
            <CVPreview form={form} education={education} work={work}/>
        </>
}