import Router from "./routes";
import { Global } from '@emotion/react';
import { reset } from './commons/GlobalStyles'

function App() {
  return (
    <>
      <Global styles={reset} />
      <Router />
    </>
  );
};

export default App;
