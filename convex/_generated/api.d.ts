/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as blog from "../blog.js";
import type * as contact from "../contact.js";
import type * as gallery from "../gallery.js";
import type * as neonProjects from "../neonProjects.js";
import type * as photography from "../photography.js";
import type * as projects from "../projects.js";
import type * as seedBlog from "../seedBlog.js";
import type * as seedPhotography from "../seedPhotography.js";
import type * as skills from "../skills.js";
import type * as testing from "../testing.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  blog: typeof blog;
  contact: typeof contact;
  gallery: typeof gallery;
  neonProjects: typeof neonProjects;
  photography: typeof photography;
  projects: typeof projects;
  seedBlog: typeof seedBlog;
  seedPhotography: typeof seedPhotography;
  skills: typeof skills;
  testing: typeof testing;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
