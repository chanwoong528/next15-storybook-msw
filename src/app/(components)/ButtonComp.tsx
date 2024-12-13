import './button.scss';
export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
const ButtonComp = ({ primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return <button className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} {...props}>{label}</button>;
};

export default ButtonComp;
