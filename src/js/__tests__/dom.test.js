import PopoverWidget from '../PopoverWidget';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const widget = new PopoverWidget(container);
  widget.bindToDOM();

  expect(container.innerHTML).toEqual(PopoverWidget.markup);
});
