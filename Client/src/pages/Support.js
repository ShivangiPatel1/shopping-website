import { useEffect, useState } from "react";
import "./support.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from "antd";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
const client = new W3CWebSocket("ws://127.0.0.1:8000");
const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;
function Support() {
  const userName = useSelector(state=>state.user);
  const [messages, setMessages] = useState([]);
  const [SearchValue, setSearchValue] = useState("");

  const SendMessage = (value) => {
    client.send(
      JSON.stringify({
        type: "message",
        msg: value,
        user: userName,
      })
    );
    setSearchValue("");
  };
  useEffect(() => {
    client.onopen = () => {
      console.log("web socket client connected");
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log("got reply", dataFromServer);
      if (dataFromServer.type === "message") {
        setMessages([
          ...messages,
          { msg: dataFromServer.msg, user: dataFromServer.user },
        ]);
      }
    };
  });
  
  return (
    <div className="main" id="wrapper">
        <div>
          <div className="title">
            <Text
              id="main-heading"
              type="secondary"
              style={{ fontSize: "36px" }}
            >
              Talk to our Sales Team
            </Text>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: 50,
            }}
            id="messages"
          >
            {messages && messages.map((message) => (
              <Card
                key={message.msg}
                style={{
                  width: 300,
                  margin: "16px 4px 0 4px",
                  alignSelf:
                    userName === message.user ? "flex-end" : "flex-start",
                }}
                loading={false}
              >
                <Meta
                  avatar={
                    <Avatar
                      style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                    >
                      {message.user[0].toUpperCase()}
                    </Avatar>
                  }
                  title={message.user + ":"}
                  description={message.msg}
                />
              </Card>
            ))}
          </div>
          <div className="bottom">
            <Search
              placeholder="input message and send"
              enterButton="Send"
              value={SearchValue}
              size="large"
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={(value) => SendMessage(value)}
            />
          </div>
        </div>
     
    </div>
  );
}

export default Support;
