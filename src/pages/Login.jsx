import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../store/auth-context";

const Login = () => {
  const { login, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => login(userCredential.user.accessToken))
      .catch((error) => {
        setErrorMsg(error);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col h-[100dvh] justify-center items-center gap-[20px]">
      {isLoading && <p>Loading.....</p>}
      <div className="flex rounded-3xl gap-[4rem] border-gray-500 p-10 bg-white">
        {/* Image display */}
        <div className="h-[500px] ">
          <img
            className="h-full w-full rounded-[3rem]"
            src="/assets/image.jpg"
            alt=""
          />
        </div>
        {/* right hand side */}
        <div className=" flex flex-col gap-4 justify-center items-center px-8">
          Welcome Back
          <form onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-2">
              <div className="w-[300px]">
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="p-2 border h-[3rem] w-full rounded-lg bg-transparent"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="w-[300px]">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="p-2 h-[3rem] border w-full rounded-lg bg-transparent"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <button className="p-3 w-full rounded-full bg-gray-400 mt-4">
              Log in
            </button>
          </form>
          <div>
            <p>
              Don't have an account? <span className="text-[]">Sign Up</span>
            </p>
          </div>
          {errorMsg && (
            <p className="text-red-500">
              Incorrect Email / Password. Try Again
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
