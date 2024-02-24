"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
	const [products, setProducts] = useState([
		{
			categories: "Fashion",
			title: "T-shirt",
			description: "Hello",
			stock: "2",
			price: "200000",
			brand_name: "MyBrand",
			gender: "male",
		},
		{
			categories: "Fashion",
			title: "T-shirt",
			description: "Hello",
			stock: "2",
			price: "200000",
			brand_name: "MyBrand",
			gender: "male",
		},
	]);
	// useEffect(() => {
	// 	const getProducts = async () => {
	// 		const fetchedProducts = await axios.get(
	// 			"http://localhost:4000/products"
	// 		);
	// 		console.log(fetchedProducts);
	// 		setProducts(fetchedProducts.data[0]);
	// 	};
	// 	getProducts();
	// }, []);

	return (
		<div className="p-20 space-y-10">
			<h1 className="text-4xl font-bold">My Products</h1>
			<div>
				<div className="flex items-center justify-between gap-8 font-bold mb-4">
					<h3>Categories</h3>
					<h3>Title</h3>
					<h3>Description</h3>
					<h3>Stock</h3>
					<h3>Price</h3>
					<h3>Brand Name</h3>
					<h3>Gender</h3>
				</div>
				{products?.map((product: any, index: number) => (
					<div
						key={index}
						className="flex items-center justify-between gap-8"
					>
						<p>{product.categories}</p>
						<p>{product.title}</p>
						<p>{product.description}</p>
						<p>{product.stock}</p>
						<p>{product.price}</p>
						<p>{product.brand_name}</p>
						<p>{product.gender}</p>
					</div>
				))}
			</div>
		</div>
	);
}
