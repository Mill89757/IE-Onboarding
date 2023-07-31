export default function KnowledgeCard(props) {
  const title = props.title;
  const description = props.description;

  return (
    <div className="w-[463px] h-[461px] bg-[#F7F9F7] rounded-xl flex justify-center items-center">
      <div className="space-y-[70px]">
        <h1 className="text-[#185E0E] text-9xl font-bold sm:text-4xl italic h-[50px] text-center">
          {title}
        </h1>
        <h1 className="text-center text-lg font-semibold">{description}</h1>
        <div
          className="w-[400px] h-[70px] rounded-[25px] flex justify-center items-center bg-[#C2DDBF] cursor-pointer italic"
          onClick={console.log("knowledge card")}
        >
          <h1 className="text-[#185E0E] font-semibold ">
            Click here to find out more
          </h1>
        </div>
      </div>
    </div>
  );
}
