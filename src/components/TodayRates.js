import { useEffect, useState } from "react";
import ratesData from "../data/rates";
import Loader from "./Loader";

function TodayRates() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const latestRate = ratesData[ratesData.length - 1];

  const savedRates = JSON.parse(localStorage.getItem("dailyRates"));

  const rate = savedRates || latestRate;

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="rate-card">
      <h2>Today's Rates</h2>
      <p className="date">{today}</p>

      <p className="rate"> Skinless: ₹{rate.skinless} / kg</p>
      <p className="rate"> Dressed: ₹{rate.dressed} / kg</p>
      <p className="rate"> Boneless: ₹{rate.boneless} / kg</p>
    </div>
  );
}

export default TodayRates;
