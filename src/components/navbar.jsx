// Stateless Functional Component
function NavBar({
  totalCounters,
  nextRunes,
  totalRunes,
  actualLevel,
  rebirthMode,
  rebirthCounter,
}) {
  //   console.log("NavBar - Rendered");
  // console.log(actualLevel);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          Elden Ring Level Calculator{" "}
        </a>
      </nav>
      <h4 className="ml-2">
        <span className="badge badge-pill badge-success ml-2">
          Calculated Level: {totalCounters}
        </span>
        {rebirthMode && (
          <span className="badge badge-pill badge-info ml-2">
            Rebirth Levels: {rebirthCounter}
          </span>
        )}
        {actualLevel > 0 && (
          <span className="badge badge-pill badge-success ml-2">
            Actual Level: {actualLevel}
          </span>
        )}
        {totalRunes > 0 && !rebirthMode && (
          <span className="badge badge-pill badge-info ml-2">
            Total Runes for Calculated Level: {totalRunes}
          </span>
        )}
        {!rebirthMode && (
          <span className="badge badge-pill badge-info ml-2">
            Runes for Next Level: {nextRunes}
          </span>
        )}
      </h4>
    </div>
  );
}

export default NavBar;
