// Stateless Functional Component
function NavBar({ totalCounters, nextRunes, totalRunes }) {
  //   console.log("NavBar - Rendered");

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Elden Ring Level Calculator{" "}
        </a>
      </nav>
      <h4>
        <span className="badge badge-pill badge-success ml-2">
          Current Level: {totalCounters}
        </span>
        <span className="badge badge-pill badge-info ml-2">
          Total Runes for Current Level: {totalRunes}
        </span>
        <span className="badge badge-pill badge-info ml-2">
          Runes for Next Level: {nextRunes}
        </span>
      </h4>
    </div>
  );
}

export default NavBar;
