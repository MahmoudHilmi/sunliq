export default function Navbar() {
  const navLinks = [
    { label: "How it Works" },
    { label: "Impact" },
    { label: "Devices" },
    { label: "docs" },
    { label: "Pricing" },
  ];

  return (
    <header className="    ">
      <nav className="">
        <img src="/logo-white.PNG" className="h-11 w-11 m-3" alt="sunliq" />

        <ul className="">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.label}> {link.label}</a>
            </li>
          ))}
        </ul>

  
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="search img" />
          </button>

          <button>
            <img src="/cart.svg" alt="cart img" />
          </button>
        </div>
      </nav>
    </header>
  );
}
