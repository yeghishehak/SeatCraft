import styles from "./contact.module.css";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import validator from 'validator';
import sanitizeHtml from 'sanitize-html';

gsap.registerPlugin(ScrollTrigger);

function Contact({ style }) {

  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false); // new state

    const sanitizeInput = (input) =>
    sanitizeHtml(input, {
      allowedTags: [],
      allowedAttributes: {},
    }).trim();

    const handleSubmit = async (e) => {
      e.preventDefault();

      setIsSubmitting(true);

      try {
        
        // Get and sanitize the email value first
        const emailInput = form.current.elements.user_email;
        const sanitizedEmail = sanitizeInput(emailInput.value);

        // Validate the email
        if (!validator.isEmail(sanitizedEmail)) {
          alert('Please enter a valid email address.');
          setIsSubmitting(false);
          return;
        }

        // Sanitize all form inputs
        const tempForm = form.current;
        for (let input of tempForm.elements) {
          if (input.name && input.value) {
            input.value = sanitizeInput(input.value);
          }
        }

        
        // Send the email
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        alert('Message sent!');
        form.current.reset();
        setIsSubmitting(false);

      } catch (error) {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
        setIsSubmitting(false);
      }
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

      const handleResize = () => {
          ScrollTrigger.refresh();
      }

      window.addEventListener("resize", handleResize)

      return () => {
          window.removeEventListener("resize", handleResize)
      }
  }, [])

  return (
    <div ref={contactRef} className={styles.contact} style={style}>
      <div className={styles.contactForm}>
        <h1 className={styles.contactFormTitle}>Contact Us</h1>
        <form ref={form} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameDiv}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="user_name"
              required
              disabled={isSubmitting} // disable inputs optionally during submit
            />
          </div>

          <div className={styles.emailDiv}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="user_email"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.messageDiv}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              id="message"
              name="user_message"
              required
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
