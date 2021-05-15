import { forwardRef } from "react";
import clsx from "clsx";

const Button = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<"button">
>(function Button({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={clsx([
        `uppercase rounded-md p-2 text-lg text-gray-900 border-2 border-green-600
         hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-green-600`,
        className,
      ])}
      {...props}
    />
  );
});

export default Button;
