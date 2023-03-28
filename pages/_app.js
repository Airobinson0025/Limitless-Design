import '@/styles/globals.css'
import 'react-quill/dist/quill.snow.css'
import Navbar from './components/Navbar'


export default function App({ Component, pageProps }) {
  
  return (
  <> 
  
     <Navbar />
      <Component {...pageProps} />
    
 
  </>
   )
}
