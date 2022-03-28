import '../styles/globals.css'
import {useState} from 'react'
import AppContext from '../Appcontext'

function MyApp({ Component, pageProps }) {
  const [status, setstatus] = useState(false)
  return(
    <AppContext.Provider value={{status,setstatus}}>
      <Component {...pageProps} />
    </AppContext.Provider>  
    
  ) 
}

export default MyApp
