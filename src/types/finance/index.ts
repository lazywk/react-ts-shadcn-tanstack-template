type Expense = {
    id: number
    created_at: string
    updated_at: string
    currency_rate: string
    category: string
    category_id: number
    checkout_name: string
    currency: CurrencyType
    amount: string
    comment: string
    checkout: number
    has_updates: boolean
}

type FinanceEditPayload = {
    checkout: number
    amount: number
    category_id: number
    update_reason: string
    currency_rate?: number
}
