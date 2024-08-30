import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ko"];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });