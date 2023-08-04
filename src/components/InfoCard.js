import Image from 'next/image';
import EnergyImage from "pictures/energy.jpg"

export default function InfoCard(props) {
    const title = props.title;
    const description = props.description;

  
    return (
      <div className="w-[600px] h-[600px] bg-[#F7F9F7] rounded-xl flex justify-center items-center">
        <div className="space-y-[70px]">
          <h1 className="text-[#185E0E] text-9xl font-bold sm:text-4xl italic h-[50px] text-center">
            {title}
          </h1>
          <h1 className="text-center text-lg font-semibold">{description}</h1>
          <div className="flex justify-center items-center"> {/* Flex container */}
          <div>
            <Image
                src={EnergyImage}
                width={100}
                height={100}
                alt="Picture of the energy"
            />
            </div>
        </div>

        </div>
      </div>
    );
  }
  