interface NumeroSorteadoProps {
  numero: number;
}

export default function NumeroSorteado({ numero }: NumeroSorteadoProps) {
  return (
    <div className="flex p-2 border border-gray-300 rounded-md">
      <span
        className="flex justify-center items-center w-40 h-40 text-6xl
          bg-gray-100 font-bold border border-gray-200"
      >
        {String(numero).padStart(2, "0")}
      </span>
    </div>
  );
}
