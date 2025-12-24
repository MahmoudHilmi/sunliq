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
        <img src="/logo-white.PNG" className="w-15 h-15 m-3" alt="sunliq" />

        <ul className="">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.label}> {link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button className="bg-[#25D366] flex items-center gap-2 justify-center rounded-3xl p-1.5 w-34 text-white cursor-pointer hover:text-white">
            <img src="./whatsapp.svg" alt="whatsapp" className="size-5" />
            <span className="text-black">whatsapp</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
