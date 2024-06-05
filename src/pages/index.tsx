import Link from "next/link"

export default function Home() {
  return (

    <main className="p-4">
      <div className="flex">
        <h3>
          Bienvenido al Tester Web!
        </h3>
      </div>

      <div className="flex space-x-4">
        <Link href={"/contact"}>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Ir a Contacto
          </button>
        </Link>
        <Link href={"/login"}>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Volver al Login
          </button>
        </Link>
      </div>
    </main>
  );
}
