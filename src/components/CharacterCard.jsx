function CharacterCard({ character, deleteCharacter, setEditingCharacter }) {
  return (
    <div className="card" >
      <img src={character.img}  />
      <p>Name: {character.name}</p>
      <p>Age: {character.age}</p>
      <p>Job: {character.job}</p>

      <button onClick={() => setEditingCharacter(character)}>
        Edit
      </button>

      <button id="delete" onClick={() => deleteCharacter(character.id)}>
        Delete
      </button>
    </div>
  );
}

export default CharacterCard;