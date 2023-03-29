export class UIFooter extends HTMLElement {
  public static observedAttributes = ['name', 'framework'];

  constructor() {
    super();
  }

  get framework() {
    return this.getAttribute('framework');
  }

  set framework(framework: string | null) {
    this.setAttribute('framework', framework ?? '');
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value: string | null) {
    this.setAttribute('name', value ?? '');
  }

  attributeChangedCallback() {
    this.createFooter(this.name, this.framework);
  }

  private createFooter(name: string | null, framework: string | null) {
    let footer = '';

    if (name) {
      footer = `
        <strong>${name}</strong> created with <strong>Nx</strong> ${
        framework ? `and <strong>${framework}</strong>` : ''
      } 🍕
      `;
    } else {
      footer = `This footer is awesome!`;
    }

    this.innerHTML = `<footer class="bg-gradient-to-t from-slate-300 to-slate-50 prose max-w-none text-center pb-8 pt-16 items-center justify-center">${footer}</footer>`;
  }
}

customElements.define('ui-footer', UIFooter);
