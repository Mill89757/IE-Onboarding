import Link from "next/link";

export default function EntranceCard(props) {
  const title = props.title;
  const description = props.description;
  const link = props.link;

  return (
    <div className="w-[463px] h-[461px] bg-[#F7F9F7] rounded-xl flex justify-center items-center">
      <div className="space-y-[70px]">
        <h1 className="text-[#185E0E] text-9xl font-bold sm:text-4xl italic h-[50px] text-center">
          {title}
        </h1>
        <h1 className="text-center text-lg font-semibold">{description}</h1>
        <Link
          className="w-[400px] h-[70px] rounded-[25px] flex justify-center items-center bg-[#C2DDBF] cursor-pointer italic"
          href={{ pathname: link, query: { data: title } }}
        >
          <h1 className="text-[#185E0E] font-semibold ">
            Click here to find out more
          </h1>
        </Link>
      </div>
    </div>
  );
}
