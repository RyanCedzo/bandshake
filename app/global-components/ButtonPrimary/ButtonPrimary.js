export default function ButtonPrimary({ children, customClasses }) {
  return (
    <button
      className={`px-5 py-2 mt-3 uppercase font-bold text-base text-white whitespace-nowrap 
                  bg-yellow-btn-primary rounded-full border-5 border-[#760000] 
                  transition-all hover:bg-yellow-600
                  ${customClasses ? ` ${customClasses}` : ""}`}
    >
      {children}
    </button>
  );
}
