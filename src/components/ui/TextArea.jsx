const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          resize-none
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-3
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300
          focus:border-cyan-500
          focus:bg-white/10
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />
    </div>
  );
};

export default TextArea;