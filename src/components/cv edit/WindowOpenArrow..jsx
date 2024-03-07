import "../../styles/windowOpenArrow.css"
import down from "../../assets/down.png"

export default function WindowOpenArrow({ open, setOpen }) {
    return (
      <img
        className={open ? "open" : "closed"}
        src={down}
        alt="close/open the window"
        onClick={setOpen}
      />
    );
}