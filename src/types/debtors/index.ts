type ClientDebt = {
    id: number
    sale_id?: number
    payment_id?: number
    created_at: string
    sale_debt?: string
    total_paid_amount?: string
    partner_balance: string
    payment_comment?: string
    debt_comment?: string
    currency: CurrencyType
    sold_products_has_updates?: boolean
}

type PaymentTransaction = {
    id: number
    currency_rate: string
    checkout_name: string
    amount: string
    checkout: number
    comment: string
    currency: CurrencyType
}

type SoldProduct = {
    id: number
    quantity: number
    per_price: string
    product: {
        id: number
        bag_capacity?: number
        packaged_product: string
        category: string
    }
    comment: string
    has_updates: boolean
}
type Sale = {
    id: number
    sold_products: SoldProduct[]
    created_at: string
    updated_at: string
    transport_id: string
    partner_balance: string
    comment: string
    client: number
}
