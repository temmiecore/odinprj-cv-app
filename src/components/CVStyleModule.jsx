import styles from "../styles/cvStylingModule.module.css";
import alignLeft from "../assets/align-left.png";
import alignCenter from "../assets/align-center.png";
import alignRight from "../assets/align-right.png";

function CVStyle({setStyling}) {

    const handleHeaderAlignment = (type) => {
        setStyling(prevData => ({
            ...prevData,
            headerAlignment: type
        }));
    }

    const handleFont = (font) => {
        setStyling(prevData => ({
            ...prevData,
            font: font
        }));
    }

    return <div className={styles.styling}>
        <div className={styles.section}>
            <h2>Header alignment:</h2>
            <div>
                <img
                src={alignLeft}
                alt="left" 
                onClick={()=>handleHeaderAlignment("left")}
                />
                <img
                src={alignCenter}
                alt="center" 
                onClick={()=>handleHeaderAlignment("center")}
                /><img
                src={alignRight}
                alt="right" 
                onClick={()=>handleHeaderAlignment("right")}
                />
            </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.section}>
            <h2>Fonts:</h2>
            <button onClick={()=>handleFont("Times New Roman")}>Times</button>
            <button onClick={()=>handleFont("Namdhinggo")}>Namdhinggo</button>
            <button onClick={()=>handleFont("DM Serif Display")}>DM Serif</button>
            <button onClick={()=>handleFont("Roboto Slab")}>Roboto Slab</button>
            <button onClick={()=>handleFont("Arvo")}>Arvo</button>
        </div>
    </div>
}

export default CVStyle