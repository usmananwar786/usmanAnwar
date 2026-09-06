import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "usmanali22181@gmail.com", href: "mailto:usmanali22181@gmail.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+92 371 0571295", href: "https://wa.me/923710571295" },
  { icon: MapPin, label: "Location", value: "Johar Town, Lahore", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "usman-anwar", href: "https://www.linkedin.com/in/usman-anwar-0a4952326" },
  { icon: Github, label: "GitHub", value: "usmananwar786", href: "https://github.com/usmananwar786/" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:usmanali22181@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email client...");
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="container">
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-mono text-sm text-primary mb-3"
          >
            // Get in touch
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s build something <span className="text-gradient">exceptional.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Currently available for select freelance projects, full time engineering roles, and strategic collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info - Staggered Slide In */}
          <div className="lg:col-span-2 space-y-3">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 10 }} // Smooth slide on hover
                className="flex items-center gap-4 glass-card rounded-2xl p-4 hover-lift group"
              >
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-gradient-primary/20 flex items-center justify-center group-hover:bg-gradient-primary transition-colors"
                >
                  <c.icon size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form Animation */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass-card rounded-2xl p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div whileTap={{ scale: 0.98 }}>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">Your Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="John Doe"
                />
              </motion.div>
              <motion.div whileTap={{ scale: 0.98 }}>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>
            <motion.div whileTap={{ scale: 0.99 }}>
              <label className="text-xs font-mono text-muted-foreground mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>
            
            {/* Submit Button Animation */}
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-elegant transition-all disabled:opacity-50"
            >
              <motion.div
                animate={sending ? { x: 50, opacity: 0 } : { x: 0, opacity: 1 }}
              >
                <Send size={16} />
              </motion.div>
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
