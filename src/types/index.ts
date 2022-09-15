export type attributesType = {
  __typename: string,
  id: string,
  name: string,
  type: string
  items: attributeItemsType[]
}

export type attributeItemsType = {
  __typename: string,
  id: string,
  displayValue: string,
  value: string
}

type currencyType = {
  __typename: string,
  label: string,
  symbol: string
}

export type priceType = {
  __typename: string,
  currency: currencyType,
  amount: number
}

export type productType = {
  id: string,
  attributes: attributesType[],
  description: string,
  prices: priceType[],
  brand: string,
  name: string,
  gallery: string[],
  inStock: boolean,
  amount: number,
  chosenAttributes: number[]
}
