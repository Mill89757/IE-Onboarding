import Image from 'next/image';
import EnergyImage from "pictures/Hero.jpg";

export default function HeroCard(props) {
    const { title, subtitle, description } = props;

    return (
        <>
            <div className="w-full h-full relative bg-[#F7F9F7] p-4 md:p-8 flex flex-col justify-center items-center overflow-hidden">
                {/* Image as background with overlay */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src={EnergyImage}
                        layout="fill"  // Fill the container
                        objectFit="cover" // Cover the entire space
                        alt="Picture of sustainability"
                    />
                </div>

                {/* Overlay for better text visibility */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

                {/* Primary Content - Title */}
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold italic mb-4 md:mb-6 text-center shadow-md">
                    {title}
                </h1>

                {/* Subtitle */}
                <h2 className="relative z-10 text-white text-2xl md:text-4xl font-medium italic mb-4 md:mb-6 text-center shadow-md">
                    {subtitle}
                </h2>

                {/* Secondary Content - Description outside the image */}
                <div className="relative z-10 mt-4 bg-green-100 bg-opacity-60 p-4 rounded-md shadow-md">
                    <h3 className="text-left text-base md:text-lg font-normal text-gray-900">
                        {description}
                    </h3>
                </div>
            </div>
        </>
    );
}
