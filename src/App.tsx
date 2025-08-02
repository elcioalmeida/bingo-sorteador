import { useState } from "react";
import NumeroSorteado from "./components/numero-sorteado";
import Pedrinha from "./components/pedrinha";
import Botao from "./components/botao";

export default function App() {
  const numeros = Array.from({ length: 90 }, (_, i) => i + 1);
  const [numeroSorteado, setNumeroSorteado] = useState(0);
  const [numerosSorteados, setNumerosSorteados] = useState<number[]>([]);

  function sortearNumero() {
    if (numerosSorteados.length === 90) {
      alert("Todos os números já foram sorteados!");
      return;
    }

    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * 90) + 1;
    } while (numerosSorteados.includes(numeroAleatorio));

    setNumeroSorteado(numeroAleatorio);
    setNumerosSorteados((prevSorteados) => [...prevSorteados, numeroAleatorio]);
  }

  function reiniciar() {
    setNumeroSorteado(0);
    setNumerosSorteados([]);
  }

  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <div className="flex flex-col mx-auto gap-8">
        <div
          className="grid grid-cols-10 gap-1 p-2 border border-gray-300 
        rounded-md max-w-[500px] mx-auto"
        >
          {numeros.map((numero) => (
            <Pedrinha
              key={numero}
              numero={numero}
              sorteado={numerosSorteados.includes(numero)}
            />
          ))}
        </div>
        <Botao texto="Iniciar novo jogo" executar={reiniciar} />
      </div>
      <div className="flex flex-col mx-auto gap-8">
        <NumeroSorteado numero={numeroSorteado} />
        <Botao texto="Sortear número" executar={sortearNumero} />
      </div>
    </div>
  );
}
