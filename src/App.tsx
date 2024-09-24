import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DefaultRoutes } from './routes'
import { MyProvider } from './libs/context'

function App() {
  return (
    <>
      <MyProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {DefaultRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </Router>
      </MyProvider>
    </>
  )
}

export default App
