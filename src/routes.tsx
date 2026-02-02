import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import RestPage from './pages/RestaurantPage'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    { 
        path: '/restaurantes/:id',
        element: <RestPage />
    }
])

export default routes