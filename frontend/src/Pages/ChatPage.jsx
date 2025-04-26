import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput("");

    // محاكاة رد تلقائي
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "تم استلام رسالتك! هنرد عليك قريباً ❤️", fromUser: false },
      ]);
    }, 800);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold text-center mb-4">💬 المحادثة</h2>
      <div className="h-80 overflow-y-auto border rounded p-2 mb-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              msg.fromUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 rounded-lg max-w-xs ${
                msg.fromUser
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="اكتب رسالتك هنا..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          إرسال
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
