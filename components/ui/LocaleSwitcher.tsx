// import { useLocale, useTranslations } from 'next-intl';
// import SelectLanguage from './selectLanguage';

// export default function LocaleSwitcher() {
//   const t = useTranslations("LocaleSwitcher");
//   const locale = useLocale();
//   const locales = ["en", "ko"] as const;

//   return (
//     <SelectLanguage defaultValue={locale} label={t("label")}>
//       {locales.map((cur) => (
//         <option key={cur} value={cur}>
//           {t("locale", { locale: cur })}
//         </option>
//       ))}
//     </SelectLanguage>
//   );
// }
