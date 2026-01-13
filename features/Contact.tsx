'use client';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from "sonner";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast('Email sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast('Failed to send email');
    }
  };

  return (
    <div>
      {/* Contact */}
      <section id="contact" className="bg-black text-white py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="text-gray-400 max-w-md">
              Ready to start your project or have a question? Reach out to us, we’d love to talk.
            </p>

            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p className="font-medium">+92 313 2404456</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">fazalamna666@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-black">
              Send us a message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid gap-4"
            >
              <input
                name="subject"
                className="p-3 rounded-md border text-black"
                placeholder="Subject"
                required
              />
              <input
                name="from_name"
                className="p-3 rounded-md border text-black"
                placeholder="Name"
                required
              />

              <input
                name="from_email"
                type="email"
                className="p-3 rounded-md border text-black"
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                className="p-3 rounded-md border text-black"
                placeholder="Project details"
                required
              />

              <button
                type="submit"
                className="bg-[#C9A24D] text-black py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 bg-[#F7F1E8]">
        © {new Date().getFullYear()} N.I.Webs. All rights reserved.
      </footer>
    </div>
  );
}
