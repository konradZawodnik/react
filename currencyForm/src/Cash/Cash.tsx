type CashProps = {
  cash: string;
  price: number;
  ratio: number;
  title: string;
};

const Cash = ({ cash, price, ratio, title }: CashProps) => {
  const value = ((Number(cash) / ratio) * price).toFixed(2);
  return (
    <div data-testid="currencyFormCash">
      {title} {Number(cash) <= 0 ? (0).toFixed(2) : value}
    </div>
  );
};

export default Cash;
