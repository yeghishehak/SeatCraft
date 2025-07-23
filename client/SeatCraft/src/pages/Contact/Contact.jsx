import styles from "./contact.module.css";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact({ style }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // new state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // disable button immediately

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }

    // re-enable button after response
    setIsSubmitting(false);
  };

  const contactRef = useRef(null)

  useEffect(() => {
    const contact = contactRef.current.children;

    Array.from(contact).forEach((contactParts) => {
      gsap.fromTo (
        contactParts,
        { opacity: 0, filter: "blur(10px)"},
        {
          opacity: 1,
          duration: 0.7,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: contactParts,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  return (
    <div ref={contactRef} className={styles.contact} style={style}>
      <div className={styles.contactForm}>
        <h1 className={styles.contactFormTitle}>Contact Us</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameDiv}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting} // disable inputs optionally during submit
            />
          </div>

          <div className={styles.emailDiv}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.messageDiv}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting} // disable button on submit
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <h1 className={styles.contactInfoTitle}>Let&rsquo;s Talk</h1>
        <p className={styles.contactInfoText}>
          If you&rsquo;re interested in placing an order, starting a collaboration,
          or simply have a question &mdash; our form is the easiest way to reach us.
          Just fill out the required fields and let us know how we can help.
          We&rsquo;ll get back to you as soon as possible with a friendly and helpful response.
          This form is designed to keep communication simple and fast.
          Whether you&rsquo;re a new customer or a returning partner, we&rsquo;re here to listen.
          Don&rsquo;t hesitate &mdash; send us a message and let&rsquo;s connect <img className={styles.envelopeIcon} src="/envelope.png" />.
        </p>
      </div>
    </div>
  );
}

export default Contact;
