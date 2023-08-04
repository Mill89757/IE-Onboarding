import Header from "../src/components/Header";

export default function CurrentDetails() {
  return (
    <div>
      <Header index={1} />
      <div className="h-[calc(100vh_-_80px)]">
        <div className="flex items-center justify-center w-full h-full">
          <h1 className="text-[#185E0E] text-4xl font-medium italic w-full text-center">
            Show a chart here
          </h1>
        </div>
      </div>
    </div>
  );
}
