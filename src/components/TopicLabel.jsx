export const TopicLabel = (props) => {
  return (
    <div className="text-slate-900 border bg-gray-200 border-slate-400 p-6 py-2 text-center rounded-lg border-dashed">
      <p className="text-sm">Topic</p>
      <p className="text-lg font-bold ">{props.topic}</p>
    </div>
  );
};
