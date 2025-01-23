import Counter from "@/components/Counter/Counter";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col font-bold h-full min-h-96 justify-center items-center">
      <Counter />
    </div>
  );
};

export default Home;
