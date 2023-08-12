import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiStar } from "react-icons/bi";

export default function Products({ data, title, imgFit }) {
  return (
    <div className="products">
      <div className="products-header">
        <div className="our-products">
          <h1>{title}</h1>
        </div>
        <div className="fresh-garments">
          <h2>Fresh Selections</h2>
        </div>
      </div>
      <div className="products-conatainer">
        {data.map((product) => {
          return (
            <Link href="" key={product.id}>
              <div className="image">
                <Image
                  style={{ objectFit: imgFit }}
                  src={product.image}
                  alt=""
                  fill
                />
              </div>
              <div className="product-text">
                <h2>{product.title}</h2>
                <div className="icons">
                  <BiStar color="orange" /> <BiStar color="orange" />{" "}
                  <BiStar color="orange" /> <BiStar color="orange" />
                </div>
                <p>{product.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
