import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-[358px] px-4">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-[26px] text-center">
            <h1 className="text-[32px] font-bold text-[#4A4A4A]">Aluritter</h1>
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[56px] px-4 py-2 border border-[#D3D3D3] rounded-[8px] text-[16px] text-[#4A4A4A] focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full h-[56px] px-4 py-2 border border-[#D3D3D3] rounded-[8px] text-[16px] text-[#4A4A4A] focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full h-[56px] bg-[#00D261] text-white text-[16px] font-bold rounded-[8px] hover:bg-[#00B050] transition-colors duration-300"
          >
            Criar uma nova conta
          </button>

          <div className="text-center mt-4">
            <p className="text-[16px] text-[#4A4A4A]">
              Já possui uma conta?{" "}
              <a href="#" className="text-[#00D261] hover:underline">
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
