type WheatItem = {
    id: number
    date: string
    kz_wheat: number
    local_wheat: number
}

type ProductItemType = {
    id: number
    name: string
    amount: number
}

type WarehouseReadyProduct = {
    id: string
    created_at: string
    wheat_mass: string
    log: Record<string, string>
}

type LeftProductItemType = {
    id: number
    name: string
    amount: number
    date: string
}

type WarehouseBagItem = {
    id: number
    bag_name: string
    capacity: number
    bag_capacity: number
    packaged_product: string
    quantity: number
    bag: number
}

type WarehouseProductItem = WarehouseBagItem & {
    bag: string
}
type PkgProductItemsType = {
    id: number
    name: string
    count: number
}

type CreatePackagedWheat = {
    amount: number
}

type PackagedProductParametrs = {
    id: number
    capacity: number
    quantity: number
}

type PackagedProductTableParametrs = {
    id: number
    capacity: number
    quantity: number
    image: string
    name: string
}

type PackagedProductItem = {
    id: number
    name: string
    image: string
    category: number
    category_name: string
    products: PackagedProductParametrs[]
}

type PackagedProductTableItem = {
    id: number
    name: string
    image: string
    category: number
    products: PackagedProductTableParametrs[]
}
