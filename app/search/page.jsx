"use client";

import { useSearchParams } from "next/navigation";

const Page = () => {
	const params = useSearchParams();

	const data = [
		{
			name: "Placeholder name",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nostrum praesentium officia necessitatibus quo autem delectus voluptate",
		},
		{
			name: "Placeholder name",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nostrum praesentium officia necessitatibus quo autem delectus voluptate",
		},
		{
			name: "Placeholder name",
			desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nostrum praesentium officia necessitatibus quo autem delectus voluptate",
		},
	];

	const query = params.get("q");
	return (
		<main className="min-h-screen grid place-content-start gap-4 bg-amber-100 p-6 py-12 md:p-20 lg:px-40">
			<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-900 mb-6">
				X results for "{query}":
			</h1>

			{data.map((el) => {
				return (
					<button className="block text-left max-w-prose bg-yellow-100 px-4 py-4 rounded-2xl transition-shadow shadow-md hover:shadow-xl">
						<h2 className="text-xl text-amber-800 font-semibold">{el.name}</h2>
						<p className="text-stone-500 pt-1 whitespace-nowrap text-ellipsis overflow-hidden">
							{el.desc}
						</p>
					</button>
				);
			})}
		</main>
	);
};

export default Page;
