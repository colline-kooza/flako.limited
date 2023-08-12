"use client";
import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  function changeNav() {
    setShowNavBar(!showNavBar);
  }
  return (
    <div className="NavBar">
      <div className="image">
        <img src="./images/flakoLogo.png" alt="" />
      </div>
      <div
        className={showNavBar ? " navBar-links display-links " : "navBar-links"}
      >
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Our Services</Link>
        <Link href="">
          Blog
          <FaCaretDown />
        </Link>
        <Link href="">
          Contacts
          <FaCaretDown />
        </Link>
      </div>
      <div className="navBar-icons">
        <Link href="">
          <GrFacebookOption size={19} />
        </Link>
        <Link href="">
          <BsTwitter size={19} />
        </Link>
        <Link href="">
          <AiFillYoutube size={19} />
        </Link>
        <Link href="">
          <BsWhatsapp size={19} />
        </Link>
        <div className="button">
          <a href="">
            <BiSolidPhoneCall />
            Get Free Offers
          </a>
        </div>
      </div>
      <div className="menu">
        <button onClick={changeNav}>
          <GiHamburgerMenu size={25} />
        </button>
      </div>
    </div>
  );
}
