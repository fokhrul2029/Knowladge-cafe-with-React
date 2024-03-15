function Header() {
  return (
    <header className="py-4">
      <nav className="container mx-auto px-4 border-b-2 py-4">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="text-4xl font-bold">Knowledge Cafe</a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div className="w-10 rounded-full">
                <img
                  className="rounded-full cursor-pointer"
                  alt=" "
                  src="img/profile.png"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
