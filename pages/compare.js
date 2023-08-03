import Header from "../src/components/Header";

export default function Compare(props) {
  // const user_value = props.user_value;
  const user_value = 4500;

  const dummy_data = [
    7982.33, 6419.33, 6399.17, 4588.17, 4513.83, 4015.67, 3907.5, 3833.17,
    3558.33, 3499.33, 3442.17, 3223.67, 3039.67, 2975.83,
  ];

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart",
        },
      },
    },
  };

  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = Utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Small Radius",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div>
      <Header index={2} />
      <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center">
        <div className="w-[801px] h-[572px]">
          <h1 className="text-[#185E0E] text-4xl font-medium italic w-full">
            Where are you comparing with other’s carbon footprint?
          </h1>
          <div className="w-full h-[512px] flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
}
