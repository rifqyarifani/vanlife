import React from "react";

const Login = () => {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <div className=" w-4/6 mx-auto p-8 text-[#161616] flex flex-col items-center gap-8 bg-[#FFF7ED]">
        <h2 className=" text-4xl font-bold mb-4">Sign in to your account</h2>
        <form onSubmit={handleSubmit} className=" flex flex-col w-full">
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
            className=" border h-12 indent-3 shadow font-normal focus:outline-none rounded-t-md"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={loginFormData.password}
            className=" border h-12 indent-3 shadow font-normal focus:outline-none rounded-b-md"
          />
          <button className=" bg-[#FF8C38] rounded-md h-14 mt-8 text-white">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
