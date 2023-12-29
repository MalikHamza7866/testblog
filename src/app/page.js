import Image from 'next/image'
import NavBar from './components/NavBar'
import Posts from './components/Post'
import Carousels from './components/Carousels'

export default function Home() {
  return (
   <div>
   <NavBar />
   <Carousels />
   <Posts />
   </div>
    )
}
