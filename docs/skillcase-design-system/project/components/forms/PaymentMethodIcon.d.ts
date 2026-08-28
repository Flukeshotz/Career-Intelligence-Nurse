import * as React from 'react';
export interface PaymentMethodIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  paymentMethod?: "amex" | "affirm" | "alipay" | "amazon" | "applepay" | "bancontact" | "bitcoin" | "bitcoincash" | "bitpay" | "citadele" | "dinersclub" | "discover" | "elo" | "etherium" | "forbrugsforeningen" | "googlepay" | "ideal" | "interac" | "jcb" | "klarna" | "lightcoin" | "maestro" | "mastercard" | "paypal" | "payoneer" | "paysafe" | "qiwi" | "sepa" | "shop pay" | "skrill" | "sofort" | "stripe" | "unionpay" | "verifone" | "visa" | "wechat" | "webmoney" | "yandex" | "giropay";
}
export declare const PaymentMethodIcon: React.FC<PaymentMethodIconProps>;
export default PaymentMethodIcon;
