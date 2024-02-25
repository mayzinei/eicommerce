"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const fetchedProducts = await axios.get("http://localhost:4000/products");
		console.log(fetchedProducts.data.data[0]);
		setProducts(fetchedProducts.data.data);
	};
	const deleteHandler = async (id: any) => {
		const deletedProduct = await axios.delete(
			"http://localhost:4000/products/" + id
		);
		console.log(id);
		console.log(deletedProduct.data);
		getProducts();
	};

	return (
		<div className="p-5 space-y-8">
			<div className="flex items-center justify-between border-b border-slate-600 pb-6">
				<h1 className="text-4xl font-bold">My Products</h1>
				<button className="px-4 py-2 bg-slate-300 rounded-lg">
					Add Products
				</button>
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Categories
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Image
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Title
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Description
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Stock
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Price
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Brand Name
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Gender
							</th>
							<th scope="col" className="relative px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
							<th scope="col" className="relative px-6 py-3">
								<span className="sr-only">Delete</span>
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{products.map((product, index) => (
							<tr key={index}>
								<td className="px-6 py-4 whitespace-nowrap">
									{product.categories}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<img
										src={product.image}
										alt="tshirt"
										className="w-[100px] h-[120px]"
									/>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									{product.title}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									{product.description}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									{product.stock}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									{product.price}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									{product.brand_name}
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									{product.gender}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button className="text-indigo-600 hover:text-indigo-900">
										Edit
									</button>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button
										onClick={() => deleteHandler(product.id)}
										className="text-red-600 hover:text-red-900"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
