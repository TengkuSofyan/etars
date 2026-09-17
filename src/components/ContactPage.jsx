import React from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
function ContactPage() {
  return (
    <div className="px-4 md:px-6 lg:px-8 text-primary max-w-[1280px] mx-auto ">
      <h1 className="text-6xl font-medium gradient-text mt-12">
        Contact Information
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* Email */}
        <div className="bg-gradient-to-tr from-primary/50 to-secondary/50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4">
            <Mail size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900">
            Email Us
          </h3>
          <p className="text-slate-900 font-medium mb-2">hello@company.com</p>
          <p className="text-slate-900 font-medium">support@company.com</p>
        </div>

        {/* Phone */}
        <div className="bg-gradient-to-tr from-primary/50 to-secondary/50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 text-white rounded-full mb-4">
            <Phone size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900">Call Us</h3>
          <p className="text-slate-900 font-medium mb-2">+1 (555) 123-4567</p>
          <p className="text-slate-900 font-medium">Mon-Fri, 9am-6pm EST</p>
        </div>

        {/* Location */}
        <div className="bg-gradient-to-tr from-primary/50 to-secondary/50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500 text-white rounded-full mb-4">
            <MapPin size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-900">
            Visit Us
          </h3>
          <p className="text-slate-900 font-medium mb-2">123 Business Street</p>
          <p className="text-slate-900 font-medium">New York, NY 10001</p>
        </div>
      </div>

      {/* Office Hours */}
      <div className="mt-12 bg-slate-100 p-6 rounded-xl">
        <div className="flex items-center justify-center gap-2 text-slate-700">
          <Clock size={20} />
          <span className="font-semibold">Office Hours:</span>
          <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
        </div>
      </div>

      {/* FAQ/Additional Info Section */}
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                How quickly will I receive a response?
              </h3>
              <p className="text-slate-600">
                We typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                What information should I include in my message?
              </h3>
              <p className="text-slate-600">
                Please provide as much detail as possible about your inquiry,
                including any relevant context, dates, or specific questions you
                have.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                Do you offer in-person consultations?
              </h3>
              <p className="text-slate-600">
                Yes! We offer both virtual and in-person consultations. Please
                mention your preference in the message form above.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                Can I schedule a call directly?
              </h3>
              <p className="text-slate-600">
                Absolutely! You can call us directly during office hours, or
                request a callback time in your message and we'll reach out to
                schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
