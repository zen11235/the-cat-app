// src/app/layout.js
import Navbar from "./components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* Footer içeriği vb. ekleyebilirsiniz */}
    </div>
  );
}
