export default function CVPreview( { form, education, work } ) {
    return <>
    <h2> {Object.values(form).map(value => value + ', ')} </h2>
    <div> {Object.values(education).map((item) => {
        return <h2 key={item.id}>{item.degree}, {item.school}</h2> 
    })} </div>
    </>
}