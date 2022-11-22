export function Home() {
  const section = document.createElement('section');
  section.classList.add("home");

  section.innerHTML = `
    <h2>Witaj w Mindfull Space</h2>
    <p>Twoje samopoczucie jest dla nas najważniejsze</p>
    <section class="reservation">
    <form action="">
    <div>
      <label>Arrival</label>
      <input id="minDate" type="date" placeholder="12 Lip">
      </div>
      <div>
      <label>Departure</label>
      <input id="maxDate" type="date" placeholder="15 Lip">
      </div>

      <button>Book</button> 


    </form>
  </section>
    `;
  return section;
}

