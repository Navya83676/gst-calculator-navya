import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("18");

  const [gstAmount, setGstAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  useEffect(() => {
    document.title = "GST Calculator";
  }, []);

  useEffect(() => {
    if (amount > 0) {
      const gstValue =
        (Number(amount) * Number(gst)) / 100;

      const total =
        Number(amount) + gstValue;

      setGstAmount(gstValue.toFixed(2));
      setTotalAmount(total.toFixed(2));
    } else {
      setGstAmount("0.00");
      setTotalAmount("0.00");
    }
  }, [amount, gst]);

  const formattedAmount = Number(
    amount || 0
  ).toLocaleString("en-IN");

  const formattedGST = Number(
    gstAmount
  ).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
  });

  const formattedCGST = (
    Number(gstAmount) / 2
  ).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
  });

  const formattedTotal = Number(
    totalAmount
  ).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
  });

  return (
    <div className="container">
      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>
      <div className="bg-circle bg3"></div>

      <div className="hero">
        <div className="logo">₹</div>

        <div>
          <h1>GST Calculator</h1>

          <p>
            Calculate GST instantly with automatic
            CGST & SGST breakdown
          </p>
        </div>
      </div>

      <div className="dashboard">
        {/* LEFT */}

        <div className="calculator-card">
          <h2>Calculator</h2>

          <div className="form-group">
            <label>Amount (₹)</label>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>GST Rate</label>

            <select
              value={gst}
              onChange={(e) =>
                setGst(e.target.value)
              }
            >
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18">18%</option>
              <option value="28">28%</option>
            </select>
          </div>

          <div className="gst-buttons">
            <button
              className={gst === "5" ? "active" : ""}
              onClick={() => setGst("5")}
            >
              5%
            </button>

            <button
              className={gst === "12" ? "active" : ""}
              onClick={() => setGst("12")}
            >
              12%
            </button>

            <button
              className={gst === "18" ? "active" : ""}
              onClick={() => setGst("18")}
            >
              18%
            </button>

            <button
              className={gst === "28" ? "active" : ""}
              onClick={() => setGst("28")}
            >
              28%
            </button>
          </div>

          <div className="quick-summary">
            <div className="summary-box">
              <span>GST Amount</span>
              <strong>₹{formattedGST}</strong>
            </div>

            <div className="summary-box">
              <span>CGST</span>
              <strong>₹{formattedCGST}</strong>
            </div>

            <div className="summary-box">
              <span>SGST</span>
              <strong>₹{formattedCGST}</strong>
            </div>
          </div>

          <div className="action-buttons">
            <button
              className="reset-btn"
              onClick={() => {
                setAmount("");
                setGst("18");
              }}
            >
              Reset Calculator
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="result-card">
          <h2 className="breakdown-title">
            Tax Breakdown
          </h2>

          <div className="payable-box">
            <span>Total Payable</span>

            <h2>
              ₹{formattedTotal}
            </h2>
          </div>

          <div className="result-row">
            <span>Base Amount</span>
            <strong>
              ₹{formattedAmount}
            </strong>
          </div>

          <div className="result-row">
            <span>GST Amount</span>
            <strong>
              ₹{formattedGST}
            </strong>
          </div>

          <div className="result-row">
            <span>CGST</span>
            <strong>
              ₹{formattedCGST}
            </strong>
          </div>

          <div className="result-row">
            <span>SGST</span>
            <strong>
              ₹{formattedCGST}
            </strong>
          </div>

          <div className="result-row">
            <span>GST Rate</span>
            <strong>{gst}%</strong>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h3>Battula Navya</h3>

        <p>battulanavya2468@gmail.com</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
          className="dh-btn"
        >
          Built for Digital Heroes ↗
        </a>
      </footer>
    </div>
  );
}

export default App;