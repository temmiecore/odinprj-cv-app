import Education from "./cv edit/Education";
import PersonalDetails from "./cv edit/PersonalDetails";
import ResumeObjective from "./cv edit/ResumeObjective";
import { v4 as uuidv4 } from 'uuid';
import WorkExperience from "./cv edit/WorkExperience";

export default function CVEdit({ setForm, setEducation, setWork, setInterest, setSkill, educationList, workList, interestList, skillList }) {
    const handlePersonalDetailChange = event => {
        const { name, value } = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    // definitely need an factory 
    const handleItemRemoval = (id, type) => {
        switch (type) {
            case "education": {
                setEducation(prevData => {
                    return prevData.filter((item) => item.id !== id);
                });
                break; 
            }
            case "work": {
                setWork(prevData => {
                    return prevData.filter((item) => item.id !== id);
                });
                break; 
            }
            case "interest": {
                setInterest(prevData => {
                    return prevData.filter((item) => item.id !== id);
                }); 
                break;
            }
            case "skill": {
                setSkill(prevData => {
                    return prevData.filter((item) => item.id !== id);
                }); 
                break;
            }
        }
        //console.log(type);
    };

    // definitely need an factory
    const handleItemEdit = (id, name, value, type) => {
        switch (type) {
            case "education": {
                setEducation(prevData => {
                    return prevData.map((item) => {
                        if (item.id === id) {
                            //console.log(value);
                            return { ...item, [name]: value };
                        }
                        return item;
                    });
                });
                break; 
            }
            case "work": {
                setWork(prevData => {
                    return prevData.map((item) => {
                        if (item.id === id) {
                            //console.log(value);
                            return { ...item, [name]: value };
                        }
                        return item;
                    });
                });
                break; 
            }
            case "interest": {
                setInterest(prevData => {
                    return prevData.map((item) => {
                        if (item.id === id) {
                            //console.log(value);
                            return { ...item, [name]: value };
                        }
                        return item;
                    });
                });
                break;
            }
            case "skill": {
                setSkill(prevData => {
                    return prevData.map((item) => {
                        if (item.id === id) {
                            //console.log(value);
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
        const schoolCity = event.target[2].value;
        const schoolStartDate = event.target[3].value;
        const schoolEndDate = event.target[4].value;
        const schoolDesc = event.target[5].value;

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
        event.target[5].value = "";

        const educationItem = { id, degree, school, schoolCity, schoolStartDate, schoolEndDate, schoolDesc};
        setEducation(prevData => ([...prevData, educationItem]));
        //console.log(educationItem);
    };

    const handleWorkAdd = event => {
        event.preventDefault();
        const id = uuidv4();
        const jobTitle = event.target[0].value;
        const employer = event.target[1].value;
        const workCity = event.target[2].value;
        const workStartDate = event.target[3].value;
        const workEndDate = event.target[4].value;
        const workDesc = event.target[5].value;

        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
        event.target[5].value = "";

        const educationItem = { id, jobTitle, employer, workCity, workStartDate, workEndDate, workDesc};
        setWork(prevData => ([...prevData, educationItem]));
        //console.log(educationItem);
    };

    return <div className="CVEdit">
            <PersonalDetails onInputChange={handlePersonalDetailChange} />
            <ResumeObjective onInputChange={handlePersonalDetailChange} />
            <Education educationAdd={handleEducationAdd} educationRemove={handleItemRemoval} educationEdit={handleItemEdit} educationList={educationList}/>
            <WorkExperience workAdd={handleWorkAdd} workRemove={handleItemRemoval} workEdit={handleItemEdit} workList={workList}/>
        </div>
}