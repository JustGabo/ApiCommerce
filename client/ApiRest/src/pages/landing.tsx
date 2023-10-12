import Header from "../components/header";

function Landing() {
  return (
    <div className="flex flex-col h-screen pt-5">
      <Header />
      <div className="h-[calc(100%-50px)]  lg:w-[70%] mb-20 lg:m-auto  flex flex-col gap-5  lg:items-center justify-center">
      <h1 className="text-4xl lg:text-7xl"><span className="text-purple-500">Api-</span>Commerce</h1>
      <p className="text-sm lg:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolorum illo nisi at sint possimus? Repudiandae dolor quam officiis. Non totam nemo quibusdam facilis atque cum hic, ut facere molestias.</p>
      </div>
    </div>
  );
}

export default Landing;
