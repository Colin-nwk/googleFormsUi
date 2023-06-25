import { z } from "zod";


const debitCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:5061|5062|5063|5044|5041)[0-9]{12})$/; //verve/master/visa/ american express/ jvc/ diners



export const PersonalInfoSchema = z.object({
      name: z.string({ required_error: 'name is required' }).min(3),
      email: z.string({ required_error: 'email is required' }).email({ message: 'Please provide a valid email' }),
      password: z.string(),
      password_confirmation: z.string()
})
      .refine((data) => data.password === data.password_confirmation, {
            message: "Passwords don't match",
            path: ['password_confirmation'],
      });

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;


export const DeliveryInfoSchema = z.object({
      city: z.string().min(3),
      postalCode: z.coerce.number(),
      address: z.string(),
      shipping: z.enum(['free', 'fast', 'same_day'])
})

export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>


export const PaymentInfoSchema = z.object({
      card_number: z.string().regex(debitCardRegex),
      card_name: z.string(),
      expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{4}$/).refine(
            (val) => {
                  var [month, year] = val.split('/');

                  var date = new Date(parseInt(year), parseInt(month) - 1);
                  return date > new Date();
            },
            { message: 'Card is expired' }
      ),
      pin: z.coerce.number().gte(1000).lte(9999),
      security_code: z.coerce.number().gte(100).lte(999),
      saveInfo: z.boolean()
})

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>


// //FIXME: merging error
export const CheckoutInfoSchema =
      DeliveryInfoSchema.merge(PersonalInfoSchema).merge(PaymentInfoSchema);


export type CheckoutData = z.infer<typeof CheckoutInfoSchema>;

//TODO: first fix
// export const CheckoutInfoSchema: ZodSchema<any> = DeliveryInfoSchema
//       .merge(PersonalInfoSchema)
//       .merge(PaymentInfoSchema);

// export type CheckoutData = z.infer<typeof CheckoutInfoSchema>;
//TODO:  fix 2 not working
// export const CheckoutInfoSchema: AnyZodObject = (DeliveryInfoSchema as ZodObject<any>).merge(PersonalInfoSchema).merge(PaymentInfoSchema);

// export type CheckoutData = z.infer<typeof CheckoutInfoSchema>;
//TODO: fixed not working
// export const CheckoutInfoSchema: AnyZodObject = merge(DeliveryInfoSchema, PersonalInfoSchema, PaymentInfoSchema);

// export type CheckoutData = z.infer<typeof CheckoutInfoSchema>;