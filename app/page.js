import Home from "@/components/Home";
import Products from "@/components/Products";
import Quality from "@/components/Quality";
import Savings from "@/components/Savings";
import React from "react";
import { getProducts } from "./api/products/route";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import { getCreals } from "./api/products/creals/route";
import TeamWork from "@/components/TeamWork";
import Welcome from "@/components/Welcome";

export default async function page() {
  const products = await getProducts();
  const creals = await getCreals();
  console.log(creals);
  return (
    <div className="page">
      <div className="home">
        <Home />
      </div>
      <Quality />
      <Savings />
      <Products title="Trending Products" data={products} />
      <About />
      <Gallery />
      <Products
        title="Latest Products"
        imgFit="cover"
        data={creals.splice(0, 4)}
      />
      <TeamWork />
      <Welcome />
    </div>
  );
}
