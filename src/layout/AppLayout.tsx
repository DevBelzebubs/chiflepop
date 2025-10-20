import { useState } from "react";
import Elements from "../shared/Elements";
import TopBar from "../shared/TopBar";
import BottomBar from "../shared/ui/BottomBar";
import Carousel from "../shared/ui/carousel/Carousel";
import Modal from "../components/ReclamacionesModalComponent/Modal";

const AppLayout = () => {
  const [modal,setModal] = useState(false);
    const handleModal = () => setModal(!modal);
  return (
    <div className='scrollbar-hide overflow-y-scroll w-full overflow-x-hidden'>
      <TopBar/>
      <Carousel/>
      <Elements/>
      <BottomBar useModal={modal} onToggleModal={handleModal}/>
      {modal && (
        <Modal/>
      )}
    </div>
  )
}
export default AppLayout;