import Image from "next/image";
import React from "react";

export default function Quality() {
  return (
    <div className="quality">
      <div className="card">
        <div className="image">
          <Image src="/images/egg.png" alt="" fill />
        </div>
        <h3 className="line-clamps">Products range</h3>
        <p className="line-clamp">
          Explore budget-friendly live hens and quality cereals, catering to
          diverse preferences.
        </p>
      </div>
      <div className="card">
        <div className="image">
          <Image src="/images/hen.png" alt="" fill />
        </div>
        <h3 className="line-clamps">Quality millers</h3>
        <p className="line-clamp">
          Elevate your expectations with healthy live hens and meticulously
          inspected cereals.
        </p>
      </div>
      <div className="card">
        <div className="image">
          <Image src="/images/tracking.png" alt="" fill />
        </div>
        <h3 className="line-clamps">Free Delivery</h3>
        <p className="line-clamp">
          Convenience delivered – enjoy complimentary, hassle-free delivery on
          all orders.
        </p>
      </div>
      <div className="card">
        <div className="image">
          <Image src="/images/satification.png" alt="" fill />
        </div>
        <h3 className="line-clamps">Customer Satisfaction</h3>
        <p className="line-clamp">
          Your happiness drives us; expect top-notch assistance and a commitment
          to exceed expectations.
        </p>
      </div>
    </div>
  );
}
