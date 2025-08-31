// middleware.ts  — TEMP: disable Clerk to get the site live

import { type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { AllLocales, AppConfig } from './utils/AppConfig';

const intlMiddleware = createMiddleware({
  locales: AllLocales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export default function middleware(request: NextRequest) {
  // Only run next-intl; no auth, no Clerk
  return intlMiddleware(request);
}

export const config = {
  // keep your matcher as-is
  matcher: ['/((?!.+\\.[\\w]+$|_next|monitoring).*)', '/', '/(api|trpc)(.*)'],
};
