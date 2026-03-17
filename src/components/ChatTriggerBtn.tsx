"use client";

export function ChatTriggerBtn() {
  return (
    <button
      className="hero-nav-btn"
      onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
      style={{ textDecoration: "none", background: "none", cursor: "pointer" }}
    >
      Chat with AI
    </button>
  );
}
