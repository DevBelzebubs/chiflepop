import "./BottomBarStyles.css"
type Props = {
  socialMedia: string[];
  onToggleModal: () => void;
};
const BottomBarUI = ({socialMedia,onToggleModal}:Props) => {
  return (
    <div className='relative w-full bg-no-repeat bg-cover z-10 flex justify-center' style={{backgroundImage:"url('/img/BottomBarBackground.svg')"}}>
        <div className='flex flex-col md:flex-row items-center justify-between px-6 md:pl-10 gap-10 md:gap-[30vw] mt-[250px] md:mt-[20vh] mb-10'>
            <img src='/img/LogoFotter.svg' width={"320px"}/>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-10 bg-white rounded-[30px] p-8 shadow-[0_4px_10px_rgba(0,0,0,0.25)] w-[90%] md:w-auto'  style={{boxShadow: "0 4px 10px 0 rgb(0,0,0,0.25)"}}>
                <div className='flex flex-col gap-5 text-center md:text-left'>
                    <h2 style={{fontSize: "24px",fontWeight: "bold"}}>Contáctanos:</h2>
                    <div className='flex flex-col gap-2 font-bold' style={{fontWeight: "bold"}}>
                        <p>Telf: 923 049 677</p>
                        <p>Email: contactos@chiflepop.com</p>
                        <p>Horario: Atención las 24 horas</p>
                    </div>
                </div>
                <div className='flex flex-col items-center md:items-start gap-2'>
                    <h2 className='mb-4 text-[24px] font-bold text-[#50AE36]' style={{fontSize: "24px", color:"#50AE36", fontWeight: "bold"}}>Conecta con nosotros</h2>
                    <div className='flex gap-6 flex-wrap justify-center md:justify-start'>
                        {socialMedia.map((opcion)=>(
                            <img src={opcion} width={'42px'}/>
                        ))}
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-2 mt-3 libro-reclamaciones'>
                        <img src='/img/libro-abierto.svg' width={"34px"}/>
                        <p style={{color: "#7E7E7E", fontWeight: "bold"}} onClick={onToggleModal}>Libro de reclamaciones</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default BottomBarUI;