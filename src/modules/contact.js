export default function renderContact () {

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info")

  contactInfo.innerHTML = `
    <h2>Contact Us</h2>
    <p>Do you need to contact us? Complete the form providing us with your data and your message and we will respond as soon as possible.</p>
  `
  const form = document.createElement("form");
  form.action = "/";
  form.method = "post";

  form.innerHTML = `
    <div class="name-inputs">
      <label for="first-name">
        First Name
        <input type="text" name="first-name" id="first-name" placeholder="your first name">
      </label>
      <label for="last-name">
        Last Name
        <input type="text" name="last-name" id="last-name" placeholder="your last name">
      </label>
    </div>
    <label for="email">
      Email
      <input type="email" name="email" id="email" placeholder="you@example.com">
    </label>
    <label for="message">
      What can we help you with?
      <textarea name="message" id="message" cols="30" rows="5" placeholder="your message"></textarea>
    </label>
    <button type="button">Submit</button>
  `

  contactContainer.appendChild(contactInfo);
  contactContainer.appendChild(form);

  return contactContainer

}