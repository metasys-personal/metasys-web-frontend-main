import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function PrivacyPolicy() {
  return (
    <>
      <NavbarNew />

      <main className="bg-black/90 text-white w-full min-h-screen px-4 md:px-8 lg:px-16 py-16 pt-30">
        {/* Breadcrumb */}
        <Breadcrumb
          overrideSegments={[
            { name: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />

        {/* Page Header */}
        <header className="max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Metasys Privacy Statement</h1>
          <p className="text-gray-400">Effective date: January 23, 2026</p>
        </header>

        {/* Page Content */}
        <article className="max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed">
          
          {/* Introduction */}
          <section>
            <p>
              This privacy statement explains how Metasys, Inc. and its affiliates (collectively, “Metasys,”
              “we,” “us,” or “our”) collect, use, disclose, and protect personal data in connection with our
              products, services, applications, platforms, tools, websites, and other interactions globally.
            </p>
            <p>
              Unless stated otherwise, this privacy statement applies to all externally facing Metasys
              applications, services, platforms, tools, websites, and other data processing activities where
              Metasys acts as a data controller (or local equivalent). This Privacy Statement is designed to
              give you a clear understanding of how we handle your personal information, including the rights
              you have in relation to its processing.
            </p>
          </section>

          {/* Sections */}
          {/* 1. How Metasys Protects Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. How does Metasys protect your personal data?</h2>
            <p>
              Metasys attaches great importance to your right to privacy and the protection of your personal data...
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Which categories of personal data do we collect and how do we process it?</li>
              <li>For which purposes and on which legal basis do we use your personal data?</li>
              <li>Will we share your personal data with third parties?</li>
              <li>How do we handle sensitive personal data?</li>
              <li>What technical and organizational measures ensure data security?</li>
              <li>Where will your personal data be processed?</li>
              <li>How long will your personal data be retained?</li>
              <li>What rights do you have with respect to your personal data?</li>
            </ul>
          </section>

          {/* 2. Categories of Personal Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Categories of personal data we collect</h2>
            <p>
              We collect personal data from employees, potential employees, clients, suppliers, business
              contacts, shareholders, and website users. Personal data includes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Personal details and identifiers:</strong> Name, pronoun, gender, date of birth, contact info</li>
              <li><strong>Account and authentication information:</strong> Usernames, passwords, tokens</li>
              <li><strong>Professional information:</strong> Job title, employer, role</li>
              <li><strong>Transactional information:</strong> Billing, payment, purchase history</li>
              <li><strong>Usage information:</strong> Device identifiers, IP address, browser, OS, usage data</li>
              <li><strong>Communication data:</strong> Feedback, surveys, support requests, AI-generated summaries</li>
              <li><strong>Marketing and engagement data:</strong> Preferences, event participation, website interactions</li>
            </ul>
          </section>

          {/* 3. How We Use Personal Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How we use personal data</h2>
            <p>Metasys uses personal data to operate and improve our services, communicate effectively, and ensure security.</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Communication and collaboration:</strong> Real-time collaboration, meeting summaries, suggested responses, accessibility.</li>
              <li><strong>AI-supported capabilities:</strong> AI technologies support communications without using personal data to train AI unless disclosed or anonymized.</li>
              <li><strong>Operational, service, and marketing purposes:</strong> Account management, transactions, analytics, personalization, security monitoring, marketing.</li>
              <li><strong>Content creation:</strong> Collecting relevant data for media projects, contributor information, and accommodations when necessary.</li>
            </ul>
          </section>

          {/* 4. Legal Bases for Processing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Legal bases for processing personal data</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Consent:</strong> Explicit consent when required by law. Withdrawable anytime.</li>
              <li><strong>Performance of a contract:</strong> Necessary for contractual obligations.</li>
              <li><strong>Legal obligations:</strong> Compliance with laws and regulations.</li>
              <li><strong>Legitimate interests:</strong> Improving services, security, analytics, fraud prevention.</li>
            </ul>
          </section>

          {/* 5. Sharing Personal Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Sharing personal data</h2>
            <p>Metasys may share personal data responsibly in specific circumstances:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Within Metasys affiliates</li>
              <li>Service providers</li>
              <li>Business partners</li>
              <li>Professional advisors</li>
              <li>Government authorities and regulators</li>
              <li>Business transactions (mergers, acquisitions)</li>
              <li>Public disclosures (with legal compliance)</li>
            </ul>
          </section>

          {/* 6. AI-supported communications */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. AI-supported communications</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>AI-assisted functionality: summaries, insights, real-time translation, assistive tech</li>
              <li>Recording & transcription only with consent</li>
              <li>Personal data not used to train AI unless anonymized</li>
              <li>Processing based on legitimate interest for proper communication and collaboration</li>
            </ul>
          </section>

          {/* Remaining sections */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. International data transfers</h2>
            <p>Personal data may be transferred internationally with safeguards (SCCs, binding corporate rules).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Data retention</h2>
            <p>Personal data is retained only as long as necessary and securely deleted afterward.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Your privacy rights</h2>
            <p>You may access, correct, delete, restrict, or port your data, and withdraw consent at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Cookies and similar technologies</h2>
            <p>We use cookies for functionality, analytics, personalization, and marketing. You can manage or disable them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Security</h2>
            <p>Technical and organizational measures protect data. Absolute security cannot be guaranteed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Children’s privacy</h2>
            <p>Services are not directed to children under 13. Data collected will be deleted promptly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Third-party services</h2>
            <p>We are not responsible for privacy practices of third-party integrations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Changes to this Privacy Statement</h2>
            <p>Updates will be posted here. Continued use indicates acceptance.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contacting Metasys</h2>
            <p>
              For questions or to exercise your rights, contact us through the communication channels in our services.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
