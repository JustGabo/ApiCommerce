import {Braces} from 'lucide-react'
import ResponseSect from '../components/response'
import TrySect from '../components/try'
import {Link} from 'react-router-dom'


const GetPage = () => {
  return (
    <div className="flex flex-col gap-24 py-5">
        <Link to={'http://localhost:5173'}>
        <Braces/>
        </Link>
        <main className='flex flex-col gap-20'>
        <TrySect/>
        <ResponseSect/>
        </main>

    </div>
  )
}

export default GetPage