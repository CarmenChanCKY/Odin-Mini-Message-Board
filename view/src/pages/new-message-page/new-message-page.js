import "./new-message-page.scss";
import HeadingBar from "../../components/heading-bar/heading-bar.js";
import axiosRequest from "../axios-setting.js";

function NewMessagePage() {

  const test = (e) => {
    e.preventDefault();
    let user = e.target[0].value.trim();
    let text = e.target[1].value.trim();
    let info_message = document.getElementById("info_message");

    if (user.length === 0 || text.length === 0) {
      info_message.innerHTML = "Please input you name and message!";
    } else {
      axiosRequest
        .post("/new", {
          user: e.target[0].value,
          text: e.target[1].value,
        })
        .then((res) => {
          info_message.innerHTML = res.data;
        });
    }
  };

  return (
    <div className="new-message-container">
      <HeadingBar show={false} />
      <div className="new-message-panel-container">
        <div className="new-message-panel-content">
          <form
            method="POST"
            action="http://localhost:3001/new"
            onSubmit={(e) => test(e)}
          >
            <div className="new-message-panel-field">
              <label htmlFor="user" className="label-text">
                User
              </label>
              <input
                type="text"
                name="user"
                id="user"
                className="text-field"
                required
              ></input>
            </div>
            <div className="new-message-panel-field">
              <label htmlFor="message" className="label-text">
                Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                className="text-field"
                required
              ></input>
            </div>
            <div className="new-message-panel-field">
              <input
                type="submit"
                value="Submit"
                className="submit-button"
              ></input>
            </div>
          </form>
          <div id="info_message"></div>
        </div>
      </div>
    </div>
  );
}

export default NewMessagePage;
