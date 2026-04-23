const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const contact = String(formData.get("contact") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !contact || !message) {
    statusEl.textContent = "Пожалуйста, заполните все поля.";
    statusEl.style.color = "#b91c1c";
    return;
  }

  const lead = {
    name,
    contact,
    message,
    createdAt: new Date().toISOString(),
  };

  const leads = JSON.parse(localStorage.getItem("simpleXrayLeads") || "[]");
  leads.push(lead);
  localStorage.setItem("simpleXrayLeads", JSON.stringify(leads));

  statusEl.textContent = "Спасибо! Заявка сохранена. Мы свяжемся с вами в ближайшее время.";
  statusEl.style.color = "#0f766e";
  form.reset();
});
