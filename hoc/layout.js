import {useState} from 'react'
import styles from './layout.module.css'
import Header from '../components/header/header'
import SideDrawer from '../components/navigation/sidedrawer/sidedrawer'
import Footer from '../components/footer/footer'
import Head from 'next/head'



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
        <>
        <Head>
            <title>Paisaje Centinela</title>
        </Head>
        <div className={styles.container}>
         <Header clicked={toggleSideDrawerHandler}/>
         <SideDrawer  open={sideDrawer.showSideDrawer} closed={sideDrawerCloseHandler}/>
         {children}
         <Footer/>
        </div>
        </>
    )
}

export default layout
