import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const apiUrlAttori = "https://lanciweb.github.io/demo/api/actors/";
  const apiUrlAttrici = "https://lanciweb.github.io/demo/api/actresses/";

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(apiUrlAttori).then((resp) => {
      const characterList = resp.data;
      setCharacters(characterList);
    });
  }, [] );

  return (
    <>
      <div className="container my-4">
        <h2 className="text-center">ATTORI HOLLYWOODIANI</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-3">
          {characters.map((curCharacter) => (
            <div key={curCharacter.id} className="col">
              <Card character={curCharacter} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
