import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Savings() {
  return (
    <div className="savings">
      <div className="limited-offers">
        <div className="offers">
          <h5>Limited Offers</h5>
          <h1>Save 20% </h1>
          <p>on hen production</p>
          <Link href="">
            <BsArrowRight />
            Shop now
          </Link>
        </div>
        <div className="percentage">
          <h1>-20%</h1>
          <h5>OFF</h5>
        </div>
        <div className="empty"></div>
      </div>
      <div className="best-deals">
        <div className="offers">
          <h5>Best deal for you</h5>
          <h1>-15% Off</h1>
          <p>to creals</p>
          <Link href="">
            <BsArrowRight />
            Shop now
          </Link>
        </div>
        <div className="percentage">
          <h1>Great</h1>
          <h5>Deal!</h5>
        </div>
        <div className="empty"></div>
      </div>
    </div>
  );
}
