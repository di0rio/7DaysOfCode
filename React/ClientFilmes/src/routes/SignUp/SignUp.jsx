import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login tentado", { email, senha });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold text-black">Aluritter</h1>
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#2ECC71] hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            >
              Criar uma nova conta
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Já possui uma conta?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Acessar agora
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
