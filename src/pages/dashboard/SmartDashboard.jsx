import React, { useEffect, useRef, useState } from "react";
import { chatApi } from "./chatapi";

const SmartDashboard = () => {
  const chatBoxRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("smartMessages");
    return saved
      ? JSON.parse(saved)
      : [
          {
            from: "bot",
            type: "text",
            text: "Hi Admin 👋, ask me anything about your store!",
          },
        ];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("smartMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "admin", type: "text", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await chatApi(input);

      const botMessage = {
        from: "bot",
        type: res.type || "text", // future-proof for other types
        text: res.data || "No response received.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          type: "text",
          text: "Something went wrong while fetching the response.",
        },
      ]);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox} ref={chatBoxRef}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              alignSelf: msg.from === "admin" ? "flex-end" : "flex-start",
              background: msg.from === "admin" ? "#dcf8c6" : "#f1f0f0",
            }}
          >
            {msg.type === "text" ? (
              <div
                dangerouslySetInnerHTML={{ __html: msg.text }}
                style={{ fontSize: "14px" }}
              />
            ) : (
              <span>{msg.text}</span> // fallback for future types
            )}
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
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  chatBox: {
    height: "100%",
    maxHeight: "calc(100% - 70px)",
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  message: {
    padding: "10px 15px",
    borderRadius: "20px",
    maxWidth: "75%",
    fontSize: "14px",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
  },
  inputArea: {
    height: "70px",
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
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
