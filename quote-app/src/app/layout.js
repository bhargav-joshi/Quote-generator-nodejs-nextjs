// src/app/layout.js
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "50px", background: "#333", color: "#fff" }}>
          <h1>Welcome to the Quote Generator App</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: "10px", background: "#333", color: "#fff", marginTop: "10px" }}>
          <p>Created with ❤️ by Bhargav J</p>
        </footer>
      </body>
    </html>
  );
}
