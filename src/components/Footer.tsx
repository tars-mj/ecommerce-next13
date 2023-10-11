export const Footer = () => {
	return (
		<footer className="bg-slate-900" aria-labelledby="footer-heading">
			<div className="mx-auto p-10">
				<p className="gap-2 text-center text-sm text-zinc-200">
					&copy;{new Date().getFullYear()}
					<strong className="m-2 text-orange-400">KickPulse</strong>
					Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
