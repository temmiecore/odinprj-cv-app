export default function CVPreview( { form, education, work } ) {
    const dateOptions = { month: 'short', year: 'numeric' };

    return <div className="CVPreview">
        <div className="CVP-header">
            <div>
                <h2 id="CVP-name">{form.firstName.toUpperCase()} {form.lastName.toUpperCase()}</h2>
                <h3 className="CVP-links">{form.links}</h3>
            </div>
            <div className="CVP-personalInfo">
                <h3>{new Date(form.birthday).toLocaleString("en-US", { day: 'numeric', month: 'short', year: 'numeric' })}</h3>
                <h3>{form.city}, {form.country}</h3>
                <h3>{form.phone}</h3>
                <h3>{form.email}</h3>
            </div>
        </div>
        <div className="CVP-section CVP-resumeObjective">
            <h3>Resume Objective</h3>
            <p>{form.resumeObj}</p>
        </div>
        <div className="CVP-section CVP-education">
            <h3>Education</h3>
            { education.map((item) => {
                return <div key={item.id} className="CVP-item">
                    <div className="CVP-itemDate">
                        <h3>{new Date(item.schoolStartDate).toLocaleString('en-US', dateOptions)}</h3>
                        <h3>{item.schoolEndDate ? new Date(item.schoolEndDate).toLocaleString('en-US', dateOptions) : "Present"}</h3>
                    </div>
                    <div className="CVP-itemContent">
                        <h4>{item.degree.toUpperCase()}</h4>
                        <h4>{item.school}, {item.schoolCity}</h4>
                        <p>{item.schoolDesc}</p>
                    </div>
                </div>
            })}
        </div>
        <div className="CVP-section CVP-work">
            <h3>Professional experience</h3>
            { work.map((item) => {
                return <div key={item.id} className="CVP-item">
                    <div className="CVP-itemDate">
                        <h3>{new Date(item.workStartDate).toLocaleString('en-US', dateOptions)}</h3>
                        <h3>{item.workEndDate ? new Date(item.workEndDate).toLocaleString('en-US', dateOptions) : "Present"}</h3>
                    </div>
                    <div className="CVP-itemContent">
                        <h4>{item.jobTitle.toUpperCase()}</h4>
                        <h4>{item.employer}, {item.workCity}</h4>
                        <p>{item.workDesc}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
}