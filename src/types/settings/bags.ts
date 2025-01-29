type BagtItemTypes = {
    id: number
    image: string
    name: string
    types: {
        id: number
        capacity: number
    }[]
}

type CreateBag = {
    image: File | null
    name: string
    types: {
        index: number
        id?: number
        capacity: number
    }[]
}

type BagTypeItem = {
    id: number
    capacity: number
}

type CreateBagType = {
    capacity: number
    bag: number
}
