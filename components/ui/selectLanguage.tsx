import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SelectLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState('en');

  useEffect(() => {
    const currentLocale = pathname.split('/')[1];
    setSelectedLocale(currentLocale);
  }, [pathname]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    setSelectedLocale(newLocale);


    const newPathname = pathname.replace(`/${selectedLocale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <select
      className="w-full bg-[#5a4e6a] text-white p-2 rounded-md"
      onChange={handleLanguageChange}
      value={selectedLocale}
    >
      <option value="en">English</option>
      <option value="ko">한국인</option>
    </select>
  );
};

export default SelectLanguage;
// "use client";
// import { useParams, usePathname } from "next/navigation";
// import { useRouter } from "next/router";
// import { ChangeEvent, ReactNode, startTransition, useState, useTransition } from "react";


// type Props = {
//   children: ReactNode;
//   defaultValue: string;
//   label: string;
// }
// export default function SelectLanguage({
//   children,
//   defaultValue,
//   label
// }: Props) {
//   const router = useRouter();
//   const [isPending, setIsPending] = useTransition()
//   const pathname = usePathname()
//   const params = useParams();

//   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
//     const nextLocale = event.target.value;
//     startTransition(() => {
//       router.replace(
//         //@ts-ignore
//         { pathname, params },
//         { locale: nextLocale }
//       )
//     })
//   }

//   return (
//     <label classNameclassName={`relative text-gray-400 ${isPending ? 'transition-opacity [&:disabled]:opacity-30' : ''}`}>
//       <p className="sr-noly">{label}</p>
//       <select
//         className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
//         defaultValue={defaultValue}
//         disabled={isPending}
//         onChange={onSelectChange}
//       >{children}
//       </select>
//       <span className="pointer-events-none absolute right-2 top-[8px]">^</span>
//     </label>
//   )

// }