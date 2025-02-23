import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>Next+MongoDB CRUD</Link>
            <Link className="bg-white p-2" href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default NavBar