import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function SubNav() {
  return (
    <div className="subNav">
      <div className="subNav-links">
        <Link href="">Support 24/7</Link>
        <Link href="">
          <FaPhone />
          (+256)700-77-4018
        </Link>
        <Link href="">
          <HiOutlineMailOpen />
          Flako@gmail.com
        </Link>
      </div>
      <div className="subNav-button">
        <button>Buy now</button>
      </div>
    </div>
  );
}
