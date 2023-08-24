const HeaderCard = (props) => {
  return (
    <span className='font-nunito'>

      <div class="max-w-sm rounded overflow-hidden justify-center items-center flex flex-col">
        <img class="w-[100px] h-[100px]" src={props.img} alt={props.title}></img>
        <div class="px-6 py-4 flex flex-col items-center justify-center">
          <h2 class="font-black text-gray-700/80 text-xl mb-2 mt-3">{props.title}</h2>
          <p class="text-gray-600 text-center opacity-80">
            {props.desc}
          </p>
        </div>
      </div>    

    </span>
    
  )
}


export default HeaderCard