import Image from 'next/image';
import EnergyImage from "pictures/sustainability.png"

export default function InfoCard(props) {
    const title = props.title;
    const description = props.description;

    return (
      <div className="max-w-full w-[600px] h-auto md:w-[600px] md:h-[600px] bg-[#F7F9F7] rounded-xl flex flex-col justify-center items-center p-4 md:p-8">
        {/* Primary Content - Title */}
        <h1 className="text-[#185E0E] text-4xl md:text-6xl font-bold sm:text-4xl italic mb-4 md:mb-6 text-center">
          {title}
        </h1>

        {/* Secondary Content - Image */}
        <div className="flex justify-center items-center mb-4">
            <Image
                src={EnergyImage}
                width={100}
                height={100}
                alt="Picture of energy"
            />
        </div>

        {/* Secondary Content - Description */}
        <h2 className="text-left text-base md:text-lg font-normal text-gray-800">
          {description}
        </h2>
      </div>
    );
}
