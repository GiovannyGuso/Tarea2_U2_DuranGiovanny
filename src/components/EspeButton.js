import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class EspeButton extends LitElement {
  static styles = css`
    button {
      background-color: var(--espe-primary, #003C71);
      color: white;
      padding: 8px 16px;
      font-family: 'Arial', 'Roboto', sans-serif;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button[disabled] {
      background-color: #a0a0a0;
      cursor: not-allowed;
    }

    .loading::after {
      content: ' ⏳';
    }
  `;

  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) loading = false;
  @property({ type: String }) label = 'Enviar';

  _handleClick() {
    if (this.disabled || this.loading) return;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.dispatchEvent(new CustomEvent('task-sent', { detail: 'ok' }));
    }, 2000);
  }

  render() {
    return html`
      <button
        ?disabled=${this.disabled}
        class=${this.loading ? 'loading' : ''}
        @click=${this._handleClick}
        aria-label=${this.label}
      >
        ${this.label}
      </button>
    `;
  }
}

customElements.define('espe-button', EspeButton);
