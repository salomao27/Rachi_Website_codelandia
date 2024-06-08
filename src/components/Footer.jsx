export default function Footer(){
    return(
        <>
        <div className=" mt-16 ">
        <div className="relative  max-md:bg-primary">
            <img src="./src/img/footer.png" alt="" className="w-screen max-md:hidden "/>
           
            <div className="absolute top-1/3 left-1/3 text-white max-md:left-2 max-md:text-black">
            <div className="flex flex-col mb-16">
                    <h1 className="font-semibold font-sora text-white text-center text-5xl mb-7 max-md:text-black">Contato</h1>
                    <p className="text-center text-xl max-md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                <div className="font-sora mt-24 text-center max-md:flex max-md:flex-col max-md:items-center">
                <input type="text" placeholder="Seu melhor e-mail" className="h-8 w-96 rounded-sm bg-transparent border-b-4 border-gray-500 max-md:w-44" />
                <button className="bg-button_cadastro rounded-full px-10 py-2 p ml-4 font-base max-md:w-56 max-md:mt-6">Enviar</button>
                </div>
            </div>
            
            </div>
            
           </div>
        </div>
        </>
    )
}