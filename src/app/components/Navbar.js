import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Ana Sayfa</a>
          </Link>
        </li>
        {/* Diğer linkler */}
      </ul>
    </nav>
  );
}
