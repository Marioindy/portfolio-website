/* eslint-disable */
/**
 * Generated data model types.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { GenericId } from "convex/values";

/**
 * The names of all of your Convex tables.
 */
export type TableNames = "projects";

/**
 * The type of a document stored in Convex.
 */
export type Doc<TableName extends TableNames> = TableName extends "projects"
  ? {
      _id: GenericId<"projects">;
      _creationTime: number;
      title: string;
      description: string;
      imageUrl?: string;
      tags: string[];
      githubUrl?: string;
      liveUrl?: string;
      featured: boolean;
      order: number;
      createdAt: number;
    }
  : never;

export type Id<TableName extends TableNames> = GenericId<TableName>;
