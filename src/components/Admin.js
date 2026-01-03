import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function Admin() {
  const [skinless, setSkinless] = useState("");
  const [dressed, setDressed] = useState("");
  const [boneless, setBoneless] = useState("");

  const saveRates = async () => {
    if (!skinless || !dressed || !boneless) {
      alert("Please fill all fields");
      return;
    }

    // ✅ AUTO DATE (NO MANUAL ENTRY)
    const today = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    try {
      await setDoc(doc(db, "rates", "today"), {
        skinless,
        dressed,
        boneless,
        date: today,
        updatedAt: new Date() // optional (for tracking)
      });

      alert("Today's rates updated successfully!");
      setSkinless("");
      setDressed("");
      setBoneless("");
    } catch (error) {
      console.error(error);
      alert("Error updating rates");
    }
  };

  return (
    <div className="rate-card">
      <h2>Admin – Update Today's Rates</h2>

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
