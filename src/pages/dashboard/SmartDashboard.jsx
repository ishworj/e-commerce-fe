import React, { useState } from "react";

const SmartDashboard = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi Admin 👋, ask me anything about your store!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "admin", text: input };
    const botMessage = {
      from: "bot",
      text: `You said: "${input}". (I'll answer smartly soon 😉)`,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              alignSelf: msg.from === "admin" ? "flex-end" : "flex-start",
              background: msg.from === "admin" ? "#dcf8c6" : "#f1f0f0",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    backgroundColor: "#fff",
  },
  chatBox: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
  },
  message: {
    padding: "10px 15px",
    borderRadius: "20px",
    maxWidth: "75%",
    fontSize: "14px",
  },
  inputArea: {
    display: "flex",
    borderTop: "1px solid #ddd",
    padding: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    marginRight: "10px",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "20px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default SmartDashboard;
