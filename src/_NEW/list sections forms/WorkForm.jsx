import InputBox from "../../components/InputBox";
import styles from "./listwindow.module.css"

function WorkForm({ addItem }) {
    return <form
        className={styles.item}
        onSubmit={addItem}>
        <InputBox
            id="jobTitle"
            label="Job Title"
            type="text"
            placeholder=""
            isRequired={true}
        />
        <InputBox
            id="employer"
            label="Employer"
            type="text"
            placeholder=""
            isRequired={true}
        />
        <InputBox
            id="workCity"
            label="City"
            type="text"
            placeholder=""
            isRequired={false}
        />
        <InputBox
            id="workStartDate"
            label="Start Date"
            type="date"
            placeholder=""
            isRequired={true}
        />
        <InputBox
            id="workEndDate"
            label="End Date"
            type="date"
            placeholder=""
            isRequired={false}
        />
        <InputBox
            id="workDesc"
            label="Description"
            type="textarea"
            placeholder=""
            isRequired={false}
        />
        <button type="submit">Add</button>
    </form>
}

export default WorkForm;