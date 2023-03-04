// Define the MyHeader web component
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Web Components Demo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}
customElements.define('my-header', MyHeader);

// Define the HelloWorld web component
class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title">Hello, World!</h5>
          <p class="card-text">This is a simple web component.</p>
        </div>
      </div>
    `;
  }
}
customElements.define('hello-world', HelloWorld);

// Define the MySidebar web component
class MySidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card mt-4">
        <div class="card-body">
        <h5 class="card-title">My Sidebar</h5>
        <p class="card-text">This is a custom web component for the sidebar.</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Item 1</li>
          <li class="list-group-item">Item 2</li>
          <li class="list-group-item">Item 3</li>
        </ul>
      </div>
    </div>
  `;
  }
}
customElements.define('my-sidebar', MySidebar);

// Define the MyFooter web component
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="mt-4"> <div class="container-fluid bg-dark text-light text-center py-3"> &copy; 2023 Web Components Demo </div> </footer>`;
  }
}
customElements.define('my-footer', MyFooter);
