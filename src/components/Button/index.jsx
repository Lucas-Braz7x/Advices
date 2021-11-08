import { Buttons } from './styles';

export const Button = ({ onClick, children }) => {
  return <Buttons onClick={onClick}>{children}</Buttons>
}