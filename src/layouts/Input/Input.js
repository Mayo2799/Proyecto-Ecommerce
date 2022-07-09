import "./Input.scss";
const Input = ({
  label,
  type,
  onChange,
  value,
  name,
  required,
  placeholder,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
