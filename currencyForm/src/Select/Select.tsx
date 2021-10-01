import './Select.css';

type SelectProps = {
    handleSelect: (e: any) => void,
    product?: string
}

const Select = ({ handleSelect, product }: SelectProps) => (
    <label>Wybierz produkt:
        <select className="Select" value={product} onChange={handleSelect}>
            <option value="electricity">prąd</option>
            <option value="petrol">benzyna</option>
            <option value="oranges">pomarańcze</option>
        </select>
    </label>
)

export default Select;
