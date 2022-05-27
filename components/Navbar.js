import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <ul className="menu-bar">
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a> About </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a> Contact </a>
            </Link>
          </li>
          
          <li>
            <Link href="/login">
              <a> Login </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
