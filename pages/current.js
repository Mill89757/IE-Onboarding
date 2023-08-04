import Header from "../src/components/Header";
import EntranceCard from "../src/components/EntranceCard";

export default function Current() {
  return (
    <div>
      <Header index={1} />
      <div className="h-[calc(100vh_-_80px)]">
        <div className="flex items-center justify-center gap-x-[86px] h-full">
          <EntranceCard
            title="Average Electricity Usage "
            description="What is the average electricity bill?"
            link="/currentDetails"
          />
          <EntranceCard
            title="Waste Trend "
            description="What is the Waste Trend?"
            link="/currentDetails"
          />
        </div>
      </div>
    </div>
  );
}
