async function updateVisitorCount() {
  const counterEl = document.getElementById("visitor-count");

  try {
    const response = await fetch("https://ka14bycopi.execute-api.us-east-1.amazonaws.com/default/VisitorCounterFunction");
    const data = await response.json();
    counterEl.innerText = `👁️ Visitors: ${data.count}`;
  } catch (err) {
    console.error("Visitor counter error:", err);
    counterEl.innerText = "👁️ Visitors: unavailable";
  }
}

updateVisitorCount();
