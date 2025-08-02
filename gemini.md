O que eu gostaria de fazer nessa aplicação é o seguinte: ao clicar no botão "Sortear", um número aleatório é │
│ gerado. Deve-se então verificar se esse número já foi gerado anteriormente. Se sim, deve-se gerar outro até que │
│ seja gerado um número que ainda não tenha sido gerado. Em seguida, deve-se mostrar esse número no componente │
│ "numero-sorteado" e indicar esse mesmo número no painel do lado esquerdo, através da mudança da cor de fundo para │
│ bg-blue-600 e da cor do texto para text-white. Como o código atual pode ser refatorado para que esse resultado │
│ seja obtido? │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

✦ Entendido. Para refatorar o código e implementar a lógica que você descreveu, primeiro preciso analisar os arquivos
existentes.

Vou começar lendo o conteúdo dos arquivos src/App.tsx, src/components/numero-sorteado.tsx e
src/components/pedrinha.tsx para entender a estrutura atual e como os componentes interagem.
╭───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✔ ReadManyFiles Will attempt to read and concatenate files using patterns: `src/App.tsx`, `src/components/numero-so… │
 │                                                                                                                       │
 │    ### ReadManyFiles Result (Target Dir:                                                                              │
 │    `/home/elcio-almeida/cod3r/formação-dev/projetos-pessoais/bingo`)                                                  │
 │                                                                                                                       │
 │    Successfully read and concatenated content from **3 file(s)**.                                                     │
 │                                                                                                                       │
 │    **Processed Files:**                                                                                               │
 │    - `src/App.tsx`                                                                                                   │
 │    -`src/components/numero-sorteado.tsx`                                                                            │
 │    -`src/components/pedrinha.tsx` │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
✦ Ok, analisei o código. O principal problema está no componente App.tsx. A lista de números sorteados
(numerosSorteados) está sendo declarada como uma variável local, o que faz com que ela seja reiniciada a cada
renderização do componente. Além disso, a lógica para garantir a unicidade do número sorteado é falha e a grade de
números não é atualizada para refletir os números que já saíram.

Para corrigir isso, vou refatorar o App.tsx para:

1.  Transformar numerosSorteados em uma variável de estado com useState, garantindo que a lista de números sorteados
    persista entre as renderizações.
2.  Implementar um laço do...while na função sortearNumero para garantir que o número gerado seja sempre um que ainda
    não foi sorteado.
3.  Adicionar uma verificação para impedir o sorteio caso todos os 90 números já tenham saído.
4.  Atualizar a renderização do componente Pedrinha, passando a propriedade sorteado dinamicamente, com base na
    inclusão do número na lista de numerosSorteados.

Vou aplicar essas alterações agora.
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ✔ Edit src/App.tsx: // Gera um array de números ... => // Gera um array de números ... │
│ │
│ 6 // Gera um array de números de 1 a 90 │
│ 7 const numeros = Array.from({ length: 90 }, (\_, i) => i + 1); │
│ 8 const [numeroSorteado, setNumeroSorteado] = useState(0); │
│ 9 - const numerosSorteados: number[] = []; │
│ 9 + const [numerosSorteados, setNumerosSorteados] = useState<number[]>([]); │
│ 10 │
│ 11 function sortearNumero() { │
│ 12 - let numeroAleatorio = Math.floor(Math.random() _ 90) + 1; │
│ 13 - if (numerosSorteados.includes(numeroAleatorio)) { │
│ 14 - numeroAleatorio = Math.floor(Math.random() _ 90) + 1; │
│ 12 + if (numerosSorteados.length === 90) { │
│ 13 + alert("Todos os números já foram sorteados!"); │
│ 14 + return; │
│ 15 } │
│ 16 + │
│ 17 + let numeroAleatorio; │
│ 18 + do { │
│ 19 + numeroAleatorio = Math.floor(Math.random() \* 90) + 1; │
│ 20 + } while (numerosSorteados.includes(numeroAleatorio)); │
│ 21 + │
│ 22 setNumeroSorteado(numeroAleatorio); │
│ 17 - numerosSorteados.push(numeroAleatorio); │
│ 18 - console.log(numerosSorteados); │
│ 23 + setNumerosSorteados((prevSorteados) => [...prevSorteados, numeroAleatorio]); │
│ 24 } │
│ 25 │
│ 26 return ( │
│ 30 rounded-md max-w-[500px] mx-auto" │
│ 31 > │
│ 32 {numeros.map((numero) => ( │
│ 28 - <Pedrinha numero={numero} sorteado={false} /> │
│ 33 + <Pedrinha │
│ 34 + key={numero} │
│ 35 + numero={numero} │
│ 36 + sorteado={numerosSorteados.includes(numero)} │
│ 37 + /> │
│ 38 ))} │
│ 39 </div> │
│ 40 <div className="flex flex-col mx-auto gap-8"> │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
✦ As alterações foram aplicadas. O código foi refatorado para atender a todos os requisitos que você descreveu.
