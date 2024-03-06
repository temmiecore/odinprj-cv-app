import { useReducer, useState } from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";
import { useEffect } from 'react';
import { defaultForm, educationItem1, educationItem2, workItem1 } from "./components/cv preview/DefaultData";
import { v4 as uuidv4 } from 'uuid';

const initialLists = {
    education: [educationItem1, educationItem2],
    work: [workItem1],
}

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

    const [lists, dispatch] = useReducer(itemHandlingReducer, initialLists);
    const { education, work } = lists;

    useEffect(() => {
        loadDefault();
    }, []);

    const loadDefault = () => {
        setForm(defaultForm);
        dispatch({ type: "reset" });
    }

    return <>
            <CVEdit setForm={setForm} dispatch={dispatch} form={form} educationList={education} workList={work} loadDefault={loadDefault}/>
            <CVPreview form={form} education={education} work={work}/>
        </>
}

function itemHandlingReducer(prevState, action) {
    switch (action.type) {
        case "add": {
            const id = uuidv4();
            const values = Array.from(action.event.target).map(input => input.value);
            let item = [];
            action.event.target.reset();

            switch (action.listId) {
                case "education": {
                    item = {
                        "id": id,
                        "Degree": values[0],
                        "School": values[1],
                        "City": values[2],
                        "Start Date": values[3],
                        "End Date": values[4],
                        "Description": values[5]
                    };
                    break;
                }
                case "work": {
                    item = {
                        "id": id,
                        "Job Title": values[0],
                        "Employer": values[1],
                        "City": values[2],
                        "Start Date": values[3],
                        "End Date": values[4],
                        "Description": values[5]
                    };
                    break;
                }
            }

            return {
                ...prevState,
                [action.listId]: [...prevState[action.listId], item]
            };
        }
        case "edit": {
            return {
                ...prevState,
                [action.listId]: prevState[action.listId].map(item => {
                    if (item.id === action.itemId) {
                        return { ...item, [action.propertyName]: action.propertyValue };
                    }
                    return item;
                })
            };
        }
        case "remove": {
            return {
                ...prevState,
                [action.listId]: prevState[action.listId].filter(item => item.id !== action.itemId)
            };
        }
        case "reset": {
            return initialLists;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}