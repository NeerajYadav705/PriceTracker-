import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.png"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-log font-extrabold">
            Price<span className="text-lime-500"> Tracker</span>
          </p>
        </Link>
        <div className="flex items-center gap-5 cursor-not-allowed">
            {navIcons.map((icon)=>(
                <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain"
                />
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
