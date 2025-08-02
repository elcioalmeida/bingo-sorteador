import mergeClasses from "../utils/mergeClasses";

interface PedrinhaProps {
  numero: number;
  sorteado: boolean;
}

export default function Pedrinha({ numero, sorteado }: PedrinhaProps) {
  return (
    <div
      key={numero}
      className={mergeClasses(
        `flex justify-center items-center w-10 h-10 rounded-full 
        bg-gray-100 border-gray-200 font-bold border text-2xl`,
        { "bg-blue-500 text-white": sorteado }
      )}
    >
      {String(numero).padStart(2, "0")}
    </div>
  );
}
