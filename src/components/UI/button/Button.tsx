import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const BackIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8241 20.7992L10.825 20.8003L16.5978 26.6712C17.0303 27.111 17.7298 27.1094 18.1603 26.6674C18.5907 26.2254 18.589 25.5106 18.1566 25.0707L14.2807 21.129H26.8952C27.5054 21.129 28 20.6236 28 20C28 19.3764 27.5054 18.871 26.8952 18.871H14.2808L18.1565 14.9293C18.589 14.4894 18.5906 13.7746 18.1602 13.3326C17.7297 12.8905 17.0302 12.889 16.5978 13.3288L10.825 19.1997L10.824 19.2008C10.3913 19.6422 10.3927 20.3593 10.8241 20.7992Z"
      fill="#1D1D1D"
    />
  </svg>
);

const BaseButton = ({
  className,
  disabled,
  ...props
}: ComponentPropsWithoutRef<"button">) => (
  <button
    className={twMerge(
      "flex items-center justify-center gap-3 rounded-lg p-3 font-lato text-base font-bold",
      className
    )}
    disabled={disabled}
    {...props}
  />
);

export const ButtonFilled = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) => (
  <BaseButton
    className={twMerge(
      props.disabled
        ? "bg-gray-100 text-gray-400"
        : "bg-primary-500 text-white-50",
      className
    )}
    {...props}
  />
);

export const ButtonUnfilled = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => (
  <BaseButton
    className={twMerge(
      "h-12 rounded-lg border border-neutral-150 bg-neutral-50 px-4 py-2",
      className
    )}
    {...props}
  >
    <span className="typ-subtitle-bold text-neutral-800">{children}</span>
  </BaseButton>
);

export const ButtonBack = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  const router = useRouter();

  return (
    <BaseButton
      className={twMerge("h-10 w-10 p-0", className)}
      type="button"
      onClick={() => router.back()}
      {...props}
    >
      <BackIcon />
    </BaseButton>
  );
};

export const ButtonTransparent = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) => (
  <BaseButton
    className={twMerge(
      "bg-none px-4 py-2 text-neutral-800 shadow-none",
      className
    )}
    {...props}
  />
);

export const ButtonOutline = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) => (
  <BaseButton
    className={twMerge(
      "border-[1px] border-primary-700 text-primary-700",
      props.disabled ? "border-gray-100 text-gray-400" : "",
      className
    )}
    {...props}
  >
    {children}
  </BaseButton>
);

export const HasAdvancedSearch = ({
  className,
  children,
  advancedSearch,
  ...props
}: ComponentPropsWithoutRef<"button"> & { advancedSearch?: () => void }) =>
  advancedSearch ? (
    <BaseButton
      className={twMerge(
        "flex items-center justify-center rounded-lg p-3 font-lato text-base font-bold leading-6",
        className
      )}
      {...props}
    >
      {children}
    </BaseButton>
  ) : null;
