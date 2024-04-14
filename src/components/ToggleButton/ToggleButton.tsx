import clsx from "clsx";
type ToggleButtonType = {
  cssClassName?: string;
  isOpen: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export default function ToggleButton({ isOpen, ...rest }: ToggleButtonType) {
  return (
    <button
      {...rest}
      className={clsx(
        "size-[24.38px] aspect-square rounded-full text-white flex items-center justify-center relative ml-2",
        {
          "bg-pink": !isOpen,
          "bg-darkPurple": isOpen,
        }
      )}
    >
      <span className="w-[50%] h-[2px] bg-white block rounded-md"></span>
      <span
        className={clsx(
          "h-[50%] w-[2px] bg-white block rounded-md absolute bg-opacity-0",
          { "bg-opacity-100": !isOpen }
        )}
      ></span>
      <span className="sr-only">Toggle accordion</span>
    </button>
  );
}
