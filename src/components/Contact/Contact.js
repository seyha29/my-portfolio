import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { h2 } from 'framer-motion/client';


const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    emailjs
      .sendForm(
        'service_829d9io',
        'template_x2l178l',
        form.current,
        'M45CIlOONt20h0vTk'
      )
      .then(() => {
        setSendStatus('success');
        form.current.reset();
      }, (error) => {
        setSendStatus('error');
        console.error('Failed to send message:', error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.div 
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        
        <motion.div className="contact-info" variants={itemVariants}>
          <h2>Contact Me</h2>
          <p className="contact-subtitle">Have questions or want to work together? Drop me a message!</p>
          
          <div className="contact-detail">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>thanseyha2002@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <FaPhone className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+885 186-323-203</p>
            </div>
          </div>
          
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
        </motion.div>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail} 
          className="contact-form"
          variants={itemVariants}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Hello, I'd like to talk about..."
              required
            />
          </div>
          
          <button type="submit" disabled={isSending}>
            {isSending ? (
              'Sending...'
            ) : (
              <>
                <FaPaperPlane className="send-icon" /> Send Message
              </>
            )}
          </button>
          
          {sendStatus === 'success' && (
            <motion.div 
              className="status-message success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ✅ Message sent successfully!
            </motion.div>
          )}
          
          {sendStatus === 'error' && (
            <motion.div 
              className="status-message error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ❌ Failed to send message. Please try again.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;