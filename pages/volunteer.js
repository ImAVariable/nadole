import React from 'react'
import QuoteBlock  from './components/quoteBlock';

const Volunteer = () => {
  return (
    <>
    <section className='py-16 dark:bg-slate-800'>
    <QuoteBlock />
    </section>
          <section>
          <div>
                {/* Header Section */}
                <section className="head bg-gradient-to-r from-header to-main-color text-white text-center py-16 shadow-lg mt-24">
                    <h1 className="header-title text-4xl animate-slideIn">Volunteer with Us</h1>
                    <p className="header-subtitle text-3xl">Your Contribution Matters!</p>
                </section>

                {/* Main Content */}
                <main className="main-content p-10 bg-white rounded-lg shadow-md mx-auto my-10">
                    {/* Introduction Section */}
                    <section id="introduction" className="volunteer-intro mb-10">
                        <div className="container">
                            <h2 className="section-title text-3.5xl mb-5">Welcome to Naa Adole Foundation</h2>
                            <p className="intro-text text-xl">Join us in empowering adolescents and vulnerable communities through education, health initiatives, and advocacy.</p>
                        </div>
                    </section>

                    {/* Why Volunteer Section */}
                    <section id="why-volunteer" className="volunteer-benefits mb-10">
                        <div className="volunteer-container max-w-4xl mx-auto">
                            <h2 className="section-title text-3.5xl mb-5">Why Volunteer?</h2>
                            <ul className="benefits-list list-disc list-inside text-lg">
                                <li><strong>Make a Difference:</strong> Contribute to impactful programs that improve health and education for young people.</li>
                                <li><strong>Gain Experience:</strong> Develop valuable skills in project management and community outreach.</li>
                                <li><strong>Connect with Like-minded Individuals:</strong> Join a network committed to social change.</li>
                                <li><strong>Be Inspired:</strong> Witness the positive impact of your contributions.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Opportunities Section */}
                    <section id="opportunities" className="volunteer-opportunities mb-10">
                        <div className="container max-w-4xl mx-auto">
                            <h2 className="section-title text-3.5xl mb-5">How You Can Help</h2>
                            <p className="opportunities-text text-lg">We welcome volunteers in various capacities, including:</p>
                            <ul className="opportunities-list list-disc list-inside text-lg">
                                <li className="opportunity-item">Community Outreach</li>
                                <li className="opportunity-item">Educational Support</li>
                                <li className="opportunity-item">Event Coordination</li>
                                <li className="opportunity-item">Administrative Support</li>
                                <li className="opportunity-item">Mentorship</li>
                            </ul>
                        </div>
                    </section>

                    {/* Getting Involved Section */}
                    <section id="getting-involved" className="volunteer-involvement mb-10 bg-gradient-to-r from-header to-main-color p-10 rounded-lg shadow-md">
                        <div className="container max-w-4xl mx-auto text-white">
                            <h2 className="section-title text-3.5xl mb-5">How to Get Involved</h2>
                            <ol className="involvement-steps list-decimal list-inside text-lg">
                                <li>Complete the <a href="#application-form" className="link text-blue-300 underline">Volunteer Application Form</a>.</li>
                                <li>Attend an Orientation Session.</li>
                                <li>Get Started!</li>
                            </ol>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="volunteer-contact mb-10">
                        <div className="container max-w-4xl mx-auto">
                            <h2 className="section-title text-3.5xl mb-5">Contact Us</h2>
                            <p className="contact-text text-lg">If you have any questions, please reach out to us:</p>
                            <form id="contact-form" className="contact-form">
                                <div className="form-group mb-4">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input type="text" id="name" name="name" className="form-input border rounded w-full p-2" required />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" name="email" className="form-input border rounded w-full p-2" required />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="message" className="form-label">Message:</label>
                                    <textarea id="message" name="message" className="form-textarea border rounded w-full p-2" rows="4" required></textarea>
                                </div>
                                <button type="submit" className="submit-button bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Send Message</button>
                            </form>
                        </div>
                    </section>

                    {/* Volunteer Stories Section */}
                    <section id="volunteer-stories" className="volunteer-stories mb-10">
                        <div className="container max-w-4xl mx-auto">
                            <h2 className="section-title text-3.5xl mb-5">Volunteer Stories</h2>
                            <p className="stories-text text-lg">Read inspiring stories from our volunteers:</p>
                            <ul className="stories-list list-disc list-inside text-lg">
                                <li className="story-item"><a href="#story1" className="link text-blue-500 hover:underline">Emma's Journey with Naa Adole</a></li>
                                <li className="story-item"><a href="#story2" className="link text-blue-500 hover:underline">John's Experience in Community Outreach</a></li>
                                <li className="story-item"><a href="#story3" className="link text-blue-500 hover:underline">Sophia's Impact on Adolescent Health</a></li>
                            </ul>
                        </div>
                    </section>

                    {/* Resources Section */}
                    <section id="resources" className="volunteer-resources mb-10">
                        <div className="container max-w-4xl mx-auto">
                            <h2 className="section-title text-3.5xl mb-5">Additional Resources</h2>
                            <p className="resources-text text-lg">Find useful resources to guide your volunteering experience:</p>
                            <ul className="resources-list list-disc list-inside text-lg">
                                <li className="resource-item"><a href="#guide" className="link text-blue-500 hover:underline">Volunteer Guide</a></li>
                                <li className="resource-item"><a href="#training" className="link text-blue-500 hover:underline">Training Materials</a></li>
                                <li className="resource-item"><a href="#faq" className="link text-blue-500 hover:underline">Frequently Asked Questions</a></li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
          </section>
        
    </>
  )
}
export default Volunteer

