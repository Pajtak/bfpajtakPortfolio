import BlocCard from "./BlocCard";
import { useContext } from "react";
import { BlocContext } from "../../Context/BlocContext";
import "./BlocList.css";

function BlocList() {
  const { notes } = useContext(BlocContext);
  if (notes.length === 0) {
    return <h2 className="note_empty">Nada foi escrito</h2>;
  }
  return (
    <section className="note_section">
      {notes.map((note) => (
        <BlocCard key={note.id} note={note} />
      ))}
    </section>
  );
}

export default BlocList;
