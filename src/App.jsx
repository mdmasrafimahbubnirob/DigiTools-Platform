
import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>

      <Home></Home>
      <Toaster

        containerStyle={{
          top: 67,
        }}
        toastOptions={{
          className: '',
          style: {
            border: '2px solid gray',
            padding: '16px',
            color: '#713200',
          },
        }}
      />

    </>
  )
}

export default App
