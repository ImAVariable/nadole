/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import react from 'react'
import clip from "text-clipper";

const NewsEvents = () => {
  // Initialize ScrollReveal when component mounts
  React.useEffect(() => {
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.main-title', { delay: 300, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.section-title', { delay: 300, origin: 'right', distance: '50px' });
    ScrollReveal().reveal('.content', { delay: 400, origin: 'bottom', distance: '20px' });
    ScrollReveal().reveal('.media-icons', { delay: 500, origin: 'bottom', distance: '30px' });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center py-20 bg-gray-100 mt-36">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-semibold text-gray-800 tracking-wide shadow-lg uppercase">
          Welcome to Our News & Events Page
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
          <div className="w-full lg:w-1/2 p-4">
            <img
              src="images/oldman.jpg"
              alt="Old man smiling in a rural area"
              className="rounded-lg shadow-lg transform transition hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 bg-white backdrop-blur-lg bg-opacity-30 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">News, Views, and Upcoming Events</h3>
            <p className="text-lg text-gray-600 mb-6">
              Naa-Adole Foundation is an NGO striving to end extreme poverty, advance human rights,
              and ensure dignity for all people. We serve as a convener, thought leader, and voice.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
              Read More
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-6">
          <a href="#" aria-label="Facebook" className="text-3xl text-teal-600 hover:text-blue-500 transition">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-3xl text-teal-600 hover:text-pink-500 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-3xl text-teal-600 hover:text-blue-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="YouTube" className="text-3xl text-teal-600 hover:text-red-500 transition">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="w-full max-w-5xl mt-20">
        <h2 className="text-4xl text-center font-semibold text-gray-800 mb-10">Latest News</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 p-4">
            <img src="images/pro.jpg" alt="Protest Image" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-4">We Need to Act Now</h4>
            <p className="text-lg text-gray-600 mb-6">
              It is important that we work towards a more sustainable world. The planet is not a machine, and if we continue with
              our wasteful habits, there will be dire consequences for future generations.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Health Section */}
      <div className="w-full max-w-5xl mt-20">
        <h3 className="text-4xl text-center font-semibold text-gray-800 mb-10">Ensure Healthy Lives for All</h3>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 p-4">
            <ul className="space-y-4">
              <li className="text-lg text-blue-600 flex items-center">
                <i className="fab fa-facebook mr-3"></i>
                <a href="#">Facebook</a>
              </li>
              <li className="text-lg text-blue-600 flex items-center">
                <i className="fab fa-instagram mr-3"></i>
                <a href="#">Instagram</a>
              </li>
              <li className="text-lg text-blue-600 flex items-center">
                <i className="fab fa-twitter mr-3"></i>
                <a href="#">Twitter</a>
              </li>
              <li className="text-lg text-blue-600 flex items-center">
                <i className="fab fa-youtube mr-3"></i>
                <a href="#">YouTube</a>
              </li>
              <li className="text-lg text-blue-600 flex items-center">
                <i className="fab fa-linkedin mr-3"></i>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img src="images/mother.jpg" alt="Mother with child" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>

);
};

export default NewsEvents;