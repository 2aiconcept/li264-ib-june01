export const JsxLab = () => {
  // Variables pour les exemples
  const userName = "Jean Dupont";
  const userAge = 25;
  const isLoggedIn = true;
  const isAdmin = false;
  let pageTitle = "Laboratoire JSX";

  return (
    <>
      <h5>{pageTitle}</h5>
      <div className="card">
        <div className="card-header">Affichage de variables</div>
        <div className="card-body">
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </>
  );
};
