import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  {
    title: "about",
    href: "/",
  },
  {
    title: "work",
    href: "/work",
  },
];

export function NavBar() {
  return (
    <nav className="flex items-center w-full justify-between">
      <ul className="flex">
        {navItems.map(({ title, href }) => (
          <li key={title} className="mr-2">
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
      <ModeToggle />
    </nav>
  );
}
