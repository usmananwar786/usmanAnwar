import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "What's your tech stack?",
  "Are you available for hire?",
  "Show me your projects",
  "How can I contact you?",
];

// Internal knowledge base — answers without any backend
const getReply = (input: string): string => {
  const q = input.toLowerCase();

  if (/(hi|hello|hey|salam|assalam)/i.test(q))
    return "Hey there! 👋 I'm Usman's assistant. Ask me about his skills, projects, experience or how to get in touch!";

  if (/(stack|tech|skill|technolog|use|know)/.test(q))
    return "Usman is a MERN Stack Developer 💻. Frontend: React, JavaScript, HTML5, CSS3, Bootstrap, Tailwind. Backend: Node.js, Express, REST APIs. Databases: MongoDB & MySQL. He also works with WordPress.";

  if (/(experience|year|how long|background)/.test(q))
    return "Usman has 2+ years of professional experience. Most recently at House of Perfection (Feb 2025 – Aug 2025) where he built a CRM platform with React, Node.js & Express.";

  if (/(project|work|portfolio|build|made)/.test(q))
    return "His featured project is the Travexa CRM (live: https://travexa.cloud/) — a full CRM with user management, data handling & responsive UI. Check the Projects section above for more!";

  if (/(hire|available|job|freelance|work with)/.test(q))
    return "Yes! ✅ Usman is available for freelance projects and full-time roles. Drop a message in the Contact section or email usmanali22181@gmail.com.";

  if (/(contact|email|reach|phone|call|whatsapp)/.test(q))
    return "📧 usmanali22181@gmail.com\n📱 +92 371 0571295\n📍 Johar Town, Lahore\n💼 LinkedIn: usman-anwar\n🐙 GitHub: usmananwar786";

  if (/(price|rate|cost|charge|budget)/.test(q))
    return "Pricing depends on project scope & timeline. Send a quick brief via the Contact form and Usman will reply within 24 hours with a tailored quote.";

  if (/(location|where|city|country|based)/.test(q))
    return "Usman is based in Johar Town, Lahore 🇵🇰 — and works with clients globally (remote-friendly).";

  if (/(language|urdu|english|punjabi)/.test(q))
    return "Usman speaks Urdu (native), Punjabi (native) and English (basic but improving every day).";

  if (/(education|study|college|degree|qualif)/.test(q))
    return "ICS (Computer Science) from Commerce College, Kamalia (2022 – 2024), plus self-taught full-stack development.";

  if (/(wordpress|cms)/.test(q))
    return "Yes! Usman has solid hands-on experience with WordPress — custom themes, plugins, and full site builds for businesses.";

  if (/(thank|thx|cool|nice|awesome|great)/.test(q))
    return "Glad I could help! 😊 Anything else you'd like to know about Usman?";

  return "Good question! I can tell you about Usman's skills, projects, experience, availability, or how to contact him. Try one of the suggestions below 👇";
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm Usman's portfolio assistant. Ask me anything about his work, skills or how to reach him!",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getReply(t) }]);
      setTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Open chat"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] glass-card rounded-3xl flex flex-col overflow-hidden animate-fade-up shadow-elegant">
          {/* Header */}
          <div className="px-5 py-4 border-b border-border bg-gradient-primary/10 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-primary-foreground">
              U
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-background" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold text-sm flex items-center gap-1.5">
                Usman's Assistant <Sparkles size={12} className="text-primary" />
              </div>
              <div className="text-xs text-muted-foreground">Typically replies instantly</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-gradient-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {messages.length <= 1 && (
              <div className="pt-2 space-y-2">
                <p className="text-xs text-muted-foreground font-mono">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="px-3 py-1.5 rounded-full text-xs bg-muted border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 rounded-full bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shrink-0"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
