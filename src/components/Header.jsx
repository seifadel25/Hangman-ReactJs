const Items = ["Sports", "Animals", "Countries", "Fruits"];

function Header({ changeTopic }) {
  return (
    <header className="bg-slate-700 p-10 py-4 flex justify-between items-center text-white">
      <div>
        <h1 className="text-xl font-extrabold">HANGMAN</h1>
      </div>

      <nav>
        <ul className="flex gap-10">
          {Items.map((item, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => changeTopic(item)}
                  className="p-4 py-1 bg-white/90 text-slate-700 rounded-lg font-bold block hover:bg-slate-300 hover:scale-110 transition-all"
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
