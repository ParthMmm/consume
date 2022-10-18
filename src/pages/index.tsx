import type { NextPage } from "next";
import CreateButton from "../components/Create/CreateButton";

const Home: NextPage = () => {
  return (
    <>
      <main className="h-screen">
        <div className="h-full ">
          <div className="absolute top-[25%] p-20">
            <div className="flex flex-row items-center">
              <h1 className="text-8xl font-bold italic">consume</h1>
              <CreateButton />
            </div>
            <div className="mt-12 flex flex-col items-start justify-start space-y-2"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
