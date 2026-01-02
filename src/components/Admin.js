import { useState } from "react";

function Admin() {
  const [skinless, setSkinless] = useState("");
  const [dressed, setDressed] = useState("");
  const [boneless, setBoneless] = useState("");

  const saveRates = () => {
    if (!skinless || !dressed || !boneless) {
      alert("Please fill all fields");
      return;
    }

    const rates = {
      skinless,
      dressed,
      boneless,
      date: new Date().toLocaleDateString("en-IN")
    };

    localStorage.setItem("dailyRates", JSON.stringify(rates));
    alert("Rates updated successfully!");
  };

  return (
    <div className="rate-card">
      <h2>Admin – Update Rates</h2>

      <input
        placeholder="Skinless (₹/kg)"
        value={skinless}
        onChange={(e) => setSkinless(e.target.value)}
      />

      <input
        placeholder="Dressed (₹/kg)"
        value={dressed}
        onChange={(e) => setDressed(e.target.value)}
      />

      <input
        placeholder="Boneless (₹/kg)"
        value={boneless}
        onChange={(e) => setBoneless(e.target.value)}
      />

      <button onClick={saveRates}>Update Rates</button>
    </div>
  );
}

export default Admin;
