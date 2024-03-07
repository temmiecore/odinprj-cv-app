import InputBox from "../InputBox";
import styles from "../../../styles/listWindow.module.css"

function ListItem({
    item,
    windowId,
    removeItem,
    editItem
}) {
    return (
        <div className={styles.item}>
            {Object.keys(item).map((key) => {
                if (key !== "id")
                    return (
                        <InputBox
                            key={key}
                            label={key}
                            type={
                                key.includes("Date")
                                    ? "date"
                                    : key.includes("Description")
                                        ? "textarea"
                                        : key.includes("Skill Proficiency")
                                            ? "select"
                                            : "text"
                            }
                            onChange={(e) => editItem(item.id, key, e.target.value, windowId)}
                            isRequired={
                                key.includes("End") || key.includes("Description")
                                    ? false
                                    : true
                            }
                            value={item[key]}
                        >
                            {
                                key.includes("Skill Proficiency")
                                    ? <>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Proficient">Proficient</option>
                                        <option value="Expert">Expert</option>
                                    </>
                                    : null
                            }
                        </InputBox>
                    );
            })}
            <button onClick={() => removeItem(item.id, windowId)}> Remove </button>
            <div className={styles.divider}></div>
        </div>
    );
}

export default ListItem;