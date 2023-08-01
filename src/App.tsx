import SignUp from "./Components/SignUp";
import Thanks from "./Components/Thanks";
import { useState } from "react";
function App() {
  const [signedUp, setSignedUp] = useState(false);

  return (
    <>
    {!signedUp ? <SignUp /> : <Thanks />}
    </>
  )
}

export default App
