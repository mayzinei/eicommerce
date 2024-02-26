"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CreateProducts from "../components/product/modals/createProduct";
import UpdateProducts from "../components/product/modals/updateProduct";

export default function Page() {
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState();
	const [showModal, setShowModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [error, setError] = useState(false);
	const titleRef = useRef();
	const descriptionRef = useRef();
	const stockRef = useRef();
	const priceRef = useRef();
	const brandRef = useRef();
	const genderRef = useRef();

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const fetchedProducts = await axios.get("http://localhost:4000/products");
		console.log(fetchedProducts.data.data[0]);
		setProducts(fetchedProducts.data.data);
	};

	const getProduct = async (id: any) => {
		const fetchedSingleProduct = await axios.get(
			"http://localhost:4000/products/" + id
		);

		console.log(fetchedSingleProduct.data);
		// await setProduct(fetchedSingleProduct.data);
	};
	const deleteProduct = async (id: any) => {
		const deletedProduct = await axios.delete(
			"http://localhost:4000/products/" + id
		);
		console.log(id);
		console.log(deletedProduct.data);
		getProducts();
	};

	const CreateProduct = async (e: any) => {
		e.preventDefault();

		const CreatedProduct = await axios.post(
			"http://localhost:4000/products",
			{
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				stock: parseInt(stockRef.current.value),
				price: parseInt(priceRef.current.value),
				brand_name: brandRef.current.value,
				gender: genderRef.current.value,
			}
		);
		console.log(CreatedProduct.data.data);
		getProducts();
		setShowModal(!showModal);
	};

	const updateProduct = async (e: any) => {
		e.preventDefault();
		const updatedProduct = await axios.put(
			"http://localhost:4000/products/" + products.id,
			{
				title: titleRef.current.value,
				description: descriptionRef.current.value,
				stock: parseInt(stockRef.current.value),
				price: parseInt(priceRef.current.value),
				brand_name: brandRef.current.value,
				gender: genderRef.current.value,
			}
		);
		console.log(updatedProduct.data.data);
		getProducts();
		setShowUpdateModal(!showUpdateModal);
	};
	return (
		<div className="p-5 space-y-8">
			<div className="flex items-center justify-between border-b border-slate-600 pb-6">
				<h1 className="text-4xl font-bold">My Products</h1>
				<button
					onClick={() => setShowModal(!showModal)}
					className="px-4 py-2 bg-slate-300 rounded-lg"
				>
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
								<td className="px-6 py-4 whitespace-nowrap space-x-1">
									<button
										onClick={() => getProduct(product.id)}
										className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
									>
										Edit
									</button>
									<button
										onClick={() => deleteProduct(product.id)}
										className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md"
									>
										Remove
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{showModal && (
				<CreateProducts
					showModal={showModal}
					setShowModal={setShowModal}
					error={error}
					createProduct={CreateProduct}
					titleRef={titleRef}
					descriptionRef={descriptionRef}
					stockRef={stockRef}
					priceRef={priceRef}
					brandRef={brandRef}
					genderRef={genderRef}
				/>
			)}
			{showUpdateModal && (
				<UpdateProducts
					showUpdateModal={showUpdateModal}
					setShowUpdateModal={setShowUpdateModal}
					error={error}
					updateProduct={updateProduct}
					titleRef={titleRef}
					descriptionRef={descriptionRef}
					stockRef={stockRef}
					priceRef={priceRef}
					brandRef={brandRef}
					genderRef={genderRef}
				/>
			)}
		</div>
	);
}
