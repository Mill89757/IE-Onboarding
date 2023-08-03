import React, { useEffect } from "react";

export default function FlashMessage(props) {
  const isShowFlashMessage = props.isShowFlashMessage;
  const setIsShowFlashMessage = props.setIsShowFlashMessage;
  const flashMessage = props.flashMessage;
  const message = flashMessage;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowFlashMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full p-4  text-white z-50 ${
          isShowFlashMessage ? "animate-fade-in " : "animate-fade-out"
        } flex items-center justify-center`}
        style={{
          transform: isShowFlashMessage ? "translateY(200px)" : "translateY(0)",
        }}
      >
        <div className="bg-[#E84A4A] h-[44px] rounded-full px-[20px] flex items-center justify-center">
          {message}
        </div>
      </div>
    </>
  );
}
