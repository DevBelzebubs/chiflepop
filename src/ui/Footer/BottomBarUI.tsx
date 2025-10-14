import React from 'react'

const BottomBarUI = () => {
    const socialMedia = ['/img/Facebook.svg','/img/Instagram.svg','/img/WhatsApp.svg']
  return (
    <div className='relative w-full bg-no-repeat bg-cover z-50 flex justify-center' style={{backgroundImage:"url('/img/BottomBarBackground.svg')"}}>
        <div className='flex items-center pl-10 gap-[30vw] mt-[20vh] mb-14'>
            <img src='/img/LogoFotter.svg' width={"320px"}/>
            <div className='flex items-center gap-5 bg-white rounded-2xl p-5 pt-7 pb-7' style={{boxShadow: "0 4px 10px 0 rgb(0,0,0,0.25)"}}>
                <div className='flex flex-col gap-5'>
                    <h2 style={{fontSize: "24px"}}>Contáctanos</h2>
                    <div>
                        <p>Telf:923 049 677</p>
                        <p>Email: contactos@chiflepop.com</p>
                        <p>Horario: Atención las 24 horas</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 style={{fontSize: "24px"}}>Conecta con nosotros</h2>
                    <div className='flex gap-6'>
                        {socialMedia.map((opcion)=>(
                            <img src={opcion} width={'42px'}/>
                        ))}
                    </div>
                    <div className='flex items-center gap-2 mt-1 ml-2'>
                        <img src='/img/libro-abierto.svg' width={"34px"}/>
                        <p>Libro de reclamaciones</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default BottomBarUI;