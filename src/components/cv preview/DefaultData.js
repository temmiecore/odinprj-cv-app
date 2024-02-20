import { v4 as uuidv4 } from 'uuid';

const defaultForm = {
    firstName: "Name",
    lastName: "Surname",
    email: "email@email.com",
    phone: "555-555-5555",
    country: "USA",
    city: "California",
    birthday: "04-23-1994",
    links: "github.com/username",
    resumeObj: "Doggo ipsum heckin snoot heckin good boys heckin you are doin me a concern pats, mlem pupper clouds long bois.  Borkdrive extremely cuuuuuute clouds super chub, sub woofer. Many pats very jealous pupper ur givin me a spook noodle horse shibe thicc snoot big ol, length boy shoob snoot heckin good boys and girls long bois.",
}

const educationItem1 = { 
    "id":uuidv4(), 
    "Degree":"Bachelor of General Studies", 
    "School":"California State University", 
    "City":"California", 
    "Start Date":"02-02-2222", 
    "End Date":"02-02-2226", 
    "Description":"Doggo ipsum heckin snoot heckin good boys heckin you are doin me a concern pats, mlem pupper clouds long bois.  Borkdrive extremely cuuuuuute clouds super chub, sub woofer. Many pats very jealous pupper ur givin me a spook noodle horse shibe thicc snoot big ol, length boy shoob snoot heckin good boys and girls long bois."
};

const educationItem2 = { 
    "id":uuidv4(), 
    "Degree":"Master of Business Administration", 
    "School":"Harvard University", 
    "City":"Massachusetts", 
    "Start Date":"02-02-2228", 
    "End Date":"02-02-2234", 
    "Description":"Pats puggo snoot woofer, long doggo.  Boofers you are doin me a concern lotsa pats, stop it fren. What a nice floof long doggo lotsa pats heckin angery woofer you are doin me a concern, wrinkler you are doin me a concern doge. "
};

const workItem1 = {
    "id": uuidv4(),
    "Job Title":"Computer support Specialist",
    "Employer":"Delta Industries",
    "City":"California",
    "Start Date": "02-02-2233",
    "End Date": "02-02-2245",
    "Description":"Heck bork pupper thicc such treat, doggo long doggo. Heckin angery woofer wow such tempt ruff tungg doing me a frighten adorable doggo, wow such tempt very good spot clouds wow such tempt. Maximum borkdrive very hand that feed shibe dat tungg tho woofer very good spot fluffer, I am bekom fat very good spot doge."
}

export {defaultForm, educationItem1, educationItem2, workItem1}