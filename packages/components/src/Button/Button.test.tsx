import Button from './Button';
import { render } from '@testing-library/react';

describe('Button component', () => {
    it('should render correctly', () => {
        const {container} = render(<Button />);
        
        expect(container).toMatchSnapshot();
    })
})