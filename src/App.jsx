import AppInsurance from "./components/AppInsurance"
import { QuoterProvider } from "./context/QuoterProvider"

function App() {


  return (
    <QuoterProvider>
        <AppInsurance />
    </QuoterProvider>
  )
}

export default App
