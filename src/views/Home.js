export function Home() {
    const section = document.createElement('section');

    section.innerHTML = `
    <h2>Witaj w Mindfull Space</h2>
    <p>Twoje samopoczucie jest dla nas najważniejsze</p>
    <section class="reservation">
    <form action="">
      <label>Arrival</label>
      <input type="date" placeholder="12 Lip">
      <label>Departure</label>
      <input type="date" placeholder="15 Lip">
      <button>Book</button>
    </form>
  </section>
    `;
    return section;
}

//moze tutaj dodac inputy z data