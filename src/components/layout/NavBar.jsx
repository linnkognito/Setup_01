import Button from '../buttons/Button';
import ButtonDarkMode from '../buttons/ButtonDarkMode';

function NavBar({ navButtons = [] }) {
  return (
    <nav>
      {navButtons.length > 0 &&
        navButtons.map((btn, i) => (
          <Button
            key={i}
            value={btn.value || ''}
            ariaLabel={btn.ariaLabel || undefined}
            onClick={btn.onClick || undefined}
            disabled={btn.isDisabled || false}
          />
        ))}

      <ButtonDarkMode />
    </nav>
  );
}

export default NavBar;
