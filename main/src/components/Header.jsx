export default function Header() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "How It Works", link: "#how" },
    { name: "Impact", link: "#impact" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="w-screen h-16  flex items-center justify-between">
      <div className="w-full h-full"></div>
      <div className="w-full h-full">
        <ul className="flex items-center justify-between">

            {navItems.map((item) => (
              <li key={item.link}>
                <a href={item.link} className="text-[#eee]">{item.name}</a>
              </li>
            ))}

        </ul>
      </div>
      <div className="w-full h-full"></div>
    </header>
  );
}
