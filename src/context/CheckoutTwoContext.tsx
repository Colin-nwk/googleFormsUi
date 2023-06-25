import { createContext, useContext, useState } from "react";
import {
  CheckoutData,
  DeliveryInfo,
  PaymentInfo,
  PersonalInfo,
} from "../schema/checkout.schema";

type CheckoutContextType = {
  personal: PersonalInfo | null;
  delivery: DeliveryInfo | null;
  payment: PaymentInfo | null;
  setPersonal: (info: PersonalInfo | null) => void;
  setDelivery: (info: DeliveryInfo | null) => void;
  setPayment: (info: PaymentInfo | null) => void;
  onSubmitAll: (paymentInfo: PaymentInfo) => Promise<boolean>;
};

const CheckoutContext = createContext<CheckoutContextType>({
  personal: null,
  delivery: null,
  payment: null,
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
  onSubmitAll: () => Promise.resolve(false),
});

export function CheckoutContextProvider({ children }) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [payment, setPayment] = useState<PaymentInfo | null>(null);

  const onSubmitAll = async (paymentInfo: PaymentInfo) => {
    setPayment(paymentInfo);

    const checkoutData: CheckoutData = {
      ...personal!,
      ...delivery!,
      ...paymentInfo,
    };

    console.log("Submitting the multi-step form");
    console.log(checkoutData);

    return true;
  };

  const contextValue: CheckoutContextType = {
    personal,
    delivery,
    payment,
    setPersonal,
    setDelivery,
    setPayment,
    onSubmitAll,
  };

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckoutContext() {
  return useContext(CheckoutContext);
}
