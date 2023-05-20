import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the appropriate router component
import App from './App';

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  // Rest of your test code...
});