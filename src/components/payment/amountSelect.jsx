import React from "react";

const AmountSelect = ({ setAmount, amount }) => {
  return (
    <section className="w-full my-5">
      <header className="font-medium text-lg leading-5 my-3">จำนวนเงิน</header>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount ? amount : ""}
        onChange={(e) => {
          console.log(amount);
          setAmount(e.target.value);
        }}
        placeholder="เริ่มต้นที่ 1 บาท"
        className="text-right text-xl w-full rounded-md p-2 border-primary border-2"
      />
    </section>
  );
};

export default AmountSelect;
