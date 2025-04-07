import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPasswordValid) {
      console.log("Formulário válido. Enviando...");
    }
  };

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    setIsPasswordValid(hasMinLength && hasUppercase && hasNumber);
    return { hasMinLength, hasUppercase, hasNumber };
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setSenha(newPassword);
    validatePassword(newPassword);
  };

  // const navigation = [
  //   { componente: "/signup", name: "Signup" },
  //   { componente: "/", name: "Home" },
  // ];

  const navigate = useNavigate();
  const irParaSignUp = () => {
    navigate("/");
  };
  const irParaHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 p-4">
      <div className="w-full max-w-[660px] bg-white shadow-xl rounded-2xl p-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          <h1 className="text-5xl font-bold text-neutral-800 mb-10 tracking-tight">
            Aluritter
          </h1>

          <div className="w-full space-y-6 relative">
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="email"
                placeholder="email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 pl-14 pr-5 border-2 border-neutral-200 rounded-xl text-lg text-neutral-800
                focus:outline-none focus:border-neutral-500
                transition-all duration-300 ease-in-out"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={senha}
                onChange={handlePasswordChange}
                required
                className={`w-full h-14 pl-14 pr-14 border-2 rounded-xl text-lg text-neutral-800
                ${
                  isPasswordValid
                    ? "border-neutral-200 focus:border-neutral-500"
                    : "border-red-200 focus:border-red-500"
                }
                focus:outline-none
                transition-all duration-300 ease-in-out`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </div>

            {senha && !isPasswordValid && (
              <div className="text-sm text-red-500 space-y-1 mt-2">
                <p>A senha deve conter:</p>
                <ul className="list-disc list-inside">
                  <li>Pelo menos 8 caracteres</li>
                  <li>Pelo menos uma letra maiúscula</li>
                  <li>Pelo menos um número</li>
                </ul>
              </div>
            )}
          </div>

          <button
            onClick={irParaHome}
            type="submit"
            disabled={!isPasswordValid}
            className="w-[200px] h-12 bg-neutral-800 text-white text-lg font-semibold rounded-b-md
            hover:bg-neutral-700 transition-colors duration-300 mt-8 mb-6
            disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            Entrar
          </button>

          <p className="text-base text-neutral-600">
            Ainda não possui uma conta?{" "}
            <a
              onClick={irParaSignUp}
              className="text-neutral-800 hover:underline font-semibold"
            >
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
