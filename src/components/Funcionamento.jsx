function Card({imagePath, title, description}){
    return(
        <>
        <div className=" w-42 flex flex-col items-center mx-24 mt-20">
        <img src={imagePath} className="w-16"/>
        <p className="font-sora text-lg font-semibold mt-2 text-primary">{title}</p>
        <p className="font-sora text-base mt-2">{description}</p>
        </div>
        
        </>
    )
}


function Funcionamento(){
    return(
    <>
    <div className="mb-40 flex flex-col ">
    <div className="text-center mt-14  ">
            <span className="text-4xl font-semibold text-primary font-sora">Como funciona</span>
    </div>
        <div className="flex justify-center items-center max-md:flex-col max-md:justify-center">
        <Card 
            imagePath="./src/img/user.png" 
            title="Crie conexões" 
            description="Lorem ipsum dolor sit amet,
            consecteteu."/>

        <Card 
            imagePath="./src/img/security.png" 
            title="100% gratuito" 
            description="Lorem ipsum dolor sit amet,
            consecteteu."/>
        <Card 
            imagePath="./src/img/happy.png" 
            title="Compartilhamento" 
            description="Lorem ipsum dolor sit amet,
            consecteteu."/>
        </div>
    </div>
        
        
    </>
        
    )
}
export default Funcionamento