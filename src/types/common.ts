type UzsType = 0
type UsdType = 1
type CurrencyType = UzsType | UsdType

type GetMe = {
    id: number
    first_name: string
    last_name: string
    permissions: Partial<TPermissions>
}

type TIncome = 0
type TExpense = 1
type TransactionType = TIncome | TExpense

// module categories types
type LocalWheatModule = 0
type KzWheatModule = 1
type BagModule = 2
type ClientModule = 3
type Provider = 4

type ModuleCategory =
    | LocalWheatModule
    | KzWheatModule
    | BagModule
    | ClientModule
    | Provider

type PaymentPayloadTransaction = {
    amount: string
    comment?: string
    checkout: number
    id?: number
}

type PaymentPayload = {
    transactions: PaymentPayloadTransaction[]
    module_category: ModuleCategory
    currency_rate?: string
    comment?: string
    category: number
    partner: number
}
