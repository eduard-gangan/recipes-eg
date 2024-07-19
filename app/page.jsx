import Image from "next/image";
import Form from "@/components/Form";

export default function Home() {
	return (
		<main className="min-h-screen bg-amber-100 grid gap-4 lg:gap-6 place-content-center justify-items-center p-6 relative">
			<div className="absolute top-8 w-screen bg-[url('/assets/jupiter.svg')] h-20 opacity-30"></div>
			<div className="absolute bottom-8 w-screen bg-[url('/assets/jupiter.svg')] h-20 opacity-30"></div>
			<h1 className="text-3xl sm:text-4xl lg:text-5xl text-amber-900 font-bold text-center font-heading">
				Find recipes for your favourite meal
			</h1>
			<p className="text-lg sm:text-xl text-center text-stone-500 max-w-prose">
				Ask grandma for ingredients, serving sizes and step-by-step instructions
				for 200.000+ types of food
			</p>
			<Form />
		</main>
	);
}
