import AlertSuccess from "./AlertSuccess";
import ContentBox from "./ContentBox";
import DataSender from "./DataSender";
import UserInfoCard from "./UserInfoCard";

const PropsLab = () => {
  const pageTitle = "Laboratoire des Props - Introduction";
  const premierStagiaire = "Alexandre";
  const deuxiemeStagiaire = "Béatrice";
  const messageAlert = "Salutation distinguées";
  const handleDataFromChild = (data: string) => {
    console.log(`Message reçu de l'enfant : "${data}"`);
  };

  return (
    <>
      <h5>{pageTitle}</h5>
      <h6 className="mt-3">Exemple 1 : Passer une prop simple</h6>
      {/* 1. On appelle UserInfoCard et on lui passe la prop 'name' avec une valeur */}
      <UserInfoCard name={premierStagiaire} />
      {/* name c'est le nom que je choisi de donner à la propriété de type string
      de l'objet props qui va etre passé au composant enfant (j'aurais pu l'appeler comme je veux).
      React regroupe toutes les propriétés passées à l'enfant en un seul objet qu'il passe en premier 
      et unique paramètre du composant enfant */}
      <h6 className="mt-4">
        Exemple 2 : Réutiliser le composant avec une autre prop
      </h6>
      {/* 2. On réutilise le même composant avec une valeur différente pour la prop 'name' */}
      <UserInfoCard name={deuxiemeStagiaire} />
      <h6 className="mt-4">
        Exemple 3 : Passer une chaîne littérale directement
      </h6>
      <UserInfoCard name="Charles (valeur directe)" />
      <hr className="my-4" /> {/* Séparateur */}
      <h6 className="mt-3">
        Exemple 4 : Props obligatoires et optionnelles (avec valeur par défaut)
      </h6>
      {/* On appelle AlertSuccess en ne passant que la prop obligatoire 'name' */}
      {/* 'message' utilisera sa valeur par défaut ("Bonjour") */}
      <AlertSuccess name="Danielle" />
      {/* On appelle AlertSuccess en passant les deux props */}
      <AlertSuccess
        name="Emmanuel"
        message="Salutations distinguées"
      />
      <AlertSuccess
        name={premierStagiaire}
        message={messageAlert}
      />
      <hr className="my-4" />
      {/* Section 3: La prop spéciale 'children' */}
      <h6 className="mt-3">Exemple 3 : La prop spéciale "children"</h6>
      <p>
        La prop <code>children</code> permet de passer des éléments enfants
        directement entre les balises d'un composant.
      </p>
      <ContentBox title="Ma Première Boîte de Contenu">
        {/* Tout ce qui est écrit ici (entre <ContentBox> et </ContentBox>) */}
        {/* sera passé à ContentBox via sa prop 'children'. */}
        <h4>Titre de section enfant</h4>
        <p>
          Ceci est un paragraphe à l'intérieur de la <code>ContentBox</code>.
        </p>
        <p>
          On peut y mettre plusieurs éléments, du texte brut, et même d'autres
          composants React :
        </p>
        <UserInfoCard name="Enfant de ContentBox" />
        <button className="btn btn-sm btn-warning mt-2">
          Un bouton enfant
        </button>
      </ContentBox>
      <ContentBox>
        {/* Cet exemple n'a pas de prop 'title', mais a toujours des 'children' */}
        <p className="text-success fst-italic">
          Cette <code>ContentBox</code> n'a pas de titre explicite, mais elle
          affiche ce paragraphe enfant.
        </p>
      </ContentBox>
      {/* Section 4: Communication Enfant vers Parent via Fonction Prop */}
      <h6 className="mt-3">Exemple 4 : Communication Enfant vers Parent</h6>
      <p>
        Le composant <code>DataSender</code> (enfant) ci-dessous peut envoyer
        une donnée au composant <code>PropsLab</code> (parent) en utilisant une
        fonction que nous lui passons en prop (<code>onSendData</code>).
      </p>
      <DataSender
        initialValue="Bonjour Parent !"
        onSendData={handleDataFromChild}
      />
    </>
  );
};

export default PropsLab;
