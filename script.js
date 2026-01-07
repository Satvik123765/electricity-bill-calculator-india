function calculateBill() {
  const units = Number(document.getElementById("units").value);
  let bill = 0;
  let breakdown = "";

  if (units <= 0 || isNaN(units)) {
    document.getElementById("result").innerHTML = "Enter valid units.";
    return;
  }

  let remaining = units;

  if (remaining > 0) {
    let u = Math.min(100, remaining);
    let cost = u * 1.5;
    breakdown += `0–100 units: ₹${cost.toFixed(2)}<br>`;
    bill += cost;
    remaining -= u;
  }

  if (remaining > 0) {
    let u = Math.min(100, remaining);
    let cost = u * 2.5;
    breakdown += `101–200 units: ₹${cost.toFixed(2)}<br>`;
    bill += cost;
    remaining -= u;
  }

  if (remaining > 0) {
    let u = Math.min(200, remaining);
    let cost = u * 4;
    breakdown += `201–400 units: ₹${cost.toFixed(2)}<br>`;
    bill += cost;
    remaining -= u;
  }

  if (remaining > 0) {
    let cost = remaining * 6;
    breakdown += `Above 400 units: ₹${cost.toFixed(2)}<br>`;
    bill += cost;
  }

  const daily = (units / 30).toFixed(1);

  document.getElementById("result").innerHTML = `
    <strong>Bill Breakdown</strong><br>
    ${breakdown}
    <hr>
    <strong>Total Bill: ₹${bill.toFixed(2)}</strong><br>
    <small>Average usage: ${daily} units/day</small><br>
    <small style="color:gray;">*Sample domestic tariff (India)</small>
  `;
}
