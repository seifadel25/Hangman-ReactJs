function Footer() {
  return (
    <footer className="text-sm bg-slate-700 p-10 py-1 flex justify-between items-center text-white pb-6 md:pb-2">
      <p>Hangman. Copyright 2024</p>
      <p>
        Created by{" "}
        <a
          href="https://saifs-portfolio.vercel.app/"
          rel="noreferrer"
          target="_blank"
          className="text-blue-200 underline text-extrabold"
        >
          {" "}
          Saif Adel
        </a>
      </p>
    </footer>
  );
}
export default Footer;
