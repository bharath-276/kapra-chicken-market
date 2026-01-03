import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "./Loader";

function TodayRates() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const ref = doc(db, "rates", "today");

    const unsubscribe = onSnapshot(ref, (docSnap) => {
      if (docSnap.exists()) {
        setRate(docSnap.data());
      }
    });

    return () => unsubscribe();
  }, []);

  if (!rate) return <Loader />;

  return (
    <div className="rate-card">
      <h2>Today's Rates</h2>
      <p className="date">{rate.date}</p>

      <p className="rate"> Skinless: ₹{rate.skinless} / kg</p>
      <p className="rate"> Dressed: ₹{rate.dressed} / kg</p>
      <p className="rate"> Boneless: ₹{rate.boneless} / kg</p>
    </div>
  );
}

export default TodayRates;
