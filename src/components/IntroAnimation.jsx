import React, { useEffect, useState } from 'react';

const INTRO_DURATION = 2600;

export default function IntroAnimation() {
	const [visible, setVisible] = useState(true);
	const [exiting, setExiting] = useState(false);

	useEffect(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const exitDelay = reducedMotion ? 700 : INTRO_DURATION;
		const exitTimer = window.setTimeout(() => setExiting(true), exitDelay);
		const removeTimer = window.setTimeout(() => setVisible(false), exitDelay + 500);

		return () => {
			window.clearTimeout(exitTimer);
			window.clearTimeout(removeTimer);
		};
	}, []);

	if (!visible) return null;

	return (
		<div
			className={`intro-animation ${exiting ? 'is-exiting' : ''}`}
			role="status"
			aria-label="SAIT, School of Engineering CUSAT"
		>
			<div className="intro-animation-glow" aria-hidden="true" />
			<div className="intro-animation-content">
				<img src="/img/logo.png" alt="" className="intro-animation-logo" />
			</div>
		</div>
	);
}
