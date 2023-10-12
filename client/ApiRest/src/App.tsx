import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Landing from './pages/landing'
import GetPage from './pages/get'
import Footer from './components/footer'
import ReqsPages from './pages/reqs'

function App() {

  return (
    <div className='w-[95%] m-auto '>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/> 
      <Route path='/get' element={<GetPage/>}/>
      <Route path='/reqs' element={<ReqsPages/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
