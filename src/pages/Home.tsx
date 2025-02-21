import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


export function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#9492db] to-[#7164c0] text-white">
      <h1 className="text-4xl font-bold mb-4">
      <TypeAnimation
        sequence={["Welcome to Brainly", 2000, "", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        />
      </h1>
      <div className="flex gap-4">
        <Link to="/signup" className="px-4 py-2 bg-white text-purple-600 rounded-lg shadow-md">Signup</Link>
        <Link to="/signin" className="px-4 py-2 bg-white text-indigo-600 rounded-lg shadow-md">Signin</Link>
      </div>
    </div>
  );
}

export default Home;
