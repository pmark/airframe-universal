// class AFCard extends HTMLElement {
//   connectedCallback() {
//     const template = document.createElement("template");

//     template.innerHTML = `
//     <af-vstack spacing="sm">
//       <slot></slot>
//     </af-vstack>`;

//     this.attachShadow({ mode: "open" });
//     this.shadowRoot.appendChild(template.content.cloneNode(true));
//   }
// }

// customElements.define("af-card", AFCard);
