import {useState} from 'react'
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

  const sideDrawerOpenHandler = () => {
    setSideDrawer({ showSideDrawer: true });
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
            <meta name="description" content="Paisaje Centinela" />
        </Head>
         <Header clicked={toggleSideDrawerHandler}/>
         <SideDrawer  open={sideDrawer.showSideDrawer} closed={sideDrawerCloseHandler}/>
         {children}
         <Footer/>

        </>
    )
}

export default layout
