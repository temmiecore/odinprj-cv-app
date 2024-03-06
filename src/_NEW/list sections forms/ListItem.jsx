import InputBox from "../../components/InputBox";
import styles from "../list sections forms/listwindow.module.css"

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
                                        : "text"}
                            onChange={(e) => editItem(item.id, key, e.target.value, windowId)}
                            isRequired={
                                key.includes("End") || key.includes("Description")
                                    ? false
                                    : true
                            }
                            value={item[key]}
                        />
                    );
            })}
            <button onClick={() => removeItem(item.id, windowId)}> Remove </button>
            <div className={styles.divider}></div>
        </div>
    );
}

export default ListItem;