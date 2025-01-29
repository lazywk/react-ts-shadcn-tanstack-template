type SupplierItem = {
    id: number
    full_name: string
    phone_number: string
    address: string
    payment_currency: number
    balance: number
    provider_products: {
        id?: number
        price: number
        bag: number
    }[]
}

type SupplierTwoCreate = {
    full_name: string
    phone_number: string
    address: string
    payment_currency: number
    balance: number
    provider_products: {
        id?: number
        index: number
        price: number | undefined
        bag: number | undefined
    }[]
}

type ProductsToCreate = {
    id: number
    bag: number
    capacity: string
}

type Parametr = {
    id: number
    quantity: number
    capacity: number
}

type ProviderBagItem = {
    id: number
    name: string
    image: string
    types: Parametr[]
}

type CreateProviderBag = {
    products: {
        id: number
        types: Parametr[]
    }[]
}

type ProviderProfile = {
    id: number
    full_name: string
    phone_number: string
    address: string
    payment_currency: CurrencyType
    balance: number
    provider_products: {
        id: number
        price: number
        bag: number
    }[]
}

type ProviderTransaction = {
    id: number | undefined
    label: string
    amount: number
    comment: string
    checkout: number
    currency: number
    checkout_name?: string
}

type CreatePaymentUsd = {
    partner: number
    transactions: ProviderTransaction[]
    currency_rate: number
    type: number
    module_category: ModuleCategory
    calculated_amount?: number
}

type CreateWheat = {
    truck_id: string
    truck_name: string
    full_mass: number
    wheat_mass: number
    truck_mass: number
    wheat_price: number
    provider: string
    comment: string
}

type EditWheat = {
    id: number
} & CreateWheat

type ProductItem = {
    id?: number
    price: number
    bag: number
}

type CreateProviderBagItemType = {
    id: number
    price: number
    bag: number
    provider: number
}

type ProviderOperationsWheat = {
    id: number
    created_at: Date
    model_type: "wheat" | "payment" | "bag"
    wheat_mass: number
    truck_id: string
    truck_name: string
    truck_mass: number
    full_mass: number
    wheat_price: string
    partner_balance: number
    balance: number
    total_amount: number
    comment: string
    bag_name: string
    bag_capacity: number
    bag_quantity: number
    price_per_bag: number
    total_price: number
    provider_balance: number
    currency_rate: number
    transactions: {
        checkout_name: string
        amount: number
        comment: string
        checkout: number
        currency: CurrencyType
    }[]
}
