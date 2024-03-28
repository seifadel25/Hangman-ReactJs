const Part = ({ src, zIndex, show }) => {
  return (
    <div className="ml-[70px] mt-2 md:ml-0 md:mt-0">
      <img
        style={{ zIndex, opacity: show ? 1 : 0 }}
        className="absolute object-contain md:w-full w-[50%] md:h-full h-[30%]"
        src={`/figure/${src}.png`}
        alt={`Body Part: ${src}`}
      />
    </div>
  );
};

export const Hangman = ({ MistakeCount }) => {
  return (
    <div className="md:relative w-fit md:w-full xl:mt-4  md:h-full  h-[30vh]">
      <Part src="Face-0" zIndex={100} show={MistakeCount >= 1} />

      <Part src="Torso" zIndex={90} show={MistakeCount >= 2} />
      <Part src="Arms" zIndex={80} show={MistakeCount >= 3} />
      <Part src="Legs" zIndex={80} show={MistakeCount >= 4} />

      <Part src="Rope" zIndex={20} show={MistakeCount >= 5} />

      <Part src="Platform" zIndex={120} show={MistakeCount >= 0} />

      <Part src="Face-1" zIndex={110} show={MistakeCount >= 5} />
    </div>
  );
};
