import CheckTool from "./CheckTool";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(props) {
  const index = props.index;
  const [showProtectedContent, setShowProtectedContent] = useState(false);
  const [password, setPassword] = useState("panda"); 
  const router = useRouter();

  const showContent = () => {
    const enteredPassword = prompt("Enter the password:");
    if (enteredPassword === password) {
      setShowProtectedContent(true);
      router.push(router.pathname); 
    } else {
      alert("Incorrect password. Access denied.");
    }
  };

  const renderLink = (path, text) => {
    if (showProtectedContent || index === path) {
      return (
        <Link href={path}>
          <div
            className={`flex w-[180px] items-center justify-center h-full cursor-pointer ${
              index === path ? "bg-[#A3C09F]" : "hover:bg-[#B9D9B5]"
            }`}
          >
            <h1 className="text-[#185E0E] font-bold text-2xl">{text}</h1>
          </div>
        </Link>
      );
    } else {
      return (
        <div
          className={`flex w-[180px] items-center justify-center h-full cursor-pointer hover:bg-[#B9D9B5]`}
          onClick={showContent}
        >
          <h1 className="text-[#185E0E] font-bold text-2xl">{text}</h1>
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex w-full  h-[80px] bg-[#C2DDBF]">
        <div className="ml-[24px] w-[460px] flex mr-auto items-center">
          <h1 className="text-white text-9xl font-bold sm:text-4xl italic h-[50px]">
            Energy Saver
          </h1>
        </div>

        {renderLink("/", "Home")}
        {renderLink("/current", "Current")}
        {renderLink("/stats", "MyStats")}
      </div>
    </>
  );
}
