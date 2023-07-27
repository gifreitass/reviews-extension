import HomePage from "../components/HomePage";
import PlatformPage from "../components/PlatformPage";
import ReviewsPage from "../components/ReviewsPage";
import { useSelector } from "react-redux";
import { iState } from "../store/types/store.interface";

const App: React.FC = () => {
  const step = useSelector((state: iState) => state.step.stepInformation)

  return (
    <>
      {step === '1' && <HomePage />}
      {step === '2' && <PlatformPage />}
      {step === '3' && <ReviewsPage />}
    </>
  )
}

export default App
