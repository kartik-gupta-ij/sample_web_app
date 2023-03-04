// Define the "hello-world" web component
class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>Hello, World!</h1>`;
  }
}
// Register the web components
customElements.define('hello-world', HelloWorld);