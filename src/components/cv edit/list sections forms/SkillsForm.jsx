import InputBox from "../InputBox";
import styles from "../../../styles/listWindow.module.css"

function SkillsForm({ addItem }) {
    return <form
        className={styles.item}
        onSubmit={addItem}>
        <InputBox
            id="skill"
            label="Skill"
            type="text"
            placeholder="MS Paint"
            isRequired={true}
        />
        <InputBox
            id="skillProficiency"
            label="Skill Proficiency"
            type="select"
            isRequired={true}
        >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Proficient">Proficient</option>
            <option value="Expert">Expert</option>
        </InputBox>
        <button type="submit">Add</button>
    </form>
}

export default SkillsForm;