import ListItem from "./ListItem";
import styles from "../../_NEW/list sections forms/listwindow.module.css"

export default function ListWindow({
    windowId,
    removeItem,
    editItem,
    itemList,
    children
}) {
    return (
        <div className={styles.section}>
            <div className={styles.list} style={!open ? { display: "none" } : null}>
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
