export const formatMoney = (money: { currencySymbol: string; amountMinor: number }): string =>
  `${money.currencySymbol}${money.amountMinor}`;
