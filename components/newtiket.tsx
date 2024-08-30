"use client"
import React, { useRef, useState } from "react";
import Input from "./ui/input";

export interface NewticketProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function Newticket({ isOpen, closeModal }: NewticketProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleImgIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBoldClick = () => {
    document.execCommand("bold", false, "");
  };

  const handleItalicClick = () => {
    document.execCommand("italic", false, "");
  };

  const handleContentChange = () => {
    const content = contentRef.current?.innerHTML.trim() || "";
    const placeholder = contentRef.current?.querySelector(".placeholder");

    if (content) {
      placeholder?.classList.add("hidden");
    } else {
      placeholder?.classList.remove("hidden");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center pt-12 pb-2">
          <div className="inline-block align-bottom bg-white bg-opacity-100 rounded-3xl overflow-hidden shadow-xl transform transition-all xl:px-12 lg:px-10 md:px-8 sm:px-4 px-2 md:py-8 sm:py-6 py-4 2xl:mx-96 xl:mx-64 lg:mx-32 md:mx-16 sm:mx-8 mx-2">
            <div className="">
              <button
                onClick={closeModal}
                type="button"
                className="m-2 absolute top-0 right-0 inline-flex items-center justify-center w-10 h-8 font-bold text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col text-black space-y-4 text-left">
              <h1 className="md:text-3xl text-2xl font-bold font-[Aeial]">Create new ticket</h1>
              <p className="text-gray-400 sm:text-sm text-xs">
                When submitting an after-sales service support ticket, please make sure to include all the details that may be useful to our after-sales team, such as account information and screenshots with error.
              </p>
              <hr />
              <span className="md:text-xl text-md">Select Your Subscription<span className="text-[#db5f64]">*</span></span>
              <div className="">
                <Input
                  type="search"
                  placeholder="Subscription"
                  className="w-full rounded-xl shadow-sm md:px-3 px-2 md:py-6 py-3"
                />
              </div>
              <span className="md:text-xl text-md">Select Issue Category<span className="text-[#db5f64]">*</span></span>
              <div className="">
                <Input
                  type="search"
                  placeholder="Type of issue"
                  className="w-full rounded-xl shadow-sm md:px-3 px-2 md:py-6 py-3"
                />
              </div>
              <div className="relative">
                <div
                  ref={contentRef}
                  contentEditable
                  onInput={handleContentChange}
                  className="w-full rounded-xl shadow-sm md:px-3 px-2 md:py-6 py-3 min-h-[150px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 md:text-sm text-xs"
                >
                  {imageSrc && (
                    <div>
                      <img src={imageSrc} alt="Uploaded" className="max-w-full h-auto mt-2" />
                    </div>
                  )}
                  <div className="placeholder absolute top-0 left-0 text-gray-500 px-2 py-3">
                    Please describe your issue in detail so we can help you resolve it.
                  </div>
                </div>
                <div className="flex justify-end space-x-2 absolute bottom-0 right-0 pb-3 pr-2">
                  <button onClick={handleImgIconClick}><ImgIcon className="md:w-10 md:h-10 w-6 h-6" /></button>
                  <button className="pl-3" onClick={handleBoldClick}><BoldIcon className="md:w-10 md:h-10 w-6 h-6" /></button>
                  <button onClick={handleItalicClick}><ItalicIcon className="md:w-10 md:h-10 w-6 h-6" /></button>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  accept="image/*"
                />
              </div>
              <div className="flex justify-end items-center space-x-4">
                <button className="border-2 border-[#775fdb] bg-white rounded-full px-4 py-2 text-[#775fdb] md:text-xl text-md"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button className="border border-white bg-[#775fdb] rounded-full px-4 py-2 text-white md:text-xl text-md">Submsit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function InfoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

function CloseIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-x"
      viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </svg>
  )
}

function ImgIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
    </svg>
  )
}

function BoldIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
    </svg>
  )
}

function ItalicIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
    </svg>
  )
}
