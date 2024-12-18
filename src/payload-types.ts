/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
    admins: AdminAuthOperations;
  };
  collections: {
    users: User;
    bookings: Booking;
    'sales-pipeline': SalesPipeline;
    deals: Deal;
    contacts: Contact;
    messages: Message;
    activities: Activity;
    'interest-rate-history': InterestRateHistory;
    categories: Category;
    services: Service;
    pages: Page;
    reviews: Review;
    tags: Tag;
    media: Media;
    admins: Admin;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    bookings: BookingsSelect<false> | BookingsSelect<true>;
    'sales-pipeline': SalesPipelineSelect<false> | SalesPipelineSelect<true>;
    deals: DealsSelect<false> | DealsSelect<true>;
    contacts: ContactsSelect<false> | ContactsSelect<true>;
    messages: MessagesSelect<false> | MessagesSelect<true>;
    activities: ActivitiesSelect<false> | ActivitiesSelect<true>;
    'interest-rate-history': InterestRateHistorySelect<false> | InterestRateHistorySelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    reviews: ReviewsSelect<false> | ReviewsSelect<true>;
    tags: TagsSelect<false> | TagsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    admins: AdminsSelect<false> | AdminsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (Admin & {
        collection: 'admins';
      });
  jobs?: {
    tasks: unknown;
    workflows?: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface AdminAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role: 'client' | 'service-provider' | 'admin';
  featuredImage?: (string | null) | Media;
  featuredImageUrl?: string | null;
  fullName: string;
  phoneNumber?: string | null;
  address?: string | null;
  biography?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  bookings?: (string | Booking)[] | null;
  servicesOffered?: (string | Service)[] | null;
  reviews?: (string | Review)[] | null;
  slug: string;
  membership: 'basic-membership' | 'pro-membership' | 'premium-membership';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bookings".
 */
export interface Booking {
  id: string;
  client: string | User;
  serviceProvider: string | User;
  service: string | Service;
  bookingDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: string;
  serviceName: string;
  description?: string | null;
  category: string | Category;
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  categoryName?: string | null;
  description?: string | null;
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
  id: string;
  client: string | User;
  serviceProvider: string | User;
  rating: number;
  comment?: string | null;
  reviewDate: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sales-pipeline".
 */
export interface SalesPipeline {
  id: string;
  dealName: string;
  stage: 'prospecting' | 'qualification' | 'needs_analysis' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
  assignedTo: string | User;
  lead: string | Contact;
  expectedCloseDate: string;
  value: number;
  description?: string | null;
  notes?:
    | {
        note: string;
        date: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  position?: string | null;
  address?: {
    street?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    country?: string | null;
  };
  notes?: string | null;
  generatedBy?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "deals".
 */
export interface Deal {
  id: string;
  dealName: string;
  dealValue: number;
  dealStage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed_won' | 'closed_lost';
  lead: string | Contact;
  user: string | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Message {
  id: string;
  sender: string | User;
  receiver: string | User;
  subject: string;
  content: string;
  sentAt: string;
  read?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "activities".
 */
export interface Activity {
  id: string;
  activityType: 'call' | 'email' | 'meeting';
  dateTime: string;
  description: string;
  contact: string | Contact;
  deal: string | Deal;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "interest-rate-history".
 */
export interface InterestRateHistory {
  id: string;
  loanType: 'purchase' | 'refinance' | 'jumbo-purchase';
  creditScoreRange: '720' | '660-619';
  loanTerm: 'fifteenYear' | 'thirtyYear';
  interestRateData: {
    date: string;
    interestRate: number;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  author?: (string | null) | Admin;
  publishDate?: string | null;
  status: 'draft' | 'published' | 'archived';
  featuredImage?: (string | null) | Media;
  metaDescription?: string | null;
  tags?: (string | Tag)[] | null;
  parentPage?: (string | null) | Page;
  template?: ('default' | 'landing' | 'blog' | 'article') | null;
  redirectURL?: string | null;
  customCSS?: string | null;
  customJavaScript?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins".
 */
export interface Admin {
  id: string;
  role: 'admin';
  firstName?: string | null;
  lastName?: string | null;
  password: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  slug: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'bookings';
        value: string | Booking;
      } | null)
    | ({
        relationTo: 'sales-pipeline';
        value: string | SalesPipeline;
      } | null)
    | ({
        relationTo: 'deals';
        value: string | Deal;
      } | null)
    | ({
        relationTo: 'contacts';
        value: string | Contact;
      } | null)
    | ({
        relationTo: 'messages';
        value: string | Message;
      } | null)
    | ({
        relationTo: 'activities';
        value: string | Activity;
      } | null)
    | ({
        relationTo: 'interest-rate-history';
        value: string | InterestRateHistory;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'services';
        value: string | Service;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'reviews';
        value: string | Review;
      } | null)
    | ({
        relationTo: 'tags';
        value: string | Tag;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'admins';
        value: string | Admin;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'admins';
        value: string | Admin;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'admins';
        value: string | Admin;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  featuredImage?: T;
  featuredImageUrl?: T;
  fullName?: T;
  phoneNumber?: T;
  address?: T;
  biography?: T;
  bookings?: T;
  servicesOffered?: T;
  reviews?: T;
  slug?: T;
  membership?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bookings_select".
 */
export interface BookingsSelect<T extends boolean = true> {
  client?: T;
  serviceProvider?: T;
  service?: T;
  bookingDate?: T;
  status?: T;
  notes?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sales-pipeline_select".
 */
export interface SalesPipelineSelect<T extends boolean = true> {
  dealName?: T;
  stage?: T;
  assignedTo?: T;
  lead?: T;
  expectedCloseDate?: T;
  value?: T;
  description?: T;
  notes?:
    | T
    | {
        note?: T;
        date?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "deals_select".
 */
export interface DealsSelect<T extends boolean = true> {
  dealName?: T;
  dealValue?: T;
  dealStage?: T;
  lead?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts_select".
 */
export interface ContactsSelect<T extends boolean = true> {
  fullName?: T;
  email?: T;
  phone?: T;
  company?: T;
  position?: T;
  address?:
    | T
    | {
        street?: T;
        city?: T;
        state?: T;
        zipCode?: T;
        country?: T;
      };
  notes?: T;
  generatedBy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages_select".
 */
export interface MessagesSelect<T extends boolean = true> {
  sender?: T;
  receiver?: T;
  subject?: T;
  content?: T;
  sentAt?: T;
  read?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "activities_select".
 */
export interface ActivitiesSelect<T extends boolean = true> {
  activityType?: T;
  dateTime?: T;
  description?: T;
  contact?: T;
  deal?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "interest-rate-history_select".
 */
export interface InterestRateHistorySelect<T extends boolean = true> {
  loanType?: T;
  creditScoreRange?: T;
  loanTerm?: T;
  interestRateData?:
    | T
    | {
        date?: T;
        interestRate?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  categoryName?: T;
  description?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  serviceName?: T;
  description?: T;
  category?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  content?: T;
  author?: T;
  publishDate?: T;
  status?: T;
  featuredImage?: T;
  metaDescription?: T;
  tags?: T;
  parentPage?: T;
  template?: T;
  redirectURL?: T;
  customCSS?: T;
  customJavaScript?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews_select".
 */
export interface ReviewsSelect<T extends boolean = true> {
  client?: T;
  serviceProvider?: T;
  rating?: T;
  comment?: T;
  reviewDate?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags_select".
 */
export interface TagsSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "admins_select".
 */
export interface AdminsSelect<T extends boolean = true> {
  role?: T;
  firstName?: T;
  lastName?: T;
  password?: T;
  phoneNumber?: T;
  address?: T;
  slug?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}