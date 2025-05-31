import { useContext, useState } from "react";
import { BlocContext } from "../../Context/BlocContext";
import "./BlocForm.css";

function BlocForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { keyId, setKeyId, CreateNote } = useContext(BlocContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateNote({
      id: setKeyId(keyId + 1),
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="wrapper">
      <h1 className="form_title">Bloco de Notas</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          className="form_input"
          placeholder="Escreva o título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className="form_textarea"
          placeholder="Escreva sua nota"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <div>
          <button className="form_button">Salvar</button>
          <a className="back_button" href="/">
            Voltar
          </a>
        </div>
      </form>
    </section>
  );
}

export default BlocForm;
