"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ price, title }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    productTitle: title,
  });
  function onSubmit(data) {
    const orderPrice = price * Number(data.quantity);

    setFormData((prevData) => ({
      ...prevData,
      ...data,
      totalPrice: orderPrice,
    }));
  }
  // console.log(formData);
  return (
    <div className="form">
      <div className="form-header">
        <h2>Make Order by Filling in the Form</h2>
      </div>
      <div className="form-inputs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label id="label" htmlFor="Name">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            {...register("Name")}
            required
          />

          <label id="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Insert email"
            {...register("email")}
            required
          />

          <label id="label" htmlFor="number">
            Contact Number
          </label>
          <input
            type="tel"
            placeholder="Enter your number"
            {...register("number")}
            required
          />

          <label id="label" htmlFor="district">
            District
          </label>
          <input
            type="text"
            placeholder="Eg:Kampala"
            {...register("district")}
            required
          />

          <label id="label" htmlFor="quantity">
            Product Quantity
          </label>
          <input
            type="number"
            placeholder="Enter Number of products"
            {...register("quantity")}
            required
          />

          <div className="button">
            <button type="submit">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  );
}
