import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Poultry Farming</h1>
      </div>
      <div className="home-paragraph">
        <p>
          All of our chickens are grown by the Soanes family and their farming
          neighbours on farms in and around the Yorkshire Wolds
        </p>
      </div>
      <div className="home-button">
        <Link href="">
          <BsArrowRight />
          Discover More
        </Link>
      </div>
    </div>
  );
}
