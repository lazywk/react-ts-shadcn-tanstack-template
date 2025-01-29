import { cn } from "@/lib/utils"
import {
    FieldValues,
    Path,
    RegisterOptions,
    useController,
    UseFormReturn,
} from "react-hook-form"
import { NumericFormat, NumericFormatProps } from "react-number-format"
import ErrorMessage from "../ui/error-message"
import { Label } from "../ui/label"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    formatOptions?: Intl.NumberFormatOptions
    wrapperClassName?: string
    hideError?: boolean
    required?: boolean
    registerOptions?: RegisterOptions<IForm>
    rightIcon?: React.ReactNode
}

export default function FormNumberInput<IForm extends FieldValues>({
    methods,
    name,
    label,
    wrapperClassName,
    className,
    formatOptions,
    hideError = false,
    required = false,
    registerOptions,
    rightIcon,
    ...props
}: IProps<IForm> & NumericFormatProps) {
    const {
        field: { ref, onChange, value, ...field },
        fieldState: { error, isTouched },
    } = useController({
        name,
        control: methods.control,
        rules: {
            validate: {
                required: (val) => {
                    if (required && !val) {
                        return `${label || props.placeholder}ni kiriting`
                    }
                    return true
                },
            },
            ...registerOptions,
        },
    })

    return (
        <fieldset
            className={cn("flex flex-col gap-1 w-full", wrapperClassName)}
        >
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(!!error && "text-destructive")}
                    required={required}
                >
                    {label}
                </Label>
            )}

            <div className="relative flex items-center">
                <NumericFormat
                    id={name}
                    className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        rightIcon && "pr-12",
                        className,
                        isTouched &&
                            !!error &&
                            !label &&
                            "border-destructive focus:border-border !ring-destructive",
                    )}
                    thousandSeparator={" "}
                    getInputRef={ref}
                    placeholder={label}
                    defaultValue={""}
                    value={Number(value) || ""}
                    onValueChange={(val) => {
                        onChange(val.floatValue || "")
                    }}
                    allowNegative={false}
                    autoComplete="off"
                    isAllowed={({ floatValue }) => {
                        const num = Number(floatValue) || 0
                        const maxValue = Number(props.max)
                        const max = Number.isNaN(maxValue) ? Infinity : maxValue
                        const integerString = Math.trunc(num).toString()
                        const meetsSizeConstraint = integerString.length < 17

                        return num <= max && meetsSizeConstraint
                    }}
                    {...field}
                    {...props}
                />

                {rightIcon && (
                    <span
                        className={cn(
                            "absolute right-3 text-muted-foreground",
                            props.disabled && "cursor-not-allowed opacity-50",
                        )}
                    >
                        {rightIcon}
                    </span>
                )}
            </div>

            {!!error && !hideError && (
                <ErrorMessage>
                    {error.message || error.root?.message}
                </ErrorMessage>
            )}
        </fieldset>
    )
}
