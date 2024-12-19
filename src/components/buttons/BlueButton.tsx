interface blueButton {
  buttonText: string;
}

const BlueButton: React.FC<blueButton> = ({ buttonText }) => {
  return <button className="blue-button">{buttonText}</button>;
};

export default BlueButton;
