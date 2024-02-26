import React from "react";

export default function CreateProducts({
	showModal,
	setShowModal,
	error,
	createProduct,
	titleRef,
	descriptionRef,
	stockRef,
	priceRef,
	brandRef,
	genderRef,
}) {
	const inputData = [
		{ label: "Add Title", ref: titleRef, name: "Title", type: "text" },
		{
			label: "Description",
			ref: descriptionRef,
			name: "Description",
			type: "text",
		},
		{ label: "Stock", ref: stockRef, name: "Stock", type: "number" },
		{ label: "Price", ref: priceRef, name: "Price" },
		{ label: "Brand Name", ref: brandRef, name: "Brand Name" },
		{ label: "Gender", ref: genderRef, name: "Gender" },
	];
	return (
		<div className="absolute z-10 inset-0 overflow-y-auto flex items-center justify-center">
			{/* <div className=" inset-0 bg-black opacity-50"></div> */}
			<div className="bg-white rounded-lg p-8 w-full max-w-lg mx-5 shadow-xl">
				<h2 className="text-xl font-semibold mb-4">Add Products</h2>
				<form onSubmit={() => createProduct(event)}>
					{inputData?.map((data, index) => (
						<div className="mb-4" key={index}>
							<label
								htmlFor={data.name}
								className="block text-sm font-medium text-gray-700"
							>
								{data.label}
							</label>
							<input
								ref={data.ref}
								type={data.type}
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
							onClick={() => setShowModal(!showModal)}
						>
							Cancel
						</button>
						<button
							onClick={() => createProduct(event)}
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
