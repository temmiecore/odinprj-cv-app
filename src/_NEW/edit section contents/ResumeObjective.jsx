import InputBox from "../../components/InputBox";
import styles from "./editsectioncontent.module.css"

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