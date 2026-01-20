import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/Home'
import RestPage from './pages/RestaurantPage'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/restaurantes/2',
    element: <RestPage />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <RouterProvider router={rotas} />
      </div>
    </>

  )
}

export default App
