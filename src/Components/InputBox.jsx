import { useId } from "react";
import Select from "react-select";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    selectChangingCurrency = "pkr",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    const handleAmountChange = (e) => {
        let value = e.target.value;

        // Remove leading zeros
        if (value.startsWith("0") && value.length > 1) {
            value = value.replace(/^0+/, "");
        }

        // Pass cleaned value to the parent component
        onAmountChange && onAmountChange(value === "" ? "" : Number(value));
    };

    // Format currency options for react-select
    const formattedOptions = currencyOptions.map((currency) => ({
        value: currency,
        label: currency.toUpperCase(), // Display in uppercase for better visibility
    }));

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Enter Amount Here"
                    disabled={amountDisable}
                    value={amount}
                    onChange={handleAmountChange}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right ">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <Select
    options={formattedOptions}
    value={formattedOptions.find((option) => option.value === selectCurrency)}
    onChange={(selectedOption) => onCurrencyChange && onCurrencyChange(selectedOption.value)}
    isDisabled={currencyDisable}
    className="text-left"
    styles={{
        control: (base) => ({
            ...base,
            height: '32px', // Adjust height here
            minHeight: '32px', // Set minimum height
            width: '128px',
            minWidth: '128px'
        }),
        dropdownIndicator: (base) => ({
            ...base,
            padding: '1px', // Adjust padding for dropdown indicator
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: 'none', // Optionally hide the separator
        }),
        singleValue: (base) => ({
            ...base,
            padding: '0', // Remove padding from single value
        }),
    }}
/>

            </div>
        </div>
    );
}

export default InputBox;
