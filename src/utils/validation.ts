import { z } from "./zod_i18n";

const containsEmoji = (str: string) => /\p{Emoji}/u.test(str);

const industrySchema = z.object({
  industryCode: z
    .string()
    .min(5)
    .max(50)
    .regex(/^[a-zA-Z\s]*$/)
    .refine((value) => !containsEmoji(value)),
  industryName: z
    .string()
    .min(5)
    .max(300)
    .refine((value) => !containsEmoji(value)),
  status: z.enum(["Active", "Inactive"]).default("Active"),
});

export { industrySchema };
