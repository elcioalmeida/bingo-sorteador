interface BotaoProps {
  texto: string;
  executar: () => void;
}

export default function Botao({ texto, executar }: BotaoProps) {
  return (
    <button
      className="text-white text-xl bg-blue-500 h-12 rounded-md"
      onClick={executar}
    >
      {texto}
    </button>
  );
}
