import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'
import routes from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App