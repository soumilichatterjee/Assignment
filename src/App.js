import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/Error';
// import ProductDetailPage from './pages/ProductDetail';
import TextScreenPage from './pages/TextScreen';
//import {createRoutesFromElements,Route} from 'react-router-dom' older version 
import SplashScreenPage from './pages/SplashScreen';
// import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import PhotoScreenPage from './pages/PhotoScreen';

import AuthScreenPage from './pages/AuthScreen'

// const routeDefinitions = createRoutesFromElements(
// <Route>
// <Route path='/' element={<Homepage/>}/>
// <Route path='products' element={<ProductsPage/>}/>
// </Route>
// ) //old

//const router = createBrowserRouter(routeDefinitions) //old

const router= createBrowserRouter([
  {
    path:'/', element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      // {path: '/', element:<Homepage/>},
      {index:true, element:<SplashScreenPage/>},
      {path:'/authscreen', element:<AuthScreenPage/>},

      {path:'/photoscreen', element:<PhotoScreenPage/>},
      // {path:'/products', element:<ProductsPage/>,},
{path:'/textscreen', element: <TextScreenPage/>},



      // {path:'/products/:productId', element:<ProductDetailPage/>}
    
    ]
  },


 
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
