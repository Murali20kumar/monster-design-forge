import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white min-h-screen">
      <header className="bg-[#1A5EFE] text-white py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/de51345b-424a-45d2-b9e1-4648f7d3a36a.png" 
              alt="Monster Design Factory Logo" 
              className="h-10"
            />
            <span className="font-bold">Monster Design Factory</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
          </nav>
        </div>
      </header>

      <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-[#0057ff]">Privacy policy for Monster Design Factory</h1>
        <p className="mb-4 italic">Effective Date: May 21, 2025</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Introduction</h2>
        <p className="mb-4">
          Monster Design Factory ("we," "our," or "us") is committed to protecting the privacy of our clients, visitors,
          and users. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information
          through our website and services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Full name, email address, phone number, and physical address</li>
          <li>Company or business name</li>
          <li>Project details, requirements, and associated files</li>
          <li>Payment and invoicing information (via Zoho Books)</li>
          <li>Communication history and feedback</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and manage our services</li>
          <li>Respond to inquiries and communicate project updates</li>
          <li>Process invoices and payments securely via Zoho Books</li>
          <li>Maintain internal records for accountability and project history</li>
          <li>Improve service quality based on feedback and usage trends</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Information Sharing and Disclosure</h2>
        <p className="mb-4">We do not sell or rent your personal data. We may share your information only with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">We take commercially reasonable steps to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies and Website Tracking</h2>
        <p className="mb-4">Our website may use cookies for basic analytics and functionality. These help us understand how visitors interact with our website and allow us to improve your experience.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="mb-4">You have the right to access, correct, or delete your personal information. You may also request a copy of the data we hold about you. To exercise these rights, please contact us using the details provided below.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Data Retention</h2>
        <p className="mb-4">We retain client and project data only as long as necessary to provide our services, comply with legal obligations, or resolve disputes.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Third-Party Links</h2>
        <p className="mb-4">Our website may contain links to other sites that are not operated by us. We are not responsible for the content or privacy practices of these sites and encourage you to review their privacy policies.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Children's Privacy</h2>
        <p className="mb-4">Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Updates to This Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or our data practices, contact:<br />
          Murali Kumar<br />
          Monster Design Factory<br />
          Email: <a href="mailto:muralitvl56@gmail.com" className="text-blue-600 underline">muralitvl56@gmail.com</a><br />
          Location: Tirunelveli, India
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
