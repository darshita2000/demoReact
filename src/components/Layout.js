import { Link, Outlet } from "react-router-dom";

export default function () {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-sm bg-light mb-3">
        <div className="container-fluid">
          <ul className="navbar-nav">
          
            <li className="nav-item m-2">
              <Link to="/displaySolution">DisplaySolution</Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/searchSolution">SearchSolution</Link>
            </li>
           
          </ul>
        </div>
      </nav>
      <Outlet></Outlet> */}
      <div class="dropdown">
  <button class="dropbtn ">Solutions</button>
  <div class="dropdown-content">
  <Link to="/displaySolution">DisplaySolution</Link>
  <Link to="/searchSolution">SearchSolution</Link>
  </div>
</div>
<Outlet></Outlet>
    </div>
  );
}
