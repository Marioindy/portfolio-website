import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { ContactHeader } from './components/ContactHeader';

export const metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch with me for projects, collaborations, or just to say hi',
};

// Force dynamic rendering since child components use Convex hooks
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <ContactHeader />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
