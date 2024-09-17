import DoughnutChart from "./DoughnutChart";
import AnimatedCounter from "./ui/AnimatedCounter";

const TotalBalanceBox = ({
  accounts = [],
  totalbanks,
  totalcurrentbalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* doughnut chart */}
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2 ">Bank Accounts: {totalbanks} </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalcurrentbalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
