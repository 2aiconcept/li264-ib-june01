const JsxLab = () => {
  // Variables pour les exemples
  const userName = "Jean Dupont";
  const userAge = 25;
  const isLoggedIn = true;
  const isAdmin = true;
  let pageTitle = "Laboratoire JSX";

  const changeTitle = () => {
    pageTitle = "Mon Jsx Lab";
    console.log(pageTitle);
  };

  const changeTitleParam = (newTitle: string) => {
    pageTitle = newTitle;
    console.log(pageTitle);
  };

  if (!isLoggedIn) {
    return (
      <>
        <h5>{pageTitle}</h5>
        <div className="card">
          <div className="card-header">État de connexion</div>
          <div className="card-body">
            <p className="card-text">Vous n'êtes pas connecté.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h5>{pageTitle}</h5>
      <div className="card">
        <div className="card-header">Etat de connexion</div>
        <div className="card-body">
          <p className="card-text">
            Bonjour {userName} vous avez {userAge} ans.
          </p>
          {/* condition dans du Jsx */}
          {isAdmin && <p className="card-text">Vous avez les droits admin</p>}
          {!isAdmin && (
            <p className="card-text">Vous êtes un utilisateur standard</p>
          )}
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-header">
          Etat de connexion (Alternative avec ternaire)
        </div>
        <div className="card-body">
          <p className="card-text">
            Bonjour {userName} vous avez {userAge} ans.
          </p>
          {/* ternaire dans du Jsx */}
          {isAdmin ? (
            <p className="card-text">Vous avez les droits admin</p>
          ) : (
            <p className="card-text">Vous êtes un utilisateur standard</p>
          )}
          <button
            className="btn btn-primary me-2"
            onClick={changeTitle}
          >
            changer le titre
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeTitleParam("Super Jsx Lab")}
          >
            changer le titre avec param string
          </button>
        </div>
      </div>
    </>
  );
};

export default JsxLab;
