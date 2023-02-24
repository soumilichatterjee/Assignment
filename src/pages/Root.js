import {Outlet} from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

import SplashScreen from '../components/SplashScreenPage';

function RootLayout(){
return <SplashScreen>
<MainNavigation/>
<main>
<Outlet/>
</main>
</SplashScreen>
}

export default RootLayout;