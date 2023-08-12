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
  const imageEggs = [
    "/images/eggs1.jpg",
    "/images/eggs2.jpg",
    "/images/eggs10.jpg",
    "/images/eggs7.jpg",
    "/images/eggs8.jpg",
    "/images/eggs11.jpg",
    "/images/eggs12.jpg",
    "/images/eggs3.avif",
    "/images/eggs4.avif",
  ];
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image6 (2).jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
  ];
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
      <Gallery
        paragraph="Step into our thriving poultry farm, where clucks and feathers paint a vivid portrait of sustainable agriculture."
        header="Poultry Farm Gallery"
        data={images}
      />
      <Products
        title="Latest Products"
        imgFit="cover"
        data={creals.splice(0, 4)}
      />
      <TeamWork />
      <Gallery
        paragraph="Secure your share of delectable freshness – order your eggs now"
        header="Egg-citing Order Now"
        data={imageEggs}
      />
      <Welcome />
    </div>
  );
}
