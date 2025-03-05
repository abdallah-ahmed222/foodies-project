import Image from "next/image";
import Link from "next/link";
import imageLogo from "../../app/icon.png";
import classes from "./main-header.module.css";
import MainHeaderBackGround from "./main-header-back-ground";
import NavLink from "./NavLink";
export default function Header() {
  return (
    <>
      <MainHeaderBackGround />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={imageLogo} alt="logo" width={50} height={50} priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
