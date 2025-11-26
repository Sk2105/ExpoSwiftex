"use dom";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

function PusherDom() {
  const [message, setMessage] = React.useState([]);
  const [txt,setTxt] = useState("")
  useEffect(() => {
    // Enable logging (dev only)
    Pusher.logToConsole = true;

    // Initialize pusher
    const pusher = new Pusher("f130abdadd812f2fe7cd", {
      cluster: "ap2",
    });

    // Subscribe to the channel
    const channel = pusher.subscribe("my-channel");
    console.log(channel.name);


    // Bind event
    channel.bind("my-event", (data) => {
      console.log("message", data);
      setMessage((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect();
    }

  }, []);


  const handleSendMessage = () => {
    // Logic to send message via Pusher (usually done from server-side)
    try {
      fetch("http://10.186.228.82:3000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: txt }),
      }).then(e=>console.log(e))
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Pusher Test</h1>
      <p>
        Listening on <code>my-channel</code> for <code>my-event</code>
      </p>
      <input
        type="text"
        onChange={(e)=>
            setTxt(e.target.value)
        }
        placeholder="Type your message here..."
        style={{ marginBottom: 20, padding: 10, width: '300px' }}
      />
      <input
        type="button"
        value="Send Message"
        onClick={handleSendMessage}
        style={{ marginBottom: 20, padding: 10 }}
      />
      <h2>Messages:</h2>
      {message.map((msg, index) => (
        <div
          key={index}
          style={{ marginBottom: 10, padding: 10}}
        >
           {msg.message}
        </div>
      ))}
    </div>
  );
}

export default PusherDom;
