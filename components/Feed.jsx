"use client";

import { useState } from "react";

const Feed = (props) => {
	const [expanded, setexpanded] = useState(false);
	const [carddata, setcarddata] = useState({
		title: "",
		ingredients: "",
		servings: "",
		instructions: "",
	});

	return (
		<div className="w-screen grid gap-4 justify-items-start place-content-start">
			{props.data.map((el, i) => {
				return (
					<button
						key={i}
						onClick={() => {
							setexpanded(true);
							setcarddata({
								title: el.title,
								ingredients: el.ingredients,
								servings: el.servings,
								instructions: el.instructions,
							});
						}}
						className=" text-left w-[calc(100vw-48px)] max-w-prose bg-yellow-100 px-4 py-4 rounded-2xl transition-shadow shadow-md hover:shadow-xl"
					>
						<h2 className="text-xl text-amber-900 font-semibold font-heading">
							{el.title}
						</h2>
						<p className="text-stone-500 pt-1 whitespace-nowrap text-ellipsis overflow-hidden">
							{el.instructions}
						</p>
					</button>
				);
			})}
			<div
				onClick={() => setexpanded(false)}
				className={`fixed top-0 left-0 h-screen-dynamic w-screen bg-stone-900/50 transition-opacity duration-300 ${
					expanded
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			></div>

			<div
				className={`fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-[calc(100vw-32px)] w-144 max-h-[90%] h-fit min-h-64 overflow-y-scroll bg-amber-100 shadow-xl shadow-stone-600 rounded-2xl p-6 sm:px-10 sm:py-12 transition-opacity duration-300 ${
					expanded
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			>
				<button
					onClick={() => setexpanded(false)}
					className="absolute right-2 top-2 bg-red-200 rounded-xl p-1 transition-all hover:scale-110 duration-200 hover:shadow-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="36"
						height="36"
						viewBox="0 0 24 24"
					>
						<path
							fill="#b91c1c"
							d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
						/>
					</svg>
				</button>
				<h2 className="text-xl sm:text-2xl max-sm:max-w-[80%] max-w-[90%] font-bold text-amber-900 font-heading">
					{carddata.title}
				</h2>
				<p className="bg-amber-500 text-xs sm:text-sm text-amber-50 w-fit rounded-2xl px-4 shadow-md py-1 mt-1">
					{carddata.servings}
				</p>
				<ul className="list-disc p-4 sm:text-lg grid gap-1 marker:text-amber-600">
					{carddata.ingredients.split("|").map((el) => {
						return (
							<li
								key={el}
								className="text-stone-600"
							>
								{el}
							</li>
						);
					})}
				</ul>
				<h3 className="font-bold text-amber-800 sm:text-lg">Instructions:</h3>
				<ol className="list-decimal px-4 pt-1 sm:text-lg grid gap-1 marker:text-amber-600 marker:font-bold">
					{carddata.instructions.split(". ").map((el) => {
						return (
							<li
								key={el}
								className="text-stone-700"
							>
								{el}
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
};

export default Feed;
