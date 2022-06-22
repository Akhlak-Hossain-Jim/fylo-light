import styled from "styled-components";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import StayProductive from "./components/StayProductive";
import Subscribe from "./components/Subscribe";

export default function App() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <StayProductive />
        <Subscribe />
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
