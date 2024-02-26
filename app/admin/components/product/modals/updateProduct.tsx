import React, { useState } from "react";

export default function UpdateProducts({
	showUpdateModal,
	setShowUpdateModal,
	updateProduct,
	error,
	titleRef,
	descriptionRef,
	stockRef,
	priceRef,
	brandRef,
	genderRef,
	product,
}) {
	const [updatedTitle, setUpdatedTitle] = useState(product.title);
	const [updatedDec, setUpdatedDec] = useState(product.description);
	const [updatedStock, setUpdatedStock] = useState(product.stock);
	const [updatedPrice, setUpdatedPrice] = useState(product.price);
	const [updatedBrand, setUpdatedBrand] = useState(product.brand_name);
	const [updatedGender, setUpdatedGender] = useState(product.gender);

	const handleTitleChange = (event: any) => {
		setUpdatedTitle(event.target.value);
	};
	const handleDecChange = (event: any) => {
		setUpdatedDec(event.target.value);
	};
	const handleStockChange = (event: any) => {
		setUpdatedStock(event.target.value);
	};
	const handlePriceChange = (event: any) => {
		setUpdatedPrice(event.target.value);
	};
	const handleBrandChange = (event: any) => {
		setUpdatedBrand(event.target.value);
	};
	const handleGenderChange = (event: any) => {
		setUpdatedGender(event.target.value);
	};
	const inputData = [
		{
			label: "Add Title",
			ref: titleRef,
			name: "Title",
			value: updatedTitle,
			change: handleTitleChange,
		},
		{
			label: "Description",
			ref: descriptionRef,
			name: "Description",
			value: updatedDec,
			change: handleDecChange,
		},
		{
			label: "Stock",
			ref: stockRef,
			name: "Stock",
			value: updatedStock,
			change: handleStockChange,
		},
		{
			label: "Price",
			ref: priceRef,
			name: "Price",
			value: updatedPrice,
			change: handlePriceChange,
		},
		{
			label: "Brand Name",
			ref: brandRef,
			name: "Brand Name",
			value: updatedBrand,
			change: handleBrandChange,
		},
		{
			label: "Gender",
			ref: genderRef,
			name: "Gender",
			value: updatedGender,
			change: handleGenderChange,
		},
	];
	return (
		<div className="absolute z-10 inset-0 overflow-y-auto flex items-center justify-center">
			<div className="inset-0 bg-black opacity-50"></div>
			<div className="bg-white rounded-lg p-8 w-full max-w-lg mx-5 shadow-xl">
				<h2 className="text-xl font-semibold mb-4">Update Product</h2>
				<form onSubmit={(event) => updateProduct(event)}>
					{inputData?.map((data: any, index: number) => (
						<div className="mb-4">
							<label
								htmlFor="categoryName"
								className="block text-sm font-medium text-gray-700"
							>
								{data.label}
							</label>
							<input
								ref={data.ref}
								onChange={data.change}
								value={data.value}
								name={data.name}
								className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
							/>
							{error ? (
								<span className="text-red-500 text-sm">
									Enter a title
								</span>
							) : (
								""
							)}
						</div>
					))}
					<div className="flex justify-end">
						<button
							type="button"
							className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md"
							onClick={() => setShowUpdateModal(!showUpdateModal)}
						>
							Cancel
						</button>
						<button
							onClick={(event) => updateProduct(event)}
							type="submit"
							className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
