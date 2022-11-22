import { HomeBooking } from "./Home-booking"


export function Home() {
  const section = document.createElement('section');
  section.classList.add("home");

  section.innerHTML = `
    <h2>Witaj w Mindfull Space</h2>
    <p>Twoje samopoczucie jest dla nas najważniejsze</p>
    `;

  section.append(HomeBooking());

  return section;
}



