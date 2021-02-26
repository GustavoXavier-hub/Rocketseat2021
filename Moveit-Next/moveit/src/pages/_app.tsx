

import '../styles/global.css'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdowContext'


function MyApp({ Component, pageProps }) {



  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
