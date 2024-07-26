import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-y-2 h-14 flex items-center justify-center text-1xl">
      <Link 
        href="https://www.linkedin.com/in/neeraj-yadav-017a571b4/" 
        target="_blank" 
      >
        &copy; 2024-2025 Neeraj Yadav.
      </Link>
    </div>
  );
};

export default Footer;
