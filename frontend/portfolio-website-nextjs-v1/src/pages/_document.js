import { Html, Head, Main, NextScript } from "next/document";
import { useId } from "react";

export default function Document() {
	const ID = useId();

	return (
		<Html lang="en">
			<Head>
			</Head>
			<body id={ID}>
				<Main />

				<NextScript />
			</body>
		</Html>
	);
}
