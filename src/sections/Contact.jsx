import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import CartoonEngineer from "../components/CartoonEngineer";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const form = useRef();
  const lastSent = useRef(0);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSent.current < 10000) {
      toast.error("Please wait a few seconds 🚫");
      return;
    }

    setLoading(true);
    setSending(true); 

    emailjs
      .sendForm(
        "service_c1m36tq",
        "template_5xbrwr3",
        form.current,
        "sC9G5S5eV4mrgxPYh"
      )
      .then(() => {
        toast.success("Message sent 📤");
        setLoading(false);
        form.current.reset();
        lastSent.current = Date.now();
        setTimeout(() => setSending(false), 2000); 
      })
      .catch(() => {
        toast.error("Something went wrong ❌");
        setLoading(false);
        setSending(false);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      {/*  Title */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Get In
          <span className="ml-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Let’s build something amazing together 
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* شخصية */}
        <CartoonEngineer sending={sending} />

        {/*  FORM */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="backdrop-blur-xl bg-white/30 dark:bg-white/10 p-8 rounded-2xl shadow-2xl border border-white/20 space-y-5 w-full max-w-md"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg flex justify-center items-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </div>

      {/*  Social Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:yara.mas484@gmail.com"
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur p-5 rounded-xl shadow"
        >
          <MdEmail className="text-3xl mx-auto mb-2 text-blue-500" />
          <span className="text-sm">Email</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/yaradawa988"
          target="_blank"
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur p-5 rounded-xl shadow"
        >
          <FaGithub className="text-3xl mx-auto mb-2" />
          <span className="text-sm">GitHub</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://linkedin.com/in/yara-dawa-9090ab296"
          target="_blank"
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur p-5 rounded-xl shadow"
        >
          <FaLinkedin className="text-3xl mx-auto mb-2 text-blue-500" />
          <span className="text-sm">LinkedIn</span>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/963997737851"
          target="_blank"
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur p-5 rounded-xl shadow"
        >
          <FaWhatsapp className="text-3xl mx-auto mb-2 text-green-500" />
          <span className="text-sm">WhatsApp</span>
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;