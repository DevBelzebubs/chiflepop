import Elements from "../shared/Elements";
import TopBar from "../shared/TopBar";
import Carousel from "../ui/carousel/Carousel";
import BottomBarUI from "../ui/Footer/BottomBarUI";

const AppLayout = () => {
  return (
    <div className='scrollbar-hide overflow-y-scroll w-full overflow-x-hidden'>
      <TopBar />
      <Carousel />
      <Elements />
      <BottomBarUI/>
    </div>
  )
}
export default AppLayout;