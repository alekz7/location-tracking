import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import { DarkModeToggle } from './DarkModeToggle';

describe('DarkModeToggle', () => {
  it('should toggle theme on click', () => {
    render(
      <ThemeProvider>
        <DarkModeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    expect(document.body.getAttribute('data-theme')).toBe('light');

    fireEvent.click(toggleButton);
    expect(document.body.getAttribute('data-theme')).toBe('dark');

    fireEvent.click(toggleButton);
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });
});
