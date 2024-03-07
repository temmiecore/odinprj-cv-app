import "../styles/cvPreview.css";

export default function CVPreview({ 
    form, 
    education, 
    work, 
    skills,
    targetRef 
}) {
    const dateOptions = { month: "short", year: "numeric" };

    return (
        <div className="CVPreviewBorder">
            <div className="CVPreview" ref={targetRef}>
                <div className="header">
                    <div>
                        <h2 id="name">
                            {form.firstName.toUpperCase()} {form.lastName.toUpperCase()}
                        </h2>
                        <h3 className="links">{form.links}</h3>
                    </div>
                    <div className="personalInfo">
                        <h3>
                            {new Date(form.birthday).toLocaleString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </h3>
                        <h3>{form.city}, {form.country}</h3>
                        <h3>{form.phone}</h3>
                        <h3>{form.email}</h3>
                    </div>
                </div>
                <div className="section resumeObjective">
                    {form.resumeObj.length !== 0 ? <h3>Resume Objective</h3> : null}
                    <p>{form.resumeObj}</p>
                </div>
                <div className="section education">
                    {education.length !== 0 ? <h3>Education</h3> : null}
                    {education.map((item) => {
                        return (
                            <div key={item.id} className="item">
                                <div className="itemDate">
                                    <h3> {new Date(item["Start Date"]).toLocaleString("en-US",dateOptions)} </h3>
                                    <h3>
                                        {item["End Date"] ? new Date(item["End Date"]).toLocaleString("en-US",dateOptions) : "Present"}
                                    </h3>
                                </div>
                                <div className="itemContent">
                                    <h4>{item["Degree"].toUpperCase()}</h4>
                                    <h4> {item["School"]}, {item["City"]} </h4>
                                    <p>{item["Description"]}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="section work">
                    {work.length !== 0 ? <h3>Professional experience</h3> : null}
                    {work.map((item) => {
                        return (
                            <div key={item.id} className="item">
                                <div className="itemDate">
                                    <h3> {new Date(item["Start Date"]).toLocaleString("en-US", dateOptions)} </h3>
                                    <h3>
                                        {item["End Date"] ? new Date(item["End Date"]).toLocaleString("en-US", dateOptions) : "Present"}
                                    </h3>
                                </div>
                                <div className="itemContent">
                                    <h4>{item["Job Title"].toUpperCase()}</h4>
                                    <h4> {item["Employer"]}, {item["City"]} </h4>
                                    <p>{item["Description"]}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="section skills">
                    {skills.length !== 0 ? <h3>Skills</h3> : null}
                    {skills.map((item) => {
                        return (
                            <div key={item.id} className="item">
                                <div className="itemContent">
                                    <h4>{item["Skill"]} - {item["Skill Proficiency"]}</h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
