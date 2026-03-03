import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({
  characters,
  addCharacter,
  deleteCharacter,
  editingCharacter,
  setEditingCharacter,
  updateCharacter
}) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (editingCharacter) {
      setName(editingCharacter.name);
      setAge(editingCharacter.age);
      setJob(editingCharacter.job);
      setImg(editingCharacter.img);
    }
  }, [editingCharacter]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCharacter = {
      id: editingCharacter ? editingCharacter.id : Date.now(),
      name,
      age,
      job,
      img
    };

    if (editingCharacter) {
      updateCharacter(newCharacter);
    } else {
      addCharacter(newCharacter);
    }

    setName("");
    setAge("");
    setJob("");
    setImg("");
  };

  return (
    <div>

      <h2>{editingCharacter ? "Edit Character" : "Add Character"}</h2>

      <form onSubmit={handleSubmit}>
        <input className="Inputai"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input className="Inputai"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input className="Inputai"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <input className="Inputai"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit">
          {editingCharacter ? "Update" : "Add"}
        </button>
      </form>

      <hr />
    <div className="konteineriai">
      {characters.map(char => (
        <CharacterCard
          key={char.id}
          character={char}
          deleteCharacter={deleteCharacter}
          setEditingCharacter={setEditingCharacter}
        />
      ))}
    </div>
    </div>
  );
}

export default CharacterList;