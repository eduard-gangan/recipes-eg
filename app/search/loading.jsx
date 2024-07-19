"use client";

import { useEffect, useState } from "react";

const Loader = () => {
	const [state, setState] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setState(true);
		}, 300);
		return () => clearTimeout(timeout);
	}, []);
	return (
		<div
			className={[
				`fixed ${
					state ? "opacity-0 pointer-events-none" : ""
				} bg-amber-100 top-0 left-0 h-screen w-screen flex justify-center content-center gap-4 items-center z-[200] transition-opacity duration-300`,
			]}
		>
			<img
				src="/assets/spinner.svg"
				alt="website loading"
			/>
		</div>
	);
};

export default Loader;
