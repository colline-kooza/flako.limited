import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Welcome() {
  return (
    <div className="Welcome">
      <div className="welcome-image">
        <Image src="/images/welcome1.jpg" alt="" fill />
      </div>
      <div className="welcome-text">
        <h4>Welcome!</h4>
        <h1>About our Store</h1>
        <p>
          Welcome to Flako Limited – a legacy of excellence, driven by
          dedication, innovation, and unparalleled quality. With a history of
          pioneering top-tier products, we're committed to ensuring customer
          satisfaction in every endeavor. Join us on this journey towards
          success and discover the essence of premium craftsmanship.
        </p>
        <div className="button">
          <Link href="">Read more</Link>
        </div>
      </div>
    </div>
  );
}
