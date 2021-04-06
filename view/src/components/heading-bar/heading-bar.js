import "./heading-bar.scss";
import { Link } from "react-router-dom";

function HeadingBar(props) {
  return (
    <div className="heading-bar">
      <Link className="heading-bar-text" to="/">
        Message Box
      </Link>
      <div
        className={
          props.show ? "heading-bar-new-message-button" : "button-hide"
        }
      >
        <Link className="new-message-button" to="/new">
          New Message
        </Link>
      </div>
    </div>
  );
}

export default HeadingBar;
