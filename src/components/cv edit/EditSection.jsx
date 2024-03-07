import { useState } from "react";
import WindowOpenArrow from "./WindowOpenArrow.";
import styles from "../../styles/editSection.module.css"

function EditSection({
    headerText,
    children,
    open,
    setOpen
}) {

    return <div className={styles.section}>
        <div className={styles.header}>
            <h2>{headerText}</h2>
            <WindowOpenArrow open={open} setOpen={setOpen}/>
        </div>
        <div className={open ? styles.content : styles.contentClosed}>
            {children}
        </div>
    </div>
}

export default EditSection;