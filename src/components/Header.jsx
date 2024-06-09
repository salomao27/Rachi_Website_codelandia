function Header(){
    return(
        <>
        <div className="flex items-center justify-center mt-6  max-md:w-full" >
            <img src="./public/rachi_icon.png" alt="" />
            <p className="font-sora ml-2 text-primary font-semibold text-2xl">Rachi</p>
            <span className="max-md:hidden">
                <a href="" className="ml-4 mr-16 ml-header text-header_text font-inter text-lg hover:text-button_cadastro hover:font-semibold hover:duration-500">Funcionalidade</a>
                <a href="" className="mr-16 text-header_text font-inter text-lg hover:text-button_cadastro hover:font-semibold hover:duration-500">App</a>
                <a href="" className="mr-16 text-header_text font-inter text-lg hover:text-button_cadastro hover:font-semibold hover:duration-500">Planos</a>
                <a href="" className="mr-16 text-header_text font-inter text-lg hover:text-button_cadastro hover:font-semibold hover:duration-500">Contatos</a>
            </span>
        </div>
        </>
    )
}
export default Header;