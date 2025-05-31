import { useContext } from "react";
import { BlocContext } from "../../Context/BlocContext";
import "./BlocCard.css";

function BlocCard({ note }) {
  const { DeleteNote } = useContext(BlocContext);

  return (
    <section className="note">
      <div className="div_note">
        <p className="note_id">Id: {note.id}</p>
        <h1 className="note_title">Título: {note.title}</h1>
        <p className="note_description">{note.description}</p>
      </div>
      <div className="div_button">
        <button className="delete_button" onClick={() => DeleteNote(note.id)}>
          Excluir Nota
        </button>
      </div>
    </section>
  );
}

export default BlocCard;
