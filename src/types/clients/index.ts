type Client = {
    id: number
    inactive: boolean
    created_at: string
    updated_at: string
    full_name: string
    phone_number: string
    address: string
    payment_currency: number
    balance: string
    partner_type: number
    contact_interval: number
    products: ClientProductForm[]
}

type ClientProductForm = {
    id?: number
    product?: number
    discount?: string
    price_with_delivery?: string
}
type ClientForm = {
    full_name: string
    phone_number: string
    address: string
    balance: string
    contact_interval: number
    products: ClientProductForm[]
}

type ClientOptionItem = {
    id: number
    full_name: string
}
