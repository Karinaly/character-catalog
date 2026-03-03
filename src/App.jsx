import { useState } from "react";
import charactersData from "./data/characters";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";

function App() {

  const [characters, setCharacters] = useState(charactersData);
  const [editingCharacter, setEditingCharacter] = useState(null);

  const addCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
  };
  const deleteCharacter = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
  };
  const updateCharacter = (updatedCharacter) => {
    setCharacters(
      characters.map(char =>
        char.id === updatedCharacter.id ? updatedCharacter : char
      )
    );
    setEditingCharacter(null);
  };

  return (
    <>
      <Header />
      <CharacterList
        characters={characters}
        addCharacter={addCharacter}
        deleteCharacter={deleteCharacter}
        editingCharacter={editingCharacter}
        setEditingCharacter={setEditingCharacter}
        updateCharacter={updateCharacter}
      />
    </>
  );
}

export default App;