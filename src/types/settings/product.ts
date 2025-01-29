type PackagedProductPackage = {
    id: number
    price: string
    bag: { id: number; capacity: number }
}
type PackagedProduct = {
    id: number
    image: string
    name: string
    price_for_one: number
    category: ProductCategory
    products: PackagedProductPackage[]
}
type PackagedProductPostResponse = {
    id: number
    products: {
        id: number
        price: string
        quantity: number
        packaged_product: number
        bag: number
    }[]
    name: string
    image: string
    category: number
    price_for_one: number
}

type FormProductPackage = {
    id?: number
    price?: string
    bag?: number
}
type FormPackagedProduct = {
    id?: number
    image?: File | string
    name: string
    category: number
    price_for_one: number
    products: FormProductPackage[]
}
