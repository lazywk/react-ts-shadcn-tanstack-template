/* eslint-disable @typescript-eslint/no-explicit-any */
import { PAGE_KEY } from "@/constants/common"
import { cn } from "@/lib/utils"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { ChevronDown } from "lucide-react"
import { ReactNode, useEffect } from "react"
import Select, {
    ClassNamesConfig,
    MenuListProps,
    Props,
    ValueContainerProps,
    components,
} from "react-select"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"

type Option = Record<string, any>

interface IProps extends Props<Option> {
    filterKey: string
    currentPageKey?: string
    optLabel?: string
    optValue?: string
    label?: ReactNode
    wrapperClassname?: string
    pageKey?: string
    onValueChange?: () => void
}

export default function FilterSelect({
    filterKey,
    pageKey = PAGE_KEY,
    options = [],
    classNames,
    optLabel = "name",
    optValue = "id",
    components,
    label,
    wrapperClassname,
    required,
    onValueChange,
    ...props
}: IProps) {
    const navigate = useNavigate()
    const search = useSearch({ strict: false })
    // @ts-expect-error sdf
    const filterVal = search[filterKey]

    // @ts-expect-error sdf
    const currentVal = options.find((o) => o[optValue] === filterVal) || null

    const multiCurrentVal =
        props.isMulti ?
            // @ts-expect-error sdf
            options.filter((o) => filterVal?.includes(o[optValue]))
        :   []

    useEffect(() => {
        if (props.defaultValue) {
            navigate({
                // @ts-expect-error sdf
                search: {
                    ...search,
                    [filterKey]: (props.defaultValue as Option)[optValue],
                },
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.defaultValue])

    const handleOnChange = (opt: Option | Option[] | null) => {
        if (onValueChange) {
            onValueChange()
        }
        navigate({
            // @ts-expect-error sdf
            search: {
                ...search,
                [pageKey]: undefined,
            },
        })
        if (opt) {
            if (props.isMulti && Array.isArray(opt)) {
                navigate({
                    // @ts-expect-error sdf
                    search: {
                        ...search,
                        [filterKey]: opt.map((o) => o[optValue]),
                    },
                })
                if (opt.length === 0) {
                    navigate({
                        // @ts-expect-error sdf
                        search: {
                            ...search,
                            [filterKey]: undefined,
                        },
                    })
                }
            } else {
                navigate({
                    // @ts-expect-error sdf
                    search: {
                        ...search,
                        [filterKey]: (opt as Option)[optValue],
                    },
                })
            }
        } else {
            navigate({
                // @ts-expect-error sdf
                search: {
                    ...search,
                    [filterKey]: undefined,
                },
            })
        }
    }

    return (
        <div className={cn("inline-flex flex-col gap-1.5", wrapperClassname)}>
            {label && (
                <Label htmlFor={props.name} required={required}>
                    {label}
                </Label>
            )}
            <Select
                getOptionLabel={(opt: Option) => opt[optLabel]}
                getOptionValue={(opt: Option) => opt[optValue]}
                value={props.isMulti ? multiCurrentVal : currentVal}
                options={options}
                components={{
                    DropdownIndicator,
                    ValueContainer,
                    MenuList,
                    ...components,
                }}
                isClearable
                classNames={{ ...defaultSelectClassNames, ...classNames }}
                onChange={handleOnChange}
                unstyled
                noOptionsMessage={() => "Mavjud emas"}
                hideSelectedOptions={false}
                closeMenuOnSelect={!props.isMulti}
                placeholder={label}
                menuPortalTarget={document.body}
                styles={{
                    menuPortal: (base) => ({
                        ...base,
                        zIndex: 9999,
                        pointerEvents: "all",
                    }),
                }}
                {...props}
            />
        </div>
    )
}

const defaultSelectClassNames: ClassNamesConfig<Option> = {
    container: ({ className }) => cn("inline-block min-w-40", className),
    control: ({ isFocused, isDisabled }) =>
        cn(
            "h-9 flex rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium",
            isFocused ? "outline-none ring-2 ring-ring" : "",
            isDisabled ? "opacity-50" : "",
        ),
    placeholder: () => cn("text-muted-foreground truncate"),
    clearIndicator: () => cn("text-primary"),
    menuList: () =>
        cn(
            "mt-2 p-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
        ),
    option: ({ isSelected }) =>
        cn(
            "first:rounded-t-xl last:rounded-b-xl px-3 py-2 text-sm outline-none hover:bg-secondary border-b last:border-none",
            isSelected ? "bg-primary text-background hover:bg-primary" : "",
        ),
    multiValue: () =>
        cn("bg-secondary rounded-md px-[4px] py-[2px] gap-1 justify-between"),
    valueContainer: () => "gap-1",
}

const DropdownIndicator = () => (
    <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
)

const MenuList = (props: MenuListProps<Option>) => {
    const { children, getValue, options, setValue, isMulti } = props
    const val = getValue()

    return (
        <components.MenuList {...props}>
            {isMulti && (
                <>
                    <p className="flex items-center gap-2 p-2 text-xs">
                        <Checkbox
                            onCheckedChange={(v) => {
                                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                                v ?
                                    setValue(options, "select-option")
                                :   setValue([], "deselect-option")
                            }}
                            checked={val.length === options.length}
                        />{" "}
                        Barchasini tanlash
                    </p>
                    <Separator />
                </>
            )}
            {children}
        </components.MenuList>
    )
}

const ValueContainer = ({
    children,
    ...props
}: ValueContainerProps<Option>) => {
    // eslint-disable-next-line prefer-const
    let [values, input] = children as ReactNode[]

    if (Array.isArray(values)) {
        values = `${values.length} ta tanlandi`
    }

    return (
        <components.ValueContainer {...props}>
            {values}
            {input}
        </components.ValueContainer>
    )
}
