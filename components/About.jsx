// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function About() {
//   return (
//     <div className="About">
//       <div className="image">
//         <Image src="" alt="" />
//       </div>
//       <div className="About-text">
//         <h3>Welcome!</h3>
//         <h1>
//           Flako Limited stands as a versatile provider of quality produce,
//           offering a wide array of farm-fresh delights. From premium live hens
//           to nutrient-rich soya beans, their dedication to ethical practices
//           ensures superior products. Embark on a culinary journey with Flako
//           Limited's exceptional offerings, backed by a commitment to freshness
//           and excellence.
//         </h1>
//         <Link href="">Read more</Link>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function Purchases() {
  return (
    <div className="Purchases">
      <div className="purchase-image1">
        <Image src="/images/about.jpg" alt="" fill />
      </div>
      <div className="shop-onPurchases">
        <h3>Get 5% off for purchases over $100</h3>
        <p>On your first purchase at Flako</p>
        <Link href="/all-catergories">
          Shop now <AiOutlineRight size={16} />
        </Link>
      </div>
      <div className="purchases-image2">
        <Image src="/images/about2.jpg" alt="" fill />
      </div>
    </div>
  );
}
