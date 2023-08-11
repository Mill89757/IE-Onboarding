export default function EntranceCard(props) {
  const { id, title, description } = props;

  return (
    <div 
      className={`w-full bg-[#F7F9F7] rounded-xl flex flex-col justify-start items-center cursor-pointer transition-all duration-500 ease-in-out px-20`}
      onClick={() => props.onToggle(id)}
    >
      <h1 className="text-[#185E0E] text-2xl md:text-4xl font-bold sm:text-3xl italic mt-4">
        {title}
      </h1>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${props.isOpen ? 'max-h-screen' : 'max-h-0'} p-4`}
      >
        <div>
          <h1 className="text-lg font-normal mt-4 text-gray-800">{description}</h1>
        </div>
      </div>

      <div className="mt-auto mb-4 flex justify-center items-center text-gray-800">
        {props.isOpen ? (
          <>
            Click to close 
            <span className="ml-2">↑</span>
          </>
        ) : (
          <>
            Click to find out more 
            <span className="ml-2">↓</span>
          </>
        )}
      </div>
    </div>
  );
}
