document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    statusEl.textContent = "Sending...";

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        statusEl.textContent = "✅ Message sent!";
        form.reset();
      } else {
        statusEl.textContent = "❌ Error: " + result.error;
      }
    } catch (err) {
      console.error(err);
      statusEl.textContent = "❌ Failed to send. Check connection.";
    }
  });
});
