import InputBox from "../InputBox";
import styles from "../../../styles/editSectionContent.module.css"

function ResumeObjective({ 
    onInputChange, 
    form 
}) {

    return (
        <div className={styles.section}>
                <InputBox
                    id="resumeObj"
                    label=""
                    type="textarea"
                    placeholder="Type here."
                    onChange={onInputChange}
                    isRequired={true}
                    value={form.resumeObj}
                />
        </div>
    );
}

export default ResumeObjective;