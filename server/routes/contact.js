// const express = require('express');
// const rateLimit = require('express-rate-limit');
// const validator = require('validator');
// const nodemailer = require('nodemailer');

// const router = express.Router();

// // Rate limit for contact form
// const contactLimiter = rateLimit({
//   windowMs: 60 * 1000, 
//   max: 3,
//   message: 'Too many submissions. Please try again later.'
// });

// router.post('/contact', contactLimiter, async (req, res) => {
//   const { name, email, message } = req.body;

//   // Validation
//   if (
//     !name || !email || !message ||
//     !validator.isEmail(email) ||
//     name.length > 100 || message.length > 1000
//   ) {
//     return res.status(400).json({ message: 'Invalid input' });
//   }

//   const sanitizedName = validator.escape(name);
//   const sanitizedEmail = validator.normalizeEmail(email);
//   const sanitizedMessage = validator.escape(message);


//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD
//     },
//     secure: true
//   });

//   const mailOptions = {
//     from: process.env.EMAIL,
//     to: process.env.EMAIL,
//     replyTo: sanitizedEmail,
//     subject: `New message from SeatCraft`,
//     text: `From: ${sanitizedName} \nEmail:<${sanitizedEmail}>\n\nMessage:\n${sanitizedMessage}`
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (err) {
//     console.error('Error sending email:', err);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// });

// module.exports = router;
