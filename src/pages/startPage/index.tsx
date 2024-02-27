import { loginPhoto } from "../../assets/images";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="relative h-screen ">
      <img src={loginPhoto} alt="" className="w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="bg-white p-10 rounded-3xl w-full ">
          <div className="justify-center text-center">
            <p className="  text-4xl">Welcome to</p>
            <p className="  text-4xl font-bold">the crossfit e-commerce</p>
          </div>

          <div className="mt-10 ml-8">
            <Link to="/login">
              <button className="bg-black text-white rounded-2xl w-60 h-20 text-2xl font-bold">
                Lets start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
