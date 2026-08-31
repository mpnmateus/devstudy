import Cabecalho from "./components/Cabecalho.jsx";
import ResumoEstudos from "./components/ResumoEstudos.jsx";
import MensagemInicial from "./components/MensagemInicial.jsx";
import ListaTopicos from "./components/ListaTopicos.jsx";

function App() {
  const topicos = [
    {
      id: 1,
      titulo: "Arrays",
      status: "Concluído",
      materia: "JavaScript",
    },
    {
      id: 2,
      titulo: "Promises",
      status: "Em andamento",
      materia: "JavaScript",
    },
    {
      id: 3,
      titulo: "React",
      status: "Pendente",
      materia: "JavaScript",
    },
    {
      id: 4,
      titulo: "Express",
      status: "Concluído",
      materia: "JavaScript",
    },
  ];

  return (
    <div>
      <Cabecalho />
      <ResumoEstudos />
      <MensagemInicial />
      <ListaTopicos topicos={topicos}/>
    </div>
  );
}

export default App;