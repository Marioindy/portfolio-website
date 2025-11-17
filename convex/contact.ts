import { mutation, query, action } from './_generated/server';
import { v } from 'convex/values';
import { api } from './_generated/api';

/**
 * Submit a contact form
 */
export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('contactSubmissions', {
      ...args,
      status: 'new',
    });
  },
});

/**
 * Get all contact submissions
 */
export const getContactSubmissions = query({
  handler: async (ctx) => {
    return await ctx.db.query('contactSubmissions').order('desc').collect();
  },
});

/**
 * Get contact submissions by status
 */
export const getSubmissionsByStatus = query({
  args: {
    status: v.union(v.literal('new'), v.literal('read'), v.literal('replied')),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('contactSubmissions')
      .withIndex('by_status', (q) => q.eq('status', args.status))
      .order('desc')
      .collect();
  },
});

/**
 * Update submission status
 */
export const updateSubmissionStatus = mutation({
  args: {
    id: v.id('contactSubmissions'),
    status: v.union(v.literal('new'), v.literal('read'), v.literal('replied')),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { status: args.status });
  },
});

/**
 * Send email notification action
 * This action can be integrated with email services like SendGrid, Resend, or Nodemailer
 */
export const sendEmailNotification = action({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // TODO: Integrate with your email service provider
    // Example implementations:

    // Option 1: SendGrid
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'your-email@example.com',
    //   from: 'noreply@example.com',
    //   subject: `New Contact Form: ${args.subject}`,
    //   text: `Name: ${args.name}\nEmail: ${args.email}\n\nMessage:\n${args.message}`,
    //   html: `<p><strong>Name:</strong> ${args.name}</p>
    //          <p><strong>Email:</strong> ${args.email}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${args.message}</p>`,
    // });

    // Option 2: Resend
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@example.com',
    //   to: 'your-email@example.com',
    //   subject: `New Contact Form: ${args.subject}`,
    //   html: `<p><strong>Name:</strong> ${args.name}</p>
    //          <p><strong>Email:</strong> ${args.email}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${args.message}</p>`,
    // });

    // For now, just log the notification
    console.log('Email notification would be sent:', {
      to: 'admin@example.com',
      subject: `New Contact Form: ${args.subject}`,
      from: args.email,
      name: args.name,
    });

    return { success: true };
  },
});

/**
 * Submit contact form with email notification
 * This action submits the form and sends an email notification
 */
export const submitContactFormWithNotification = action({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // First, store the submission in the database
    const submissionId = await ctx.runMutation(api.contact.submitContactForm, {
      name: args.name,
      email: args.email,
      subject: args.subject,
      message: args.message,
    });

    // Then, send email notification
    try {
      await ctx.runAction(api.contact.sendEmailNotification, {
        name: args.name,
        email: args.email,
        subject: args.subject,
        message: args.message,
      });
    } catch (error) {
      console.error('Failed to send email notification:', error);
      // Don't fail the submission if email fails
    }

    return submissionId;
  },
});
