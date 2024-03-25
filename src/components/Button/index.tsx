import '@styles/components/button.scss';

const Button = ({
  bgColor = 'white',
  textColor = '',
  radius = 10,
  width = '100%',
  text = 'buton',
  height = '40px',
  borderColor = 'none',
  fontSize = '16px',
  ...rest
}) => {
  return (
    <button
      className="base-button"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: `${radius}px`,
        width: width,
        height: height,
        borderColor: borderColor,
        fontSize: fontSize,
      }}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
