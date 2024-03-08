const Part = ({ src, zIndex, show }) => {
  return (
    <div>
      <img
        style={{ zIndex, opacity: show ? 1 : 0 }}
        className="absolute object-contain"
        src={`/figure/${src}.png`}
        alt={`Body Part: ${src}`}
      />
    </div>
  );
};

export const Hangman = ({ MistakeCount }) => {
  return (
    <div className="md:relative w-full mt-10 ">
      <Part src="Face-0" zIndex={100} show={MistakeCount >= 1} />

      <Part src="Torso" zIndex={90} show={MistakeCount >= 2} />
      <Part src="Arms" zIndex={80} show={MistakeCount >= 3} />
      <Part src="Legs" zIndex={80} show={MistakeCount >= 4} />

      <Part src="Rope" zIndex={20} show={MistakeCount >= 5} />

      <Part src="Platform" zIndex={30} show={MistakeCount >= 6} />

      <Part src="Face-1" zIndex={110} show={MistakeCount >= 6} />
    </div>
  );
};
