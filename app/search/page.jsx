import Feed from "@/components/Feed";

const Page = async ({ searchParams }) => {
	let response = await fetch(
		`https://api.api-ninjas.com/v1/recipe?query=${searchParams.q}`,
		{
			method: "GET",
			headers: {
				"X-Api-Key": process.env.API_KEY,
			},
		}
	);

	if (!response.ok) {
		console.log("Something went wrong");
	}

	const data = await response.json();
	var len;
	if (data.length == 10) len = "10+";
	else if (data.length == 0) len = "No";
	else len = data.length;

	return (
		<main className="min-h-screen overflow-x-hidden grid place-content-start gap-4 bg-amber-100 p-6 py-12 md:p-20 lg:px-40">
			<h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-900 mb-6 font-heading flex items-baseline">
				{len} results for "{searchParams.q}"{len != "No" && ":"}
			</h1>
			<Feed data={data} />
		</main>
	);
};

export default Page;
