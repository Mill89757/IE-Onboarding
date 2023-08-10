import CheckTool from "./CheckTool";
import { useState } from "react";

function Footer() {
    return (
        <footer className="bg-[#F7F9F7] py-6">
            <div className="container mx-auto text-center">
                <p className="text-[#185E0E] mb-2">© {new Date().getFullYear()} EnergySaver, All Rights Reserved.</p>
                <p className="text-[#185E0E]">Designed with ♡ by Panda</p>
            </div>
        </footer>
    );
}

export default Footer;
