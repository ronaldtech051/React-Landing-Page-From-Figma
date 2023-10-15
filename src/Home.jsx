import Hero from "./components/Hero";
import Group1 from "./components/Group1";
import Section2 from "./components/Section2";

const Home = () => {
  return (
    <div>
      <main className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <Hero />
        <Group1 />
        <Section2 />
      </main>
    </div>
  );
};

export default Home;
