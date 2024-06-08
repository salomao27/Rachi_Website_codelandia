function Card({title, value, text,isfavorite}){
    return( 
    <>
    <div className="bg-cadastro w-card h-card rounded-lg hover:bg-primary hover:duration-500 hover:text-white hover:cursor-pointer mr-4 max-md:mr-0 max-md:mt-4">
        <div className= "mt-20 text-center text-2xl">
            
        <h1 className="font-bold text-2xl">{title}</h1>
        
        {
            isfavorite? (
                <button className="font-nunito bg-button_cadastro text-white rounded-2xl px-6 mt-2 text-xl tracking-widest">
            Preferido
            </button>
            ):null
        }
       
        <div className="flex font-inter justify-center mt-8">
            <p className="text-lg pr-1 font-semibold">R$</p>
            <p className="pt-2 font-bold text-5xl">{value}<span className="text-lg pl-1">/mês</span></p>
            
        </div>
        <p className="text-lg mt-8 text-center w-72 m-auto">{text}</p>
        </div>
        <div className="flex justify-center mt-6">
        <button className="font-nunito bg-button_cadastro text-white rounded-2xl px-24 py-2">Assinar</button>
        </div>
       
    </div>
    </>
  
    )
}

export default function Planos(){
    return(
        <>
        <div className="flex flex-col max-md:items-center">
        <div className="flex flex-col justify-center items-center ">
            <h1 className="font-sora font-bold text-4xl mt-14">Nossos Planos</h1>
            <p className="mt-4 w-text_planos text-center max-md:text-sm max-md:w-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
        </div>
        <div className="flex justify-center mt-16 max-md:flex-col">
        <Card title="Bronze" value="28" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."/>
        <Card title="Prata" value="57" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices." isfavorite={true}/>
        <Card title="Ouro" value="94" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."/>
        </div>
        
     
        </div>
        </>
    )
}