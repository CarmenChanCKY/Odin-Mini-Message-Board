import "./message-board.scss";

function MessageBoard(props) {
  let obj = props.obj;
  return (
    <div className="message-board">
      <div className="message-info">
        <div className="message-user">{obj.user}</div>
        <div className="message-time"> {props.time}</div>
      </div>
      <div className="message-text">{obj.text}</div>
    </div>
  );
}

export default MessageBoard;
