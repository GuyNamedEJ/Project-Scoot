import className from "classnames";


export default function Button({ children, ...rest }) {
  const classes = className(
    rest.className,
    "bg-[#FCB72b] w-[192px] h-[53px] text-white font-space text-mobile-text "
  );

  return (
      <button {...rest} className={classes}>{children}</button>
  );
}
