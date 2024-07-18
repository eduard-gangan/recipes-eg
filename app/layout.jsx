import { Inter, Merienda } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const heading = Merienda({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--heading-font",
});

export const metadata = {
	title: "Recipe Look-up",
	metadataBase: "https://recipes-eg.netlify.app",
	description: "Lorem Ipsum Dolor Sit Amet",
	openGraph: {
		title: "Recipe Look-up",
		description: "Lorem Ipsum Dolor Sit Amet",
		images: "/assets/pot.webp",
	},
	twitter: {
		card: "summary_large_image",
		title: "Recipe Look-up",
		description: "Lorem Ipsum Dolor Sit Amet",
		image: "/assets/pot.webp",
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
			<body className={[`${inter.className} ${heading.variable}`]}>
				{children}
			</body>
		</html>
	);
}
