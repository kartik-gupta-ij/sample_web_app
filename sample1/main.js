
// Import the web components
import './component/hello-world.js';
import './component/my-sidebar.js';
import './component/my-footer.js';

// Add the web components to the DOM
const app = document.createElement('div');
app.innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <hello-world></hello-world>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <my-sidebar></my-sidebar>
      </div>
      <div class="col-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sapien mi. Donec elementum leo vel ipsum facilisis, ac feugiat purus bibendum. Donec malesuada, nisi in bibendum suscipit, erat quam vehicula augue, at rutrum dolor magna id nulla. Duis porta, tellus eget congue porttitor, nisi est mollis leo, vitae rhoncus neque quam at ipsum.</p>
      </div>
    </div>
  </div>
  <my-footer></my-footer>
`;

document.body.appendChild(app);
