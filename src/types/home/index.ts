type TradePaymentItem = {
    id: number
    name: string
    currency: CurrencyType
    value: number
}

type TradeInfoTypes = {
    id: number
    is_delivery: boolean
    truck_id: string
    currency_rate: number
    comment: string | null
    deadline_date: string
    items: TradeProductTypes[]
    transactions: TradePaymentItem[]
    customer: ClientOptionItem
}

type TradeProductParametrsTypes = {
    id: number
    capacity: number
    quantity: number
    price: number
    price_with_delivery: number
    bag: number | null
}

type TradeProductBagParams = {
    id: number
    price: number
    quantity: number
    price_with_delivery: number
    bag: {
        id: number
        capacity: number
    }
}

type TradeProductTypes = {
    id?: number
    image: string
    name: string
    parametrs: TradeProductParametrsTypes[]
    products: TradeProductBagParams[]
    category?: {
        id: number
        inactive: boolean
        name: string
        amount: number
        extraction_rate: number
    }
}

type TradeValueTypes = {
    id: string
    products: TradeProductTypes[]
    info: TradeInfoTypes
}

type TradeInvoiceKeyValues = Record<
    string,
    {
        label: string
        value: (v: string) => string
    }
>

type TradeItemTypes = {
    id?: number
    img: string
    name: string
    price: number
    count: number
    parametrs: TradeProductParametrsTypes[]
}

type TradeForm = {
    products: {
        id: number
        name: string
    }[]
}

type TradeTableProduct = {
    id: number
    name: string
    price: number
    quantity: number
    capacity: number
    price_with_delivery: number
    bag: number | null
}

type TradeProducts = {
    id: number
    image: string
    name: string
    price: number
    quantity: number
    parametrs: TradeProductParametrsTypes[]
}
