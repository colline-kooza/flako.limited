import { getProducts } from "@/app/api/products/route";
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";

export default async function page({ params: { slug } }) {
  const products = await getProducts();
  const product = products?.find((product) => product.slug == slug);
  const id = product.id;
  return (
    <div className="order">
      <div className="order-container">
        <div className="order-image">
          <div className="order-img ">
            <Image src={product.image} alt="" fill objectFit="contain" />
          </div>
          <h2>{product.title}</h2>
          <p>{product.detailed_description}</p>
          <h3>UGX 50,000</h3>
        </div>
        <div className="order-form">
          <Form title={product.title} price={product.price} />
        </div>
      </div>
    </div>
  );
}
