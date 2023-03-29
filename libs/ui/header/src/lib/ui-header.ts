const template = document.createElement('template');
template.innerHTML = `
  <header class="bg-white shadow-lg h-24 hidden md:flex">
    <nav class="w-10/12 mx-auto flex items-center justify-between">
      <h1 class="text-2xl font-bold text-slate-700">Appizza</h1>
      <ol class="font-light text-xl flex items-center justify-center gap-5">
        <li><a href="http://localhost:4200">Menu</a></li>
        <li><a href="http://localhost:4201">Manage</a></li>
        <li><a href="http://localhost:4202">Login</a></li>
      </ol>
    </nav>
  </header>
`;

export class UIHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.createHeader();
  }

  private createHeader() {
    const temp = document.importNode(template.content, true);
    this.appendChild(temp);
  }
}

customElements.define('ui-header', UIHeader);
