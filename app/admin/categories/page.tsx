"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import CategoryModel from "../components/category/modals/createCategory";
import UpdateModal from "../components/category/modals/updateCategory";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
	const [categories, setCategory] = useState([]);
	const [error, setError] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showUpdateModal, setUpdateModal] = useState(false);
	const [category, setCategoryData] = useState({});
	const titleRef = useRef(null);

	const deleteCategory = async (id: number) => {
		const deletedCategory = await axios.delete(
			"http://localhost:4000/categories/" + id
		);
		console.log(deletedCategory.data.data);
		toast("Deleted Category");
		getCategories();
	};
	const getCategories = async () => {
		const fetchedCategories = await axios.get(
			"http://localhost:4000/categories"
		);

		console.log(fetchedCategories.data.data);
		setCategory(fetchedCategories.data.data);
	};

	const getCategory = async (id: number) => {
		const fetchedCategory = await axios.get(
			"http://localhost:4000/categories/" + id
		);
		console.log(fetchedCategory.data);

		await setCategoryData(fetchedCategory.data);
		await setUpdateModal(!showUpdateModal);
	};

	const createCategory = async (e: any) => {
		e.preventDefault();
		if (!titleRef.current.value) {
			setError(true);
			return;
		}
		const createdCategory = await axios.post(
			"http://localhost:4000/categories",
			{
				title: titleRef.current.value,
			}
		);
		console.log(createdCategory.data.data);
		console.log("form submitted");
		getCategories();
		setShowModal(!showModal);
	};
	const updateCategory = async (e: any) => {
		e.preventDefault();
		if (!titleRef.current.value) {
			setError(true);
			return;
		}
		const updatedCategory = await axios.put(
			"http://localhost:4000/categories/" + category.id,
			{
				title: titleRef.current.value,
			}
		);
		console.log(updatedCategory.data.data);
		console.log("form submitted");
		getCategories();
		setUpdateModal(!showUpdateModal);
	};
	useEffect(() => {
		getCategories();
	}, []);

	return (
		<div className="overflow-x-auto">
			<ToastContainer />
			<div className="flex justify-between mb-4">
				<div>
					<input
						type="text"
						placeholder="Search..."
						className="px-3 py-1 w-64 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
					/>
				</div>
				<div>
					<button
						onClick={() => setShowModal(!showModal)}
						className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
					>
						Add Category
					</button>
				</div>
			</div>
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
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
							Created At
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Updated At
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Actions
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{categories?.map((category) => (
						<tr key={category.id}>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">
									{category.title}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">
									{category.created_at}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm text-gray-900">
									{category.updated_at}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap space-x-1">
								<button
									onClick={() => getCategory(category.id)}
									className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md"
								>
									Edit
								</button>
								<button
									onClick={() => deleteCategory(category.id)}
									className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md"
								>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{showModal ? (
				<CategoryModel
					showModal={showModal}
					setShowModal={setShowModal}
					titleRef={titleRef}
					createCategory={createCategory}
					error={error}
					setError={setError}
				/>
			) : (
				""
			)}
			{showUpdateModal ? (
				<UpdateModal
					showUpdateModal={showUpdateModal}
					setUpdateModal={setUpdateModal}
					titleRef={titleRef}
					updateCategory={updateCategory}
					error={error}
					setError={setError}
					category={category}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default Page;
