import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

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
