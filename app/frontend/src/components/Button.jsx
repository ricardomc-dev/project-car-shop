export function Button({ title, icon, ...rest }) {
  return (
    <button {...rest} className="text-lg flex items-center bg-green p-4 rounded-xl min-w-[200px] gap-3 text-white justify-center ">
      {title}
      {icon}
    </button>
  );
}