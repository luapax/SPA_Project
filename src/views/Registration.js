
export function Registration() {
    const section = document.createElement('section');
    section.classList.add('registration')

    section.innerHTML = `
    <h2>Registration</h2>
    <form>
    <div>
    <label>Login</label>
    <input type="text" placeholder="Your login"></input>
    </div>
    <div>
    <label>Password</label>
    <input type="text" placeholder="Your password"></input>
    </div>
    <form>
    `;
    return section;
}