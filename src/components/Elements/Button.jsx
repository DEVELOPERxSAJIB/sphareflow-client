const Button = ({ onClick, children, className, disabled, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`font-switzer text-[14px] px-[20px] py-[8px] bg-[#0011FF] text-[#fff] rounded-[32px] transition hover:bg-blue-600 ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
