interface blueButton {
  buttonText: string;
}

const BlueButton: React.FC<blueButton> = ({ buttonText }) => {
  return <button className="blue-button text-shadow-dark-light">{buttonText}</button>;
};

export default BlueButton;
