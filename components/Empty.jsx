import Image from "next/image";

const Empty = () => {
	return (
		<div className="min-w-64">
			<Image
				src="/assets/grandma-confused.svg"
				alt="grandma confused"
				width={250}
				height={250}
			/>
		</div>
	);
};

export default Empty;
