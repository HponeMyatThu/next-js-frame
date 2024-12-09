import React, { ComponentPropsWithoutRef, useState } from "react"
import { twMerge } from "tailwind-merge"

const TextArea = React.forwardRef<
	HTMLTextAreaElement,
	ComponentPropsWithoutRef<"textarea">
>(({ className, onFocus, onBlur, ...props }, ref) => {
	const [isFocus, setIsFocus] = useState(false)

	return (
		<textarea
			ref={ref}
			className={twMerge(!isFocus && "focus:text-2xl", className)}
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
TextArea.displayName = "TextArea"

export default TextArea
