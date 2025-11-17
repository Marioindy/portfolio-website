'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { isValidEmail } from '@/utils/convex-helpers';
import { useFadeIn } from '@/hooks/useAnimation';
import gsap from 'gsap';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const submitContactForm = useMutation(api.contact.submitContactForm);
  const formRef = useFadeIn<HTMLDivElement>({ delay: 0.2 });
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Animate success/error messages
  useEffect(() => {
    if (submitSuccess && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [submitSuccess]);

  useEffect(() => {
    if (submitError && errorRef.current) {
      gsap.fromTo(
        errorRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, [submitError]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must not exceed 100 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., name@example.com)';
    } else if (formData.email.length > 255) {
      newErrors.email = 'Email must not exceed 255 characters';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    } else if (formData.subject.trim().length > 200) {
      newErrors.subject = 'Subject must not exceed 200 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 5000) {
      newErrors.message = 'Message must not exceed 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        'Failed to send message. Please try again or contact me directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div ref={formRef}>
      <Card variant="elevated" padding="lg">
        <CardHeader>
          <CardTitle>Send Me a Message</CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you as soon as possible
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submitSuccess && (
            <div
              ref={successRef}
              className="mb-6 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-600 dark:text-green-400"
            >
              <p className="font-medium">Message sent successfully!</p>
              <p className="text-sm">Thank you for reaching out. I'll respond within 24-48 hours.</p>
            </div>
          )}

          {submitError && (
            <div
              ref={errorRef}
              className="mb-6 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-600 dark:text-red-400"
            >
              <p className="font-medium">Error sending message</p>
              <p className="text-sm">{submitError}</p>
            </div>
          )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              name="name"
              label="Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
          </div>

          <Input
            name="subject"
            label="Subject"
            placeholder="Project Inquiry"
            value={formData.subject}
            onChange={handleChange}
            error={errors.subject}
            required
          />

          <div>
            <Textarea
              name="message"
              label="Message"
              placeholder="Tell me about your project or question..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              rows={6}
              required
            />
            <p className="mt-1 text-xs text-muted-foreground text-right">
              {formData.message.length} / 5000 characters
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  );
};
