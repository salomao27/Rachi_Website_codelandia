function Cadastro(){
    return(
        <>
        <div className="flex items-center justify-center h-cadastro mt-5 bg-cadastro max-md:flex-col max-md:mt-1">
            <div className="max-md:text-sm">
                <h1 className="font-sora font-semibold text-primary text-5xl max-md:text-2xl max-md:mt-1">Rachi,</h1>
                <h1 className="font-sora font-semibold text-primary text-5xl mt-4 max-md:text-2xl max-md:mt-1">é tudo que você</h1>
                <h1 className="font-sora font-semibold text-primary text-5xl mt-4 max-md:text-2xl max-md:mt-1">precisa em um só lugar.</h1>
                <button className="bg-button_cadastro hover:bg-white hover:text-button_cadastro hover:font-bold hover:duration-500 rounded-3xl px-8 py-2 text-white  font-inter mt-14 drop-shadow-2xl max-md:mt-2">Cadastrar-se</button>
            </div>
            <div className="ml-24 max-md:ml-0">
                <img src="./src/img/rafiki.png" alt="" />
            </div>
            
        </div>
        
        </>
    )
}
export default Cadastro;