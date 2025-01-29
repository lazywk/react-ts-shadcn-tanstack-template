type CheckoutItem = {
    checkout: number
    balance: number
}
type CheckoutCurrentBalance = {
    name: string
    balance: number
    checkout: number
    currency: CurrencyType
}
type CheckoutReport = {
    income: CheckoutItem[]
    expense: CheckoutItem[]
    current_balance: CheckoutCurrentBalance[]
}
type Checkout = {
    name: string
    start_day_balance: number
    income: number
    expense: number
    end_day_balance: number
    currency: CurrencyType
}

type CheckoutIncome = {
    today_sale: number
    debt_amount: number
    sale_income_by_checkouts: {
        checkout: number
        balance: number
        checkout_name: string
    }[]

    other_income_usd: number
    other_income_uzs: number
}

type Debt = {
    today: string
    debt: string
    cash: string
    valyuta: string
    terminal: string
    plastic: string
    bank: string
    another: string
}
