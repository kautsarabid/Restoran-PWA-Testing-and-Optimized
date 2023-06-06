class NavbarCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="drawer">
      <div class="brand-name">
        <a href="#">
          <h1>ResMini</h1>
        </a>
      </div>

      <a class="menu-toggle" href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#/like">Favorite</a></li>
        <li><a href="https://www.instagram.com/abidkautsar/" target="_blank">About Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('custom-nav', NavbarCustom);
