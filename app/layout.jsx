import { Inter, Merienda } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const heading = Merienda({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--heading-font",
});

export const metadata = {
	title: "Grandma's Cookbook",
	metadataBase: "https://recipes-eg.netlify.app",
	description:
		"Search grandma's cookbook for ingredients, serving sizes and step-by-step instructions for 200.000+ meals",
	openGraph: {
		title: "Grandma's Cookbook",
		description:
			"Search grandma's cookbook for ingredients, serving sizes and step-by-step instructions for 200.000+ meals",
		images: "/assets/cookbook.webp",
	},
	twitter: {
		card: "summary_large_image",
		title: "Grandma's Cookbook",
		description:
			"Search grandma's cookbook for ingredients, serving sizes and step-by-step instructions for 200.000+ meals",
		image: "/assets/cookbook.webp",
	},
	// icons: {
	//   shortcut: { url: "/favicon.ico", type: "image/x-icon" },
	//   icon: [
	//     { url: "/favicon.ico", type: "image/x-icon" },
	//     { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
	//     { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
	//   ],
	//   apple: [
	//     { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
	//   ],
	//   manifest: "/site.webmanifest"
	// },
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={[`bg-amber-100 ${inter.className} ${heading.variable}`]}>
				{children}
			</body>
		</html>
	);
}
