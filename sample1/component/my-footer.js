// Define the "my-footer" web component
class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer class="container-fluid bg-dark text-light py-3">
        <div class="row">
          <div class="col-12 text-center">
            <p>&copy; 2023 Web Components Demo</p>
          </div>
        </div>
      </footer>
    `;
  }
}

// Register the web components


customElements.define('my-footer', MyFooter);