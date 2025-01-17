
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing ={
  // A list of all locales that are supported
  locales: ['en', 'ko'],
 
  // Used when no locale matches
  defaultLocale: 'en'
};
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);