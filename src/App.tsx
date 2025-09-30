import './App.css'
import Elements from './shared/Elements'
import TopBar from './shared/TopBar'
import Carousel from './ui/carousel/Carousel'

function App() {
  return (
    <div className='scrollbar-hide overflow-y-scroll w-full'>
      <TopBar></TopBar>
      <Carousel></Carousel>
      <Elements></Elements>
    </div>
  )
}

export default App
