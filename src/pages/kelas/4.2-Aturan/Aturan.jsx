import "./Aturan.css";

import PreTest from "./DetailA/PreTest";
import Quiz from "./DetailA/Quiz"; 
import UjianAkhir from "./DetailA/UjianAkhir";

export default function Aturan() {
  return (
    <>
      <div>
        <main className="flex flex-row w-full h-max box-border bg-white max-sm:flex-col">
          {/* <PreTest /> */}
          {/* <Quiz /> */}
          <UjianAkhir/>
        </main>
      </div>
    </>
  );
}
