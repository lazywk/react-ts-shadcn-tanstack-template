type CreateCurrency = { code: string; rate: number }

type CurrencyItem = {
    id: CurrencyType
} & CreateCurrency

type PaymentTypeItem = {
    id: number
    name: string
    currency: CurrencyType
}

type CreatePaymentType = {
    name: string
    currency: CurrencyType
}
