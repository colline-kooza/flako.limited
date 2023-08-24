import React from "react";

import { getProducts } from "@/app/api/products/route";
import Bunner from "@/components/Bunner";
import SideBar from "@/components/SideBar";
import Breadcrumb from "@/components/Breadcrumb";
import Prdt from "@/components/Prdt";
import Products from "@/components/Products";
import Sorting from "@/components/Sorting";

export default async function page({ params: { slug } }) {
  const products = await getProducts();
  const id = products.id;
  const product = products?.find((product) => product.slug == slug);
  const unlike = products?.filter((product) => product.slug !== id);
  const breadcrumb = {
    base: {
      path: "/",
      title: "Home",
    },
    currentText: {
      title: product.title,
    },
  };
  return (
    <>
      <Bunner data={product} />
      <Breadcrumb data={breadcrumb} />
      <div className="category-detail-page">
        <SideBar data={unlike} />
        <div className="products-sect">
          <Sorting />
          <div className="cat-prdts">
            <Prdt data={product} />
          </div>
        </div>
      </div>
      <div className="Related-Products">
        <Products data={unlike.splice(0, 4)} title="Other products" />
      </div>
    </>
  );
}
