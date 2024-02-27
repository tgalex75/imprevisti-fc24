import { useRef, useState } from "react";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await passwordReset(emailRef.current.value);
      console.log(error);
      console.log(data);
      setMsg("Password reset has been sent to your email");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h2 className="font-semibold text-lg">Effettua il reset della Password</h2>
      <form
        onSubmit={handleSubmit}
        className="flex h-2/3 md:h-1/2 w-3/4 md:w-1/3 flex-col items-center justify-around rounded-lg border-2 border-[--clr-ter] p-4"
      >
        <div id="email" className="flex w-full flex-col items-center gap-1">
          <label>Email</label>
          <input
            className="rounded-md p-1 font-semibold text-black w-full placeholder:italic placeholder:font-medium"
            type="email"
            placeholder="Inserisci la tua email"
            ref={emailRef}
            required
          />
        </div>
        {msg && (
          <alert onClose={() => setMsg("")} dismissible>
            {msg}
          </alert>
        )}
        <div className="mt-2 text-center w-full">
          <button
            disabled={loading}
            type="submit"
            className="w-full md:w-1/2 h-auto rounded-md border border-[--clr-ter] px-0 md:px-6 py-2 font-semibold hover:bg-[--clr-ter] hover:text-black"
          >
            Invia Link per il Reset
          </button>
        </div>
      </form>
      <div className="w-100 mt-2 text-center font-semibold">
        Vuoi tornare al Login?{" "}
        <Link
          className="block text-[--clr-ter] hover:text-[--clr-prim]"
          to={"/login"}
        >
          Login
        </Link>
      </div>
    </main>
  );
};

export default PasswordReset;