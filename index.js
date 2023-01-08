require("./index.css");


function $e297dd7ec46d60cd$export$353f5b6fc5456de1(text, onClickCallback) {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = text;
    button.addEventListener("click", onClickCallback);
    return button;
}


function $7fec7e3f477c52b6$export$a4cc7f57a60f8c44() {
    const img = "https://cdn.pixabay.com/photo/2020/01/22/08/19/handshake-4784749_960_720.png";
    const section = document.createElement("section");
    section.classList.add("userSection");
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>Welcome back User</h2>
    <div class="userDetials">
    <img src=${img} width=auto height=200></img>
    </div>
    `;
    const confirmReservation = (0, $e297dd7ec46d60cd$export$353f5b6fc5456de1)("Confirm Reservation", ()=>{
        alert("You reservation was accepted");
    });
    div.append(confirmReservation);
    section.append(div);
    return section;
}


function $0a9d8bee777e2bf4$export$f5b8910cec6cf069(text, placeholder) {
    const input = document.createElement("input");
    input.setAttribute("placeholder", placeholder);
    input.innerText = text;
    input.required = true;
    return input;
}




function $32fa841c6e81e4d6$export$886aedc946e040c() {
    const section = document.createElement("section");
    section.classList.add("registration");
    section.innerHTML = `
    <h2>Registration</h2>
    `;
    const sectionDetails = document.createElement("section");
    sectionDetails.classList.add("loginDetails");
    const form = document.createElement("form");
    form.setAttribute("id", "registration");
    //Section Login
    const sectionLogin = document.createElement("section");
    sectionLogin.classList.add("sectionLogin");
    const labelLogin = document.createElement("label");
    labelLogin.innerText = "E-mail";
    const loginInput = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Login", "Please write your e-mail");
    loginInput.setAttribute("id", "login");
    loginInput.setAttribute("type", "email");
    sectionLogin.append(labelLogin, loginInput);
    //Section password
    const sectionPassword = document.createElement("section");
    sectionPassword.classList.add("sectionPassword2");
    const labelPassword = document.createElement("label");
    labelPassword.innerText = "Password";
    const passwordInput = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Password", "Please write your password");
    passwordInput.setAttribute("id", "password");
    sectionPassword.append(labelPassword, passwordInput);
    //Section password
    const sectionPassword2 = document.createElement("section");
    sectionPassword2.classList.add("sectionPassword2");
    const labelPassword2 = document.createElement("label");
    labelPassword2.innerText = "Password";
    const passwordInput2 = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Password2", "Please repeat your password");
    passwordInput2.setAttribute("id", "password2");
    sectionPassword2.append(labelPassword2, passwordInput2);
    // Section SignUp
    const sectionSignin = document.createElement("section");
    sectionSignin.classList.add("sectionSignin");
    //Validation
    const validLogin = /^.{4,30}$/;
    const validPassword = /^(?=.*[A-Z])(?=.{8,})/;
    const RegistrationButton = document.createElement("button");
    RegistrationButton.innerText = "Sign Up";
    RegistrationButton.setAttribute("type", "submit");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if (!loginInput.value.match(validLogin)) alert("Your login has to have at least 4 characters and maximum 8");
        else if (!passwordInput.value.match(validPassword)) alert("Your password has to have at least 1 capital letter and minumum 8 characters");
        else if (passwordInput.value !== passwordInput2.value) alert("Your password doesn't match, please try once again");
        else {
            // Code for registration of the user will be added in next step of the project - node.js
            alert("User registration is not possible / website under reconstruction");
            const navigateEvent = new CustomEvent("navigate", {
                detail: ()=>(0, $e01ab9f3215d3e0f$export$88195aaac9f90319)()
            });
            document.body.dispatchEvent(navigateEvent);
        }
    });
    form.append(sectionLogin, sectionPassword, sectionPassword2, RegistrationButton);
    section.append(form);
    return section;
}


function $e01ab9f3215d3e0f$export$88195aaac9f90319() {
    const section = document.createElement("section");
    section.classList.add("login");
    section.innerHTML = `
    <h2>Log In</h2>
    `;
    const sectionDetails = document.createElement("section");
    sectionDetails.classList.add("loginDetails");
    const form = document.createElement("form");
    form.setAttribute("id", "login");
    //Section Login
    const sectionLogin = document.createElement("section");
    sectionLogin.classList.add("sectionLogin");
    const labelLogin = document.createElement("label");
    labelLogin.innerText = "E-mail";
    const loginInput = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Login", "Please add your e-mail");
    loginInput.setAttribute("id", "login");
    // loginInput.setAttribute("type", "email");
    sectionLogin.append(labelLogin, loginInput);
    //Section Password
    const sectionPassword = document.createElement("section");
    sectionPassword.classList.add("sectionPassword");
    const labelPassword = document.createElement("label");
    labelPassword.innerText = "Password";
    const passwordInput = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Password", "Please add your password");
    passwordInput.setAttribute("id", "login");
    sectionPassword.append(labelPassword, passwordInput);
    // Section SignUp
    const sectionSignin = document.createElement("section");
    sectionSignin.classList.add("sectionSignin");
    sectionSignin.innerHTML = `
    <p>Don't have the account?</p>
    `;
    const logInButton = document.createElement("button");
    logInButton.innerText = "Log In";
    logInButton.setAttribute("type", "submit");
    const signInButton = document.createElement("button");
    signInButton.innerText = "Sign Up";
    signInButton.classList.add("signInButton");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        // Code for registration of the user will be added in next step of the project - node.js
        alert("User log in is not possible / website under reconstruction");
    });
    signInButton.addEventListener("click", (e)=>{
        e.preventDefault();
        const navigateEvent = new CustomEvent("navigate", {
            detail: ()=>(0, $32fa841c6e81e4d6$export$886aedc946e040c)()
        });
        document.body.dispatchEvent(navigateEvent);
    });
    form.append(sectionLogin, sectionPassword, logInButton);
    sectionDetails.append(form);
    sectionSignin.append(signInButton);
    section.append(sectionDetails, sectionSignin);
    return section;
}


function $d7a9791ad1a445b3$export$affb0c2fbdaf466c() {
    const section = document.createElement("section");
    section.classList.add("datesInputs");
    const divWrapperDates = document.createElement("section");
    divWrapperDates.classList.add("divWrapperDates");
    const divWrapper1 = document.createElement("div");
    divWrapper1.classList.add("wrapperLabel1");
    const divWrapper2 = document.createElement("div");
    divWrapper2.classList.add("wrapperLabel2");
    const labelArrival = document.createElement("label");
    labelArrival.innerHTML = "Arrival";
    const labelDeparture = document.createElement("label");
    labelDeparture.innerHTML = "Departure";
    //Arrival minDate function
    const inputArrivalDate = document.createElement("input");
    inputArrivalDate.classList.add("inputArrival");
    const arrivalDate = new Date();
    const arrivalDay = arrivalDate.getDate() < 10 ? "0" + arrivalDate.getDate() : arrivalDate.getDate();
    const arrivalMonth = arrivalDate.getMonth() + 1 < 10 ? "0" + arrivalDate.getMonth() + 1 : arrivalDate.getMonth() + 1;
    const arrivalYear = arrivalDate.getFullYear();
    inputArrivalDate.setAttribute("type", "date");
    inputArrivalDate.setAttribute("min", `${arrivalYear}-${arrivalMonth}-${arrivalDay}`);
    inputArrivalDate.setAttribute("required", "required");
    //Department maxDate function
    const inputDepartureDate = document.createElement("input");
    inputDepartureDate.classList.add("inputDeparture");
    const departureDate = new Date();
    const departureDay = departureDate.getDate() < 10 ? "0" + departureDate.getDate() : departureDate.getDate();
    const departureMonth = departureDate.getMonth() + 1 < 10 ? "0" + departureDate.getMonth() + 1 : departureDate.getMonth() + 1;
    const departureYear = departureDate.getFullYear() + 1;
    inputDepartureDate.setAttribute("type", "date");
    inputDepartureDate.setAttribute("max", `${departureYear}-${departureMonth}-${departureDay}`);
    inputArrivalDate.setAttribute("max", `${departureYear}-${departureMonth}-${departureDay}`);
    inputDepartureDate.setAttribute("required", "required");
    inputArrivalDate.addEventListener("change", ()=>{
        console.log(inputArrivalDate.value);
        inputDepartureDate.setAttribute("min", inputArrivalDate.value);
    });
    divWrapper1.appendChild(labelArrival);
    divWrapper1.appendChild(inputArrivalDate);
    divWrapper2.appendChild(labelDeparture);
    divWrapper2.appendChild(inputDepartureDate);
    divWrapperDates.appendChild(divWrapper1);
    divWrapperDates.appendChild(divWrapper2);
    section.append(divWrapperDates);
    return section;
}


const $c7babab1435b3311$var$key = "IT_SPA_CART";
const $c7babab1435b3311$export$a8d74af4063a6ef4 = {
    addItem (item) {
        const cart = localStorage.getItem($c7babab1435b3311$var$key);
        if (cart === null) {
            const content = {
                [item.name]: {
                    quantity: 1,
                    item: item
                }
            };
            const stringifiedContent = JSON.stringify(content);
            localStorage.setItem($c7babab1435b3311$var$key, stringifiedContent);
        } else {
            const parsedContent = JSON.parse(cart);
            if (parsedContent.hasOwnProperty(item.name)) parsedContent[item.name].quantity += 1;
            else parsedContent[item.name] = {
                quantity: 1,
                item: item
            };
            const stringifiedContent1 = JSON.stringify(parsedContent);
            localStorage.setItem($c7babab1435b3311$var$key, stringifiedContent1);
        }
        alert("New item added to your cart");
    },
    removeItem (item) {
        const cart = localStorage.getItem($c7babab1435b3311$var$key);
        if (cart !== null) {
            const parsedContent = JSON.parse(cart);
            if (parsedContent.hasOwnProperty(item.name)) {
                const quantity = parsedContent[item.name].quantity;
                if (quantity > 1) parsedContent[item.name].quantity -= 1;
                else delete parsedContent[item.name];
                const stringifiedContent = JSON.stringify(parsedContent);
                localStorage.setItem($c7babab1435b3311$var$key, stringifiedContent);
            }
        }
    },
    getAllItems () {
        const cart = localStorage.getItem($c7babab1435b3311$var$key);
        if (cart === null) return [];
        else {
            const parsedContent = JSON.parse(cart);
            return Object.values(parsedContent);
        }
    },
    getTotal () {
        const cart = localStorage.getItem($c7babab1435b3311$var$key);
        if (cart === null) return 0;
        else {
            const parsedContent = JSON.parse(cart);
            return Object.values(parsedContent) // [ { quantity: 2, item: {} }, { quantity: 3, item: {} }, ... ]
            .reduce((accumulator, cartEntry)=>{
                return accumulator + cartEntry.quantity * cartEntry.item.price;
            }, 0);
        }
    },
    isEmpty () {
        const cart = localStorage.getItem($c7babab1435b3311$var$key);
        if (cart !== null) {
            const parsedContent = JSON.parse(cart);
            return Object.entries(parsedContent).length === 0;
        }
        return true;
    }
};



function $4d80fed43da466b0$export$4f9b4f8cb84c809f() {
    const section = document.createElement("section");
    section.classList.add("booking");
    section.innerHTML = `
    <h2>Booking</h2>
    <p>Please add your personal information</p>
    `;
    const sectionDetails = document.createElement("section");
    sectionDetails.classList.add("bookingDetails");
    const form = document.createElement("form");
    //Name
    const sectionName = document.createElement("section");
    sectionName.classList.add("sectionInputs");
    const labelName = document.createElement("label");
    labelName.innerText = "Name";
    const inputName = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Name", "Plase add your name");
    sectionName.append(labelName, inputName);
    //Surname
    const sectionSurname = document.createElement("section");
    sectionSurname.classList.add("sectionInputs");
    const labelSurname = document.createElement("label");
    labelSurname.innerText = "Surname";
    const inputSurname = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Surname", "Plase add your surename");
    sectionSurname.append(labelSurname, inputSurname);
    //Street
    const sectionStreet = document.createElement("section");
    sectionStreet.classList.add("sectionInputs");
    const labelStreet = document.createElement("label");
    labelStreet.innerText = "Street";
    const inputStreet = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Street", "Plase add your street");
    sectionStreet.append(labelStreet, inputStreet);
    //StreetNumber
    const sectionStreetNumber = document.createElement("section");
    sectionStreetNumber.classList.add("sectionInputs");
    const labelStreetNumber = document.createElement("label");
    labelStreetNumber.innerText = "Street Number";
    const inputStreetNumber = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Street Number", "Plase add your street number");
    sectionStreetNumber.append(labelStreetNumber, inputStreetNumber);
    //City
    const sectionCity = document.createElement("section");
    sectionCity.classList.add("sectionInputs");
    const labelCity = document.createElement("label");
    labelCity.innerText = "City";
    const inputCity = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("City", "Plase add your city");
    sectionCity.append(labelCity, inputCity);
    //PhoneNumber
    const sectionPhone = document.createElement("section");
    sectionPhone.classList.add("sectionInputs");
    const labelPhone = document.createElement("label");
    labelPhone.innerText = "Phone";
    const inputPhone = (0, $0a9d8bee777e2bf4$export$f5b8910cec6cf069)("Phone", "Plase add your phone number");
    sectionPhone.append(labelPhone, inputPhone);
    const confirmationButton = document.createElement("button");
    confirmationButton.innerText = "Book";
    confirmationButton.setAttribute("type", "submit");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if ((0, $c7babab1435b3311$export$a8d74af4063a6ef4).isEmpty() === true) {
            alert("Your cart is empty!");
            return;
        } else {
            const navigateEvent = new CustomEvent("navigate", {
                detail: ()=>(0, $e01ab9f3215d3e0f$export$88195aaac9f90319)()
            });
            document.body.dispatchEvent(navigateEvent);
        }
    });
    form.append(sectionName, sectionSurname, sectionStreet, sectionStreetNumber, sectionCity, sectionPhone, (0, $d7a9791ad1a445b3$export$affb0c2fbdaf466c)(), confirmationButton);
    sectionDetails.append(form);
    section.append(sectionDetails);
    return section;
}




function $4c823f487718e0d9$export$41e0371c73739e11() {
    const section = document.createElement("section");
    section.classList.add("reservation");
    const buttonBook = (0, $e297dd7ec46d60cd$export$353f5b6fc5456de1)("Book", ()=>{
        const navigateEvent = new CustomEvent("navigate", {
            detail: ()=>(0, $4d80fed43da466b0$export$4f9b4f8cb84c809f)()
        });
        document.body.dispatchEvent(navigateEvent);
    });
    section.append((0, $d7a9791ad1a445b3$export$affb0c2fbdaf466c)());
    section.append(buttonBook);
    return section;
}


function $07f15aa5cb83589b$export$b94310965bed44e6() {
    const section = document.createElement("section");
    section.classList.add("home");
    section.innerHTML = `
    <h2>Witaj w Mindfull Space</h2>
    <p>Twoje samopoczucie jest dla nas najważniejsze</p>
    `;
    section.append((0, $4c823f487718e0d9$export$41e0371c73739e11)());
    return section;
}







function $020196485cfdda81$export$e8121f7c2d172894(id) {
    const section = document.createElement("section");
    section.classList.add("roomDetails");
    section.innerHTML = `
      <header>Loading...</header>
    `;
    fetch(`https://my-json-server.typicode.com/luapax/jsonServer/rooms/${id}`).then((response)=>response.json()).then((room)=>{
        const backButton = (0, $e297dd7ec46d60cd$export$353f5b6fc5456de1)("Back", ()=>{
            const navigateEvent = new CustomEvent("navigate", {
                detail: ()=>(0, $4a793c1aec9c40ef$export$d5604a178255ce27)()
            });
            document.body.dispatchEvent(navigateEvent);
        });
        const paragraph = document.createElement("p");
        paragraph.innerHTML = `
          <img src=${room.img} width=auto height=150></img>
          <div>
          <strong>Nazwa:</strong> ${room.name}
          <br/>
          <strong>Beds:</strong> ${room.beds}x🛏️
          <br/>
          <strong>Guests:</strong> ${room.guests}x👤
          <br/>
          <strong>Description:</strong> ${room.description}
          <br/>
          <strong>Price:</strong> ${room.price.toFixed(2)} zł
          </div>
        `;
        section.querySelector("header").remove();
        section.append(paragraph);
        section.append(backButton);
    });
    return section;
}


function $4f446651ff430fed$export$38e89f729bf6636c(room) {
    const li = document.createElement("li");
    const readMoreButton = (0, $e297dd7ec46d60cd$export$353f5b6fc5456de1)("Read More", ()=>{
        const navigateEvent = new CustomEvent("navigate", {
            detail: ()=>(0, $020196485cfdda81$export$e8121f7c2d172894)(room.id)
        });
        document.body.dispatchEvent(navigateEvent);
    });
    const addToCartButton = (0, $e297dd7ec46d60cd$export$353f5b6fc5456de1)("Add To Cart", ()=>{
        (0, $c7babab1435b3311$export$a8d74af4063a6ef4).addItem(room);
    });
    li.innerHTML = `
      <img src=${room.img} width=auto height=150></img>
      <h6>Room</h6>
      <h5>${room.name}</h5>
      <p>
        <strong>${room.price.toFixed(2)} zł</strong>
      </p>
      <footer></footer>
    `;
    li.querySelector("footer").append(readMoreButton, addToCartButton);
    return li;
}


function $4a793c1aec9c40ef$export$d5604a178255ce27() {
    const section = document.createElement("section");
    section.classList.add("rooms");
    section.innerHTML = `
    <h2>Rooms List</h2>
    <header>Loading...</header>
  `;
    // using github server
    fetch("https://my-json-server.typicode.com/luapax/jsonServer/rooms").then((response)=>response.json()).then((rooms)=>{
        const ul = document.createElement("ul");
        const lis = rooms.map((room)=>(0, $4f446651ff430fed$export$38e89f729bf6636c)(room));
        ul.append(...lis);
        section.querySelector("header").remove();
        section.append(ul);
    });
    return section;
}




function $072ef06880fa06d3$export$494d083da011ade5() {
    const section = document.createElement("section");
    section.classList.add("cart");
    section.innerHTML = `
    <h2>Cart</h2>
    <p>Oto zawartość Twojego koszyka:</p>
  `;
    const table = document.createElement("table");
    table.classList.add("table");
    const tableHead = document.createElement("tr");
    tableHead.innerHTML = `
    <th>Name</th>
    <th>Picture</th>
    <th>Price</th>
    <th>Quantity</th>
    <th></th>
  `;
    const tableRows = (0, $c7babab1435b3311$export$a8d74af4063a6ef4).getAllItems().map((cartEntry)=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${cartEntry.item.name}</td>
      <td><img width=100 height=auto src=${cartEntry.item.img}></img></td>
      <td>${cartEntry.item.price.toFixed(2)} zł</td>
      <td>x${cartEntry.quantity}</td>

      <td></td>
     
    `;
        const removeFromCart = (0, $e297dd7ec46d60cd$export$353f5b6fc5456de1)("\uD83D\uDDD1️", ()=>{
            (0, $c7babab1435b3311$export$a8d74af4063a6ef4).removeItem(cartEntry.item);
            const navigateEvent = new CustomEvent("navigate", {
                detail: $072ef06880fa06d3$export$494d083da011ade5
            });
            document.body.dispatchEvent(navigateEvent);
        });
        tr.lastElementChild.append(removeFromCart);
        return tr;
    });
    const tableFooter = document.createElement("tr");
    tableFooter.innerHTML = `
      <td></td>
      <td></td>
      <td>
        <strong>Total: ${(0, $c7babab1435b3311$export$a8d74af4063a6ef4).getTotal().toFixed()} zł</strong>
      </td>
      <td></td>
    `;
    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);
    return section;
}




function $33dae9d5f8c37693$export$a9bba6cad2875015(treatment) {
    const li = document.createElement("li");
    const addToCartButton = (0, $e297dd7ec46d60cd$export$353f5b6fc5456de1)("Add To Cart", ()=>{
        (0, $c7babab1435b3311$export$a8d74af4063a6ef4).addItem(treatment);
    });
    li.innerHTML = `
      <img src=${treatment.img} width=auto height=150></img>
      <h5>${treatment.name}</h5>
      <h6>Area: ${treatment.area}</h6>
      <h6>Time: ${treatment.time}</h6>
      <p>
        <strong>${treatment.price.toFixed(2)} zł</strong>
      </p>
      <footer></footer>
    `;
    li.querySelector("footer").append(addToCartButton);
    return li;
}


function $67d9e2e8b0d0865b$export$51eae5f5dfed8650() {
    const section = document.createElement("section");
    section.classList.add("treatments");
    section.innerHTML = `
    <h2>Treatments List</h2>
    <header>Loading...</header>
  `;
    // using github server
    fetch("https://my-json-server.typicode.com/luapax/jsonServer/treatments").then((response)=>response.json()).then((treatments)=>{
        const ul = document.createElement("ul");
        const lis = treatments.map((treatment)=>(0, $33dae9d5f8c37693$export$a9bba6cad2875015)(treatment));
        ul.append(...lis);
        section.querySelector("header").remove();
        section.append(ul);
    });
    return section;
}




// Navigation made based on below []
const $7fa6016cae6176b2$var$navItems = [
    {
        name: "HOME",
        component: (0, $07f15aa5cb83589b$export$b94310965bed44e6)
    },
    {
        name: "ROOMS",
        component: (0, $4a793c1aec9c40ef$export$d5604a178255ce27)
    },
    {
        name: "TREATMENTS",
        component: (0, $67d9e2e8b0d0865b$export$51eae5f5dfed8650)
    },
    {
        name: "BOOKING",
        component: (0, $4d80fed43da466b0$export$4f9b4f8cb84c809f)
    },
    {
        name: "LOG IN",
        component: (0, $e01ab9f3215d3e0f$export$88195aaac9f90319)
    },
    {
        name: "YOUR CART \uD83D\uDED2",
        component: (0, $072ef06880fa06d3$export$494d083da011ade5)
    }
];
function $7fa6016cae6176b2$export$39140c7d8b0ba7b3() {
    const nav = document.createElement("nav");
    const navButtons = $7fa6016cae6176b2$var$navItems.map((navItem)=>{
        const div = document.createElement("div");
        const navButton = document.createElement("button");
        navButton.setAttribute("type", "button");
        // navButton.innerText = navItem.name;
        div.innerText = navItem.name;
        navButton.appendChild(div);
        navButton.addEventListener("click", ()=>{
            const navigateEvent = new CustomEvent("navigate", {
                detail: navItem.component
            });
            document.body.dispatchEvent(navigateEvent);
        });
        return navButton;
    });
    navButtons[navButtons.length - 1].classList.add("cartButton");
    nav.append(...navButtons);
    return nav;
}


function $c071ef900c125ddf$export$c1098b089c1dd9dc() {
    if (window.innerWidth <= 737) return;
    else {
        const cartNavSection = document.querySelector(".cartNavSection");
        const cartButton = document.querySelector(".cartButton");
        cartButton.addEventListener("mouseenter", ()=>{
            cartNavSection.style.display = "flex";
        });
        cartButton.addEventListener("mouseleave", ()=>{
            cartNavSection.style.display = "none";
        });
    }
}



function $ba2ea9e42b5cbbdf$export$defd44f4e4ccf5b7() {
    const section = document.createElement("section");
    section.classList.add("cartNavSection");
    section.innerHTML = `
    <h2>Cart</h2>
    <p>Oto zawartość Twojego koszyka:</p>
  `;
    const table = document.createElement("table");
    table.classList.add("table");
    const tableHead = document.createElement("tr");
    tableHead.innerHTML = `
        <th>Quantity</th>
      <th>Picture</th>
      <th>Price</th>

    `;
    const tableRows = (0, $c7babab1435b3311$export$a8d74af4063a6ef4).getAllItems().map((cartEntry)=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>x${cartEntry.quantity}</td>
    <td><img width=100 height=auto src=${cartEntry.item.img}></img></td>
    <td>${cartEntry.item.price.toFixed(2)} zł</td>

   
  `;
        return tr;
    });
    const tableFooter = document.createElement("tr");
    tableFooter.innerHTML = `
    <td></td>
    <td></td>
    <td>
      <strong>Total: ${(0, $c7babab1435b3311$export$a8d74af4063a6ef4).getTotal().toFixed()} zł</strong>
    </td>
    <td></td>
  `;
    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);
    return section;
}



const $e5d124a7a0aec837$var$main = document.querySelector("main");
$e5d124a7a0aec837$var$main.before((0, $7fa6016cae6176b2$export$39140c7d8b0ba7b3)());
$e5d124a7a0aec837$var$main.append((0, $ba2ea9e42b5cbbdf$export$defd44f4e4ccf5b7)());
$e5d124a7a0aec837$var$main.append((0, $07f15aa5cb83589b$export$b94310965bed44e6)());
(0, $c071ef900c125ddf$export$c1098b089c1dd9dc)();
document.body.addEventListener("navigate", (event)=>{
    const { detail: Component  } = event;
    $e5d124a7a0aec837$var$main.innerHTML = "";
    $e5d124a7a0aec837$var$main.append(Component());
    $e5d124a7a0aec837$var$main.append((0, $ba2ea9e42b5cbbdf$export$defd44f4e4ccf5b7)());
    (0, $c071ef900c125ddf$export$c1098b089c1dd9dc)();
});


//# sourceMappingURL=index.js.map
