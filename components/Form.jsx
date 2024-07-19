"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Form = () => {
	const router = useRouter();
	const text = useRef();
	const [active, setactive] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		let query = text.current.value;
		router.push(`/search?q=${query}`);
	};
	return (
		<form
			onSubmit={handleSubmit}
			onClick={() => setactive(true)}
			onBlur={() => setactive(false)}
			className="w-full max-w-144 lg:max-w-180 relative z-0"
		>
			<img
				src="/assets/grandma.svg"
				alt="cartoony grandma icon"
				width={60}
				height={60}
				className={`absolute left-4 -z-10 transition-transform duration-500 ${
					active && "-translate-y-8"
				}`}
			/>
			<input
				ref={text}
				type="text"
				required
				className={`w-full text-lg lg:text-xl px-4 py-4 md:px-6 lg:px-8 rounded-2xl bg-amber-50 shadow-md hover:shadow-lg focus:shadow-lg text-stone-800 placeholder:text-stone-400 transition-all duration-300 ${
					active && "translate-y-4"
				}`}
				placeholder="Pasta Carbonara..."
			/>
			<button
				className={`absolute right-1.5 top-1.5 bg-amber-300 text-gray-900 font-bold uppercase rounded-xl px-3 md:px-6 py-3 transition-transform duration-300 active:scale-90 ${
					active && "translate-y-4"
				}`}
				type="submit"
			>
				Search
			</button>
		</form>
	);
};

export default Form;
