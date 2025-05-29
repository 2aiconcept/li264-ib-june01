import { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const HooksLab = () => {
  // let pageTitle = "Laboratoire Hooks";
  // utiliser le state
  const [title, setTitle] = useState("Laboratoire Hooks");
  const changeTitle = () => {
    // pageTitle = "Mon Hooks Lab";
    // console.log(pageTitle);
    // modif du state = re rendu
    setTitle("My Hooks Lab");
  };

  const [count, setCount] = useState(0);
  const increment = () => {
    // setCount(count + 1); // incrément puis re rendu
    // console.log(count); // s'execute avant le re rendu
    setCount((prevCount) => prevCount + 1); // bonne pratique : utiliser un callback
    console.log(count); // setCount est asynchrone, il faut attendre le re rendu pour afficher la nouvelle valeur
  };
  // useEffect = "Fais quelque chose au chargement et à chaque re rendu"
  useEffect(() => {
    console.log("chargement et re rendu !");
  }); // au chargement et a chaque rerendu

  // useEffect = "Fais quelque chose APRÈS le rendu"
  useEffect(() => {
    console.log("Le composant vient de s'afficher !");
  }, []); // [] = une seule fois au démarrage

  // useEffect qui "observe" une variable
  useEffect(() => {
    console.log("Le titre a changé:", title);
  }, [title]); // [title] = à chaque changement de title

  // useEffect qui "observe" une variable
  useEffect(() => {
    console.log("La valeur de count a changé:", count);
  }, [count]); // [title] = à chaque changement de title

  // Chronometre
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // const chrono = () => {
  //   setInterval(() => {
  //     setSeconds((prev) => prev + 1);
  //   }, 1000);
  // };
  // useEffect(() => {
  //   if (isRunning) {
  //     chrono();
  //   }
  // }); // boucle infinie car useEffect est rappelé à chaque rerendu et chrono app en boucle car pas de tableau de dépendence

  useEffect(() => {
    if (!isRunning) return; // Guard clause
    const interval = setInterval(() => {
      // const + pas de else
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup simple
  }, [isRunning]); // useEffect uniquement si isRunning change

  // simulation call api
  interface User {
    name: string;
    age: number;
  }

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    // Simulation API
    setTimeout(() => {
      setUser({ name: "Jean", age: 25 });
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchUser();
  }, []); // Au montage uniquement

  // exemple d'input controlé dans un formulaire
  const [inputValue, setInputValue] = useState("");

  // Utilisation du hook perso userCounter
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter(10);

  return (
    <>
      <h5>{title}</h5>
      {/* affichage du state et mise à jour */}
      <div className="card">
        <div className="card-header bg-primary text-white">useState()</div>
        <div className="card-body">
          <p className="card-text">
            Utilisation du useState pour avoir un re rendu
          </p>
          <button
            className="btn btn-primary"
            onClick={changeTitle}
          >
            Change title page
          </button>
        </div>
      </div>

      {/* affichage du state et mise à jour */}
      <div className="card">
        <div className="card-header bg-primary text-white">useState()</div>
        <div className="card-body">
          <p className="card-text">{`compter : ${count}`}</p>
          <button
            className="btn btn-primary"
            onClick={increment}
          >
            Increment
          </button>
        </div>
      </div>

      {/* chronometre */}
      <h5>Un Chonomètre</h5>
      <div className="card">
        <div className="card-header bg-primary text-white">useState()</div>
        <div className="card-body">
          <p className="card-text">Chrono : {seconds}</p>
          <button
            className="btn btn-primary me-2"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => setSeconds(0)}
          >
            Reset
          </button>
        </div>
      </div>

      {/* simulation call api */}
      <h5>Simulation d'api call</h5>
      <div className="card">
        <div className="card-header bg-primary text-white">useState()</div>
        <div className="card-body">
          {loading ? (
            <p className="card-text">...chargement en cours</p>
          ) : (
            <p className="card-text">{user && user.name}</p>
          )}
        </div>
      </div>

      {/* exemple input controlé */}
      <h5>Simulation d'api call</h5>
      <div className="card">
        <div className="card-header bg-primary text-white">useState()</div>
        <div className="card-body">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tapez quelque chose..."
          />
          <p>Vous tapez: {inputValue}</p>
        </div>
      </div>

      {/* counter avec hook perso useCounter */}
      <h5>Counter avec hook perso useCounter()</h5>
      <div className="card">
        <div className="card-header bg-primary text-white">
          Counter avec hook perso useCounter
        </div>
        <div className="card-body">
          <p className="card-text">{`compter : ${counter}`}</p>
          <button
            className="btn btn-primary me-2"
            onClick={incrementCounter}
          >
            Increment
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={decrementCounter}
          >
            Decrement
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={resetCounter}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default HooksLab;
