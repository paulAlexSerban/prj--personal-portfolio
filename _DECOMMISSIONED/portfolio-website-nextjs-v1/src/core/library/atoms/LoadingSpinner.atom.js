import { useId, useEffect, useState } from "react";

export default function LoadingSpinner() {
	const ID = useId();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
		const events = ["pagehide", "pageshow", "unload", "load"];

		const eventLogger = (event) => {
			switch (event.type) {
				case "pagehide":
				case "pageshow": {
					setLoading(false);
					break;
				}
				default:
					setLoading(false);
					break;
			}
		};

		events.forEach((eventName) => window.addEventListener(eventName, eventLogger));
	}, []);

	return (
		<div className={loading ? "loading-spinner isVisible" : "loading-spinner"}>
			<span className="spinner"></span>
		</div>
	);
}
