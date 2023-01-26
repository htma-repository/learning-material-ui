import { Container } from "@mui/material";

import ButtonMUI from "./components/ButtonMUI";
import TypographyMUI from "./components/TypographyMUI";

function App() {
  return (
    <Container maxWidth="lg" component={"section"}>
      <ButtonMUI />
      <TypographyMUI />
    </Container>
  );
}

export default App;
