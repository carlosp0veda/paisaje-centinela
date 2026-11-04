import {useState} from 'react'
import styles from './layout.module.css'
import Header from '../components/header/header'
import SideDrawer from '../components/navigation/sidedrawer/sidedrawer'
import Footer from '../components/footer/footer'



function layout({children}) {

      const [sideDrawer, setSideDrawer] = useState({
    showSideDrawer: false,
  });

  const sideDrawerCloseHandler = () => {
    setSideDrawer({ showSideDrawer: false });
  };

  const toggleSideDrawerHandler = () => {
    setSideDrawer((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
    return (
        <div className={styles.container}>
         <Header clicked={toggleSideDrawerHandler} open={sideDrawer.showSideDrawer}/>
         <SideDrawer  open={sideDrawer.showSideDrawer} closed={sideDrawerCloseHandler}/>
         {children}
         <Footer/>
        </div>
    )
}

export default layout
