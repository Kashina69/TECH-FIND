import { createSignal, For } from "solid-js";
import asuna from "../../assets/asuna.png";
type Message = {
  id: number;
  sender: string;
  content: string;
};

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-send"
  >
    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
    <path d="m21.854 2.147-10.94 10.939" />
  </svg>
);

export default function ChatPage() {
  const [message, setMessage] = createSignal("");
  const [messages, setMessages] = createSignal<Message[]>([
    { id: 1, sender: "Alice Johnson", content: "Hey there! How's it going?" },
    {
      id: 2,
      sender: "You",
      content: "Hi Alice! I'm doing well, thanks. How about you?",
    },
    {
      id: 3,
      sender: "Alice Johnson",
      content: "I'm great! Just working on some new projects.",
    },
    {
      id: 4,
      sender: "You",
      content: "That sounds exciting! What kind of projects?",
    },
  ]);

  const handleSendMessage = (e: Event) => {
    e.preventDefault();
    if (message().trim() === "") return;

    const newMessage: Message = {
      id: messages().length + 1,
      sender: "You",
      content: message().trim(),
    };
    setMessages([...messages(), newMessage]);
    setMessage("");
  };

  return (
    <div class="flex flex-col h-screen dark:bg-[#121212] bg-white">
      {/* Chat Header */}
      <div class="border-b border-gray-200 p-4 flex items-center justify-between mt-10">
        <div class="flex items-center space-x-4">
          <img class="w-10 h-10 rounded-full" src={asuna} alt="" srcset="" />
          <div>
            <h2 class="text-lg font-semibold">Asuna</h2>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div class="flex-1 p-4 overflow-y-auto">
        <For each={messages()}>
          {(msg) => (
            <div
              class={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                class={`max-w-[70%] ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                } rounded-lg p-3`}
              >
                <p class="text-sm">{msg.content}</p>
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Message Input */}
      <div class="border-t border-gray-200 p-4">
        <form class="flex space-x-4" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={message()}
            onInput={(e) => setMessage(e.currentTarget.value)}
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Message input"
          />
          <button
            type="submit"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Send message"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
