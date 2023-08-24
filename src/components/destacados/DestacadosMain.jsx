import DestacadosCard from "./DestacadosCard"

const Destacados = (props) =>{

  const destacadoItems = props.datos.slice(0, 6);

  return (
    <div className="w-screen bg-gray-100 h-full flex  flex-col justify-center items-center">
      <div className="w-full flex pb-10 items-center justify-center">
      <div className="mt-12 mb-6 border-2 border-gray-700/60 w-fit h-fit flex px-4 py-4 boton relative">
        <h1 className="font-bold text-3xl text-gray-700/80">DESTACADOS</h1>
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-500 border-8 border-gray-100"></span>
      </div>
    </div>

      <div className="grid grid-rows-none grid-cols-3 gap-20  px-10">
        {destacadoItems.map(item => (
        <DestacadosCard key={item} title={item.title} desc={item.description} url={item.url} cost={item.cost} />
        ))}
        </div>

      
    </div>
  )

}

export default Destacados