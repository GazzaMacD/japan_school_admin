/**
 * @jest-environment jsdom
 */
import { Logo } from '@/components/elements/Logo';
import { render } from '@testing-library/react';
describe('Page Smoke Test', () => {
  test('smoke', async () => {
    render(<Logo />);
    const two = 2;
    expect(two).toBe(2);
  });
});
