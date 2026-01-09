import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-6 align-center text-sm">
      <Link href="/" className="hover:text-(--hover-colour)">
        {"// home"}
      </Link>
      <Link href="/" className="hover:text-(--hover-colour)">
        {"// skills"}
      </Link>
    </nav>
  );
}
