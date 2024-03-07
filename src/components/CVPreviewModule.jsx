import "../styles/cvPreviewModule.css";

function CVPreview({
    form,
    education,
    work,
    skills,
    targetRef,
    styling
}) {
    const dateOptions = { month: "short", year: "numeric" };

    return (
        <div className="border">
            <div className="page" ref={targetRef} style={{ fontFamily: styling.font }}>
                <div className="header">
                    <div>
                        <h2 className="name">
                            {form.firstName.toUpperCase()} {form.lastName.toUpperCase()}
                        </h2>
                        <h3 className="links">{form.links}</h3>
                    </div>
                    <div className="personal-info">
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
                {form.resumeObj.length !== 0
                    ? <div className="section">
                        <h3 className={styling.headerAlignment == "right"
                            ? "section-header right"
                            : styling.headerAlignment == "center"
                                ? "section-header center"
                                : "section-header left"
                        } > Resume Objective </h3>
                        <p>{form.resumeObj}</p>
                    </div>
                    : null}
                {education.length !== 0
                    ? <div className="section">
                        <h3 className={styling.headerAlignment == "right"
                            ? "section-header right"
                            : styling.headerAlignment == "center"
                                ? "section-header center"
                                : "section-header left"
                        } > Education </h3>
                        {education.map((item) => {
                            return (
                                <div key={item.id} className="list-item">
                                    <div className="item-dates">
                                        <h3> {new Date(item["Start Date"]).toLocaleString("en-US", dateOptions)} </h3>
                                        <h3>
                                            {item["End Date"] ? new Date(item["End Date"]).toLocaleString("en-US", dateOptions) : "Present"}
                                        </h3>
                                    </div>
                                    <div className="item-content">
                                        <h3>{item["Degree"].toUpperCase()}</h3>
                                        <h4> {item["School"]}, {item["City"]} </h4>
                                        <p>{item["Description"]}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div> : null}
                {work.length !== 0 ?
                    <div className="section">
                        <h3 className={styling.headerAlignment == "right"
                            ? "section-header right"
                            : styling.headerAlignment == "center"
                                ? "section-header center"
                                : "section-header left"
                        } > Professional experience </h3>
                        {work.map((item) => {
                            return (
                                <div key={item.id} className="list-item">
                                    <div className="item-dates">
                                        <h3> {new Date(item["Start Date"]).toLocaleString("en-US", dateOptions)} </h3>
                                        <h3>
                                            {item["End Date"] ? new Date(item["End Date"]).toLocaleString("en-US", dateOptions) : "Present"}
                                        </h3>
                                    </div>
                                    <div className="item-content">
                                        <h3>{item["Job Title"].toUpperCase()}</h3>
                                        <h4> {item["Employer"]}, {item["City"]} </h4>
                                        <p>{item["Description"]}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div> : null}
                {skills.length !== 0 ?
                    <div className="section">
                        <h3 className={styling.headerAlignment == "right"
                            ? "section-header right"
                            : styling.headerAlignment == "center"
                                ? "section-header center"
                                : "section-header left"
                        } > Skills </h3>
                        {skills.map((item) => {
                            return (
                                <div key={item.id} className="list-item skill">
                                    <div className="item-content skill">
                                        <h4>{item["Skill"]}</h4>
                                        <h4>{item["Skill Proficiency"]}</h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div> : null}
            </div>
        </div>
    );
}

export default CVPreview;