const DestacadosCard = (props) => {
  return (
    <span className='font-nunito'>
      <div className="max-w-sm rounded shadow-lg bg-white overflow-hidden justify-center items-center flex flex-col relative">
        <div className="max-h-[200px] w-full relative">
          <img className="w-full max-h-[200px] h-auto object-cover" src={props.url} alt={props.title} />
          <div className="bg-black/60 text-white absolute bottom-0 left-0 right-0 p-2 text-center">
            <strong>${props.cost}</strong>
          </div>
        </div>
        
        <div className="px-6 py-4 flex flex-col items-center justify-center">
          <h2 className="font-semibold text-gray-500 text-xl mb-2 whitespace-nowrap">{props.title.toUpperCase()}</h2>          
        </div>
      </div>
    </span>
  );
}

export default DestacadosCard;
