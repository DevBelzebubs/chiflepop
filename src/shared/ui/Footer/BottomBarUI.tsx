import "./BottomBarStyles.css"
type Props = {
  socialMedia: string[];
  onToggleModal: () => void;
};
const BottomBarUI = ({socialMedia,onToggleModal}:Props) => {
  return (
    <div className='relative w-full bg-no-repeat bg-cover z-10 flex justify-center' style={{backgroundImage:"url('/img/BottomBarBackground.svg')"}}>
        <div className='flex flex-col md:flex-row items-center justify-between px-6 md:pl-10 gap-10 md:gap-[30vw] mt-[250px] md:mt-[20vh] mb-10'>
            <img src='/img/LogoFotter.svg' width={"320px"} alt="Chiflepop Logo" className="hover:scale-105 transition-transform duration-300"/>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-12 bg-white rounded-[30px] p-10 w-[90%] md:w-auto' style={{boxShadow: "0 8px 24px rgba(0,0,0,0.12)"}}>
                <div className='flex flex-col gap-6 text-center md:text-left'>
                    <h2 className='text-2xl font-bold text-gray-800'>Contáctanos</h2>
                    <div className='flex flex-col gap-3 text-gray-700'>
                        <p className='flex items-center gap-2 justify-center md:justify-start'>
                          <span className='font-semibold'>Telf:</span> 923 049 677
                        </p>
                        <p className='flex items-center gap-2 justify-center md:justify-start'>
                          <span className='font-semibold'>Email:</span> contactos@chiflepop.com
                        </p>
                        <p className='flex items-center gap-2 justify-center md:justify-start'>
                          <span className='font-semibold'>Horario:</span> 24 horas
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center md:items-start gap-4'>
                    <h2 className='text-2xl font-bold' style={{color:"#50AE36"}}>Conecta con nosotros</h2>
                    <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
                        {socialMedia.map((opcion, index)=>(
                            <img key={index} src={opcion} width={'46px'} alt="Social media" className='hover:scale-110 transition-transform duration-200 cursor-pointer'/>
                        ))}
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-3 mt-4 libro-reclamaciones'>
                        <img src='/img/libro-abierto.svg' width={"36px"} alt="Libro de reclamaciones"/>
                        <p className='text-gray-600 font-semibold cursor-pointer' onClick={onToggleModal}>Libro de reclamaciones</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default BottomBarUI;