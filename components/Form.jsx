"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const Form = () => {
	const router = useRouter();
	const text = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		let query = text.current.value;
		router.push(`/search?q=${query}`);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-144 lg:max-w-180 relative"
		>
			<input
				ref={text}
				type="text"
				required
				className="w-full text-lg lg:text-xl px-4 py-3 md:py-4 md:px-6 lg:px-8 rounded-2xl bg-amber-50 shadow-md transition-shadow duration-300 hover:shadow-lg focus:shadow-lg"
				placeholder="Placeholder text"
			/>
			<button
				className="absolute right-1.5 top-1.5 bg-amber-300 text-gray-900 font-bold uppercase rounded-xl px-3 md:px-6 py-2 md:py-3"
				type="submit"
			>
				Search
			</button>
		</form>
	);
};

export default Form;
