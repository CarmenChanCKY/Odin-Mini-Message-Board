import "./message-box-page.scss";
import HeadingBar from "../../components/heading-bar/heading-bar.js";
import MessageBoard from "../../components/message-board/message-board.js";
import axiosRequest from "../axios-setting.js";
import moment from "moment";
import { useState, useEffect } from "react";

function MessageBoxPage() {
  let [message, setMessage] = useState([]);
  let [messageTime, setMessageTime] = useState([]);

  useEffect(() => {
    axiosRequest
      .get("/")
      .then((res) => {
        setMessage(res.data);
        let time = [];
        for (let i = 0; i < res.data.length; i++) {
          time.push(moment(res.data[i].added).fromNow());
        }
        setMessageTime(time);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    let updatemessageTime = setInterval(() => {
      let time = [];
      let messageList = [...message];
      for (let i = 0; i < messageList.length; i++) {
        time.push(moment(messageList[i].added).fromNow());
      }
      setMessageTime(time);
    }, 60000);

    return () => {
      clearInterval(updatemessageTime);
    };
  });

  return (
    <div className="box-container">
      <HeadingBar show={true} />
      <div className="message-box-container">
        <div className="message-box-content">
          {message.map(function (arr, index) {
            return <MessageBoard obj={arr} time={messageTime[index]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MessageBoxPage;
