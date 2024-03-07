import ListItem from "./ListItem";
import styles from "../../../styles/listWindow.module.css"

function ListWindow({
    windowId,
    removeItem,
    editItem,
    itemList,
    children
}) {
    return (
        <div className={styles.section}>
            <div className={styles.list}>
                {itemList.map((item) => {
                    return (
                        <ListItem
                            className={styles.item} 
                            key={item.id}
                            item={item}
                            editItem={editItem}
                            removeItem={removeItem}
                            windowId={windowId}
                        />
                    );
                })}
            </div>
            { children
            /* EducationForm, WorkForm, etc. 
                addItem prop goes here */ }
        </div>
    );
}

export default ListWindow;