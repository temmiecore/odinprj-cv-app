import { v4 as uuidv4 } from 'uuid';

const defaultForm = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "555-555-5555",
    country: "USA",
    city: "California",
    birthday: "04-23-1994",
    links: "github.com/johhny",
    resumeObj: "Dedicated and innovative software engineer with a passion for crafting robust and scalable solutions. Skilled in full-stack development, with a focus on leveraging cutting-edge technologies to deliver efficient and user-centric software products. Committed to continuous learning and staying abreast of industry trends to drive technological advancements.",
}

const educationItem1 = { 
    "id":uuidv4(), 
    "Degree":"Bachelor of General Studies", 
    "School":"California State University", 
    "City":"California", 
    "Start Date":"09-02-2012", 
    "End Date":"06-02-2016", 
    "Description":"Bachelor of General Studies provided a diverse interdisciplinary education, fostering critical thinking and communication skills essential for navigating real-world challenges."
};

const educationItem2 = { 
    "id":uuidv4(), 
    "Degree":"Master of Business Administration", 
    "School":"Harvard University", 
    "City":"Massachusetts", 
    "Start Date":"09-02-2016", 
    "End Date":"06-02-2018", 
    "Description":"MBA program offered specialized training in strategic management, leadership, and finance, preparing me for success in dynamic business environments."
};

const workItem1 = {
    "id": uuidv4(),
    "Job Title":"Computer support Specialist",
    "Employer":"Delta Industries",
    "City":"California",
    "Start Date": "05-02-2015",
    "End Date": "",
    "Description":"As a Computer Support Specialist at Delta Industries, I provided technical support, implemented security protocols, and conducted user training to ensure system efficiency and data integrity."
}

export {defaultForm, educationItem1, educationItem2, workItem1}