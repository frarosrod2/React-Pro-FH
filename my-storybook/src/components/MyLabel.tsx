import './myLabel.css';

export interface Props {
  /**
   * Este es el mensaje de la etiqueta
   */
  label?: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  allCaps: boolean;

  color: 'primary' | 'secondary' | 'tertiary';
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  label = 'No label',
  size = 'normal',
}: Props) => {
  return (
    <span className={`${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
