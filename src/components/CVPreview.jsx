export default function CVPreview( { form, education, work } ) {
    return <div className="CVPreview">
        <h2>{form.firstName} {form.lastName}</h2>
        <h3>Personal Information</h3>
        <div>
            <h4>{form.email}</h4>
            <h4>{form.phone}</h4>
        </div>
        <div>
            <h4>{form.country}</h4>
            <h4>{form.city}</h4>
        </div>
        <h4>{form.birthday}</h4>
        <h4>{form.links}</h4>
        <h3>Resume Objective</h3>
        <p>{form.resumeObj}</p>
    </div>
}