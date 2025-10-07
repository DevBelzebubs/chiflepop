import Elements from "../shared/Elements";
import TopBar from "../shared/TopBar";
import Carousel from "../ui/carousel/Carousel";

const AppLayout = () => {
  return (
    <div className='scrollbar-hide overflow-y-scroll w-full overflow-x-hidden'>
      <TopBar />
      <Carousel />
      <Elements />
    </div>
  )
}
export default AppLayout;