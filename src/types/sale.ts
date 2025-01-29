type SaleParametr = {
    id: number
    index: number
    parent_index: number
    discounted_price: number
    quantity: number
    count: number
    bag: {
        id: number
        capacity: number
    }
    price_with_delivery: number
    rassipnoy_mass: number | null
}

type SaleProduct = {
    id: number
    name: string
    image: string
    products: SaleParametr[]
}

type SaleStore = {
    id: number
    name: string
    quantity: number
    index: number
    parent_index: number
    discounted_price: number
    bag: {
        id: number
        capacity: number
    }
    price_with_delivery: number
}

type SavedSaleItem = {
    id: number
    client: number | null
    transport_id: string | null
    comment: string | null
    payment: SalePayment
    sold_products: SaleProduct[]
    saved_products: SaleStore[]
}

type SaleTransaction = {
    id: number
    amount: number
    checkout: string
    currency: CurrencyType
}

type SalePayment = {
    id: number
    transactions: SaleTransaction[]
    date: string
    currency_rate: number
    comment: string | null
    partner: number | null
}

type SaleItem = {
    id: number
    name: string
    client: number | null
    transport_id: string | null
    comment: string | null
    payment: SalePayment
    is_delivery: boolean
    sold_products: SaleProduct[]
    saved_products: SaleStore[]
}
