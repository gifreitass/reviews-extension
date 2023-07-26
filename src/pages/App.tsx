// import HomePage from "../components/HomePage";
import { useSelector } from "react-redux";
import PlatformPage from "../components/PlatformPage";
import { iState } from "../store/types/store.interface";
import HomePage from "../components/HomePage";

const App: React.FC = () => {
  const step = useSelector((state: iState) => state.step.stepInformation)

  return (
    <>
      {step === '1' && <HomePage />}
      {step === '2' && <PlatformPage />}
    </>
  )
}

export default App
