import { Html, Head, Main, NextScript } from "next/document";
import { useId } from "react";

export default function Document() {
	const ID = useId();

	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=Roboto:wght@100;300;400;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body id={ID}>
				<Main />

				<NextScript />
			</body>
		</Html>
	);
}
