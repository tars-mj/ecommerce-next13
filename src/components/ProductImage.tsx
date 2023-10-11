import Image from "next/image";

export const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 relative w-full overflow-hidden rounded-none">
			<div className="flex items-center justify-center ">
				<Image
					className="h-full w-full object-cover object-center transition-all duration-300 hover:rotate-12 hover:scale-125 hover:opacity-80"
					width={100}
					height={100}
					src={src}
					alt={alt}
				/>
			</div>
		</div>
	);
};
