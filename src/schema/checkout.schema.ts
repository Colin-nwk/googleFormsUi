import { z } from "zod";


export const PersonalInfoSchema = z.object({
      name: z.string().min(3),
      email: z.string().email({ message: 'Please provide a valid email' })
})

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;


export const DeliveryInfoSchema = z.object({
      city: z.string().min(3),
      postalCode: z.string(),
      address: z.string(),
      shipping: z.enum(['free', 'fast', 'same_day'])
})

export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>


export const PaymentInfoSchema = z.object({
      number: z.string(),
      card_name: z.string(),
      expirationDate: z.string(),
      pin: z.string(),
      security_code: z.string(),
      saveInfo: z.boolean()
})

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>