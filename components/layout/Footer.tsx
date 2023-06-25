import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Connect Column */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                className="h-24"
                src="https://tigers-tkd-omega.s3.amazonaws.com/logo.png"
                alt="logo"
              />
            </div>
            <p className="text-sm">
              Follow us on social media for the latest updates and news.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {/* Replace the following social media icons with your own */}
              <a
                href="https://www.facebook.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://www.twitter.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              52 Lincoln Highway, Suite 2B, Edison, NJ, 08820 <br />
              Email: tigerkalen@gmail.com <br />
              Phone: (732)-906-9077
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
