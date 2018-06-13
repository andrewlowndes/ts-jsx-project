
import { Button } from './Button';

describe('Button', () => {
  let component: Button,
    result: DocumentFragment;

  beforeAll(() => {
    component = new Button({
      text: 'world'
    });
  });

  describe('when rendered', () => {
    beforeAll(() => {
      result = component.render() as DocumentFragment;
    });

    it('should show a button with the text given', () => {
      expect(result.textContent).toBe('Hi world');
    });
  
    describe('when the button is clicked', () => {
      let button: HTMLButtonElement;
  
      beforeEach(() => {
        button = [...result.childNodes].find(node => (node as HTMLElement).tagName === 'BUTTON') as HTMLButtonElement;
  
        spyOn(window, 'alert');
  
        button.onclick(null);
      });
  
      it('should alert a message', () => {
        expect(window.alert).toHaveBeenCalledWith('clicked');
      });
    });
  });
});
