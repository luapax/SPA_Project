export function Input(text, placeholder) {
    const input = document.createElement('input');
    input.setAttribute('placeholder', placeholder)
    input.innerText = text;
    input.required = true;
    return input;
}
