import { render, screen } from '@testing-library/react';
import Intro from '../components/Intro';

test('renders introduction to AI tool', () => {
  render(<Intro />);
  const title = screen.getByText("Backpropagation Gradient Descent Visualizer");
  const paragraph = screen.getByText("This helps you manually do gradient descent to learn the math behind it");
  const note = screen.getByText("Note: one neuron for each layer for ease of visualization and S(x) is sigmoid");
  expect(title).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
  expect(note).toBeInTheDocument();
});
