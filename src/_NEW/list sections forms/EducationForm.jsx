import InputBox from "../../components/InputBox";
import styles from "./listwindow.module.css"

function EducationForm({ addItem }) {
    return <form
        className={styles.item}
        onSubmit={addItem}>
        <InputBox
            id="degree"
            label="Degree"
            type="text"
            placeholder=""
            isRequired={true}
        />
        <InputBox
            id="school"
            label="School"
            type="text"
            placeholder=""
            isRequired={true}
        />
        <InputBox
            id="schoolCity"
            label="City"
            type="text"
            placeholder=""
            isRequired={false}
        />
        <InputBox
            id="schoolStartDate"
            label="Start Date"
            type="date"
            placeholder=""
            isRequired={true}
        />
        <InputBox
            id="schoolEndDate"
            label="End Date"
            type="date"
            placeholder=""
            isRequired={false}
        />
        <InputBox
            id="schoolDesc"
            label="Description"
            type="textarea"
            placeholder=""
            isRequired={false}
        />
        <button type="submit">Add</button>
    </form>
}

export default EducationForm;