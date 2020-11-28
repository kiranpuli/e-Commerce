import './bootstrap.min.css'
import "./App.css"
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">ShopNow</a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Admin</a>
            </li>
          </ul>
      </nav>
      <main>
        This is the product list
      </main>
      <footer className="bg-dark text-light">
        Made by Kiran Puli, Copyright @2020
      </footer>
    </div>
  );
}

export default App;
