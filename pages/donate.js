import React from 'react'
import QuoteBlock from './components/quoteBlock';

const DonationPage = () => {
  return (
      <section className="bg-gradient-to-r from-accent to-orange-400 text-white text-center py-20 shadow-lg mt-24">
          <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold">Make a Difference</h1>
              <p className="text-2xl md:text-3xl mt-4">Your support can change lives!</p>
          </div>

          <main className="py-10 px-4 bg-white rounded-lg shadow-lg mt-10">
              {/* Why Your Donation Matters */}
              <div className="mb-10">
                  <h2 className="text-3xl text-orange-600 mb-4 border-b-2 border-gray-300 pb-2">Why Your Donation Matters</h2>
                  <p className="text-lg">
                      At Naa Adole Foundation, we empower adolescents and vulnerable communities through education and health initiatives. Your contributions help us provide vital resources and support programs that make a real impact.
                  </p>
              </div>

              {/* Choose Your Donation */}
              <div className="mb-10">
                  <h2 className="text-3xl text-orange-600 mb-4 border-b-2 border-gray-300 pb-2">Choose Your Donation</h2>
                  <form id="donation-form" className="flex flex-col gap-5">
                      <div className="flex flex-col">
                          <label htmlFor="donation-amount" className="font-bold text-lg">Donation Amount:</label>
                          <input
                              type="number"
                              id="donation-amount"
                              name="donation-amount"
                              className="border border-gray-300 rounded-lg p-3 text-lg"
                              placeholder="Enter amount"
                              required
                          />
                      </div>

                      <div className="flex flex-col">
                          <label htmlFor="donation-frequency" className="font-bold text-lg">Donation Frequency:</label>
                          <select id="donation-frequency" name="donation-frequency" className="border border-gray-300 rounded-lg p-3 text-lg">
                              <option value="one-time">One-Time</option>
                              <option value="monthly">Monthly</option>
                              <option value="yearly">Yearly</option>
                          </select>
                      </div>

                      <div className="flex flex-col">
                          <label htmlFor="donation-method" className="font-bold text-lg">Payment Method:</label>
                          <select id="donation-method" name="donation-method" className="border border-gray-300 rounded-lg p-3 text-lg">
                              <option value="credit-card">Credit Card</option>
                              <option value="paypal">PayPal</option>
                              <option value="bank-transfer">Bank Transfer</option>
                          </select>
                      </div>

                      <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg text-lg hover:scale-105 transform transition-transform">
                          Donate Now
                      </button>
                  </form>
              </div>

              {/* Contact Us */}
              <div>
                  <h2 className="text-3xl text-orange-600 mb-4 border-b-2 border-gray-300 pb-2">Contact Us</h2>
                  <p className="text-lg mb-4">If you have any questions regarding your donation, feel free to reach out:</p>
                  <form id="contact-form" className="flex flex-col gap-5">
                      <div className="flex flex-col">
                          <label htmlFor="contact-name" className="font-bold text-lg">Name:</label>
                          <input
                              type="text"
                              id="contact-name"
                              name="contact-name"
                              className="border border-gray-300 rounded-lg p-3 text-lg"
                              required
                          />
                      </div>

                      <div className="flex flex-col">
                          <label htmlFor="contact-email" className="font-bold text-lg">Email:</label>
                          <input
                              type="email"
                              id="contact-email"
                              name="contact-email"
                              className="border border-gray-300 rounded-lg p-3 text-lg"
                              required
                          />
                      </div>

                      <div className="flex flex-col">
                          <label htmlFor="contact-message" className="font-bold text-lg">Message:</label>
                          <textarea
                              id="contact-message"
                              name="contact-message"
                              className="border border-gray-300 rounded-lg p-3 text-lg"
                              rows="4"
                              required
                          ></textarea>
                      </div>

                      <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg text-lg hover:scale-105 transform transition-transform">
                          Send Message
                      </button>
                  </form>
              </div>
          </main>
      </section>
  );
};

export default DonationPage;