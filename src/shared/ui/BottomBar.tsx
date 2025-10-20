import BottomBarUI from './Footer/BottomBarUI'
type Props = {
  useModal: boolean;
  onToggleModal: () => void;
};


const BottomBar = ({useModal,onToggleModal}:Props) => {
    const socialMedia = ["/img/Facebook.svg","/img/Instagram.svg","/img/WhatsApp.svg"];
  return (
    <div>
        <BottomBarUI socialMedia={socialMedia} onToggleModal={onToggleModal}/>
    </div>
  )
}
export default BottomBar