
function Aplicativo(){
    return(
        <>

        <div className="bg-cadastro pt-28 flex justify-center max-md:pt-8 ">
            <div className="flex flex-col justify-center max-md:items-center">

            <h1 className="font-sora font-semibold text-primary text-4xl max-md:text-2xl max-md:w-72 max-md:text-center">Baixe nosso app para desfrutar mais!</h1>
           
            <p className="text-base text-header_text pt-6 w-paragraph_app mr-96 max-md:mr-0 max-md:w-80 max-md:text-sm">Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>
            <div className="mt-6">
            <button className="bg-primary w-48 rounded-lg font-sora text-white max-md:w-32 py-1"><p className="pt-2 max-md:text-sm">Get it on </p><span className="max-md:text-sm">Google play</span></button>

            <button className="bg-primary w-48 rounded-lg font-sora text-white ml-6 max-md:w-32 max-md:text-sm py-1"><p className="pt-2">Download on the</p><span className="max-md:text-sm">App Store</span></button>
            </div>
            
            </div>

            <img src="amico.png" alt="" className="mr-6 max-md:hidden"/>
    
        </div>
        </>
    )
}

export default Aplicativo
