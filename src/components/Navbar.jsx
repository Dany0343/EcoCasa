import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex justify-between items-center text-black px-24 py-3">
      <Link href={"/"}><h1 className="text-xl front-bold">EcoCasa</h1></Link>
      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/auth/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/auth/register"}>Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/"}>Home Page</Link>
            </li>
            <li>
              <Link href={"/api/auth/signout"}>Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
