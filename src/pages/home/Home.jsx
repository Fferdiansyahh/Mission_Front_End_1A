import "../login/Login.css";
import Container from "../navbar/Container";
import Home2 from "./home-2/Home2";
import Home1 from "./Home1";
import Home3 from "./Home3";

export default function Home() {
  return (
    <>
      <Container>
        <main className="mt-30 mb-16 mx-30 max-sm:my-10 max-sm:mx-5 border-box">
          <Home1 />
          <Home2 />
          <Home3 />
        </main>
      </Container>
    </>
  );
}
