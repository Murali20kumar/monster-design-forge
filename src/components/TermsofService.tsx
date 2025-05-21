"use client"; // Only if you're placing this in App Router

import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen px-6 py-16 md:px-24 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-[#0057ff]">Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-2">Effective Date: 20 May 2025</p>
      <p className="text-sm text-gray-600 mb-6">Business Name: Monster Design Factory<br />Owner: Murali Kumar</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            These Terms & Conditions govern all services provided by Monster Design Factory,
            including but not limited to UI/UX design, logo and branding, web and mobile app development,
            invoicing support, and social media graphics. By hiring or working with Monster Design Factory,
            the client agrees to these terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Scope of Services</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Mobile app UI design (React Native)</li>
            <li>Website design and full-stack development</li>
            <li>Logo design & branding</li>
            <li>Social media poster design</li>
            <li>Invoice setup and generation (Zoho Books)</li>
            <li>Freelance creative and development work as per the agreement</li>
          </ul>
          <p className="mt-2">
            All deliverables and timelines will be defined in project-specific proposals or contracts.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Payment Terms</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Payment terms will be outlined in the service agreement or invoice.</li>
            <li>A minimum 50% advance is typically required for projects above ₹10,000.</li>
            <li>
              Final deliverables (including source files, exports, and editable assets) will only be
              handed over after full payment is received.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Ownership of Work</h2>
          <p>
            Monster Design Factory retains ownership of all work — including drafts, designs, code, and source
            files — until full and final payment has been made.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Legal action may be pursued under copyright infringement law.</li>
            <li>The client will be liable for damages and legal expenses.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Revisions & Edits</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Most services include up to 2 rounds of revision, unless otherwise stated.</li>
            <li>Additional revisions are subject to extra charges as per the project scope.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6. Refund Policy</h2>
          <ul className="list-disc list-inside ml-4">
            <li>No refunds are issued after project work has begun.</li>
            <li>
              If the project is terminated midway by the client, payment for completed portions is still due.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">7. Confidentiality</h2>
          <p>
            Both parties agree to maintain confidentiality of all sensitive project-related information
            unless written consent is provided.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Any indirect or consequential damages</li>
            <li>Third-party delays (hosting, payment providers, etc.)</li>
            <li>Business loss resulting from client-side issues or missed deadlines</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">9. Jurisdiction</h2>
          <p>
            These terms are governed by the laws of India. Any disputes will be subject to jurisdiction
            in Chennai civil courts.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">10. Amendments</h2>
          <p>
            These terms may be updated at any time. Clients will be notified of major updates if they
            affect existing agreements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Important Note</h2>
          <p>
            All design assets, code files, and final deliverables remain the sole property of Monster Design
            Factory until the client clears full payment. Any unauthorized use, duplication, or distribution
            of unpaid work will be treated as a breach of agreement and may result in legal action including
            copyright claims and formal recovery processes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
