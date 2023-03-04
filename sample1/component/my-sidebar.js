
// Define the "my-sidebar" web component
class MySidebar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <h2>My Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    `;
  }
}
// Register the web components
customElements.define('my-sidebar', MySidebar);