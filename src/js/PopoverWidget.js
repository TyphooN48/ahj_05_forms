import Popover from './Popover';

export default class PopoverWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.popoverList = null;
  }

  static get markup() {
    return `
      <div class="bd-example">
        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" data-popover-id="popover_1" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button>
        <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" data-popover-id="popover_2" title="" data-content="And here's some amazing content again." data-original-title="Popover title 2">Click to toggle popover</button>
      </div>
    `;
  }

  static get popover() {
    return '[data-toggle=popover]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    this.popoverList = Array.from(this.parentEl.querySelectorAll(this.constructor.popover));
    this.popoverList.forEach((item) => {
      item.addEventListener('click', (e) => this.onClick(e));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  onClick(e) {
    const element = new Popover(e.target);
    element.action();
  }
}
