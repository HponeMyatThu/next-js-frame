import React, { ComponentPropsWithoutRef, useState } from "react"
import { twMerge } from "tailwind-merge"

const Input = React.forwardRef<
	HTMLInputElement,
	ComponentPropsWithoutRef<"input">
>(({ className, onFocus, onBlur, ...props }, ref) => {
	const [isFocus, setIsFocus] = useState(false)

	return (
		<input
			ref={ref}
			className={twMerge(
				!isFocus && " focus:text-2xl",
				className,
				"placeholder-gray-300"
			)}
			onFocus={(e) => {
				setIsFocus(true)

				onFocus?.(e)
			}}
			onBlur={(e) => {
				setIsFocus(false)

				onBlur?.(e)
			}}
			{...props}
		/>
	)
})
Input.displayName = "Input"

export default Input
