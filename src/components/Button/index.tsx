import '@styles/components/button.scss';

const Button = ({
  bgColor = 'transparent',
  textColor = '#dae4ff',
  radius = 10,
  width = 'none',
  text = 'buton',
  height = '40px',
  borderColor = 'none',
  fontSize = '16px',
  fontWeight = 'normal',
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`base-button is-glass ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: `${radius}px`,
        width: width,
        height: height,
        borderColor: borderColor,
        fontSize: fontSize,
        fontWeight: fontWeight,
      }}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
