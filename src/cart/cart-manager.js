
const key = 'IT_SPA_CART';

export const cartManager = {

    addItem(item) {
        const cart = localStorage.getItem(key);

        if (cart === null) {
            const content = {
                [item.name]: { quantity: 1, item: item },// ALBO: { ..., item }
            };

            const stringifiedContent = JSON.stringify(content);
            localStorage.setItem(key, stringifiedContent);

        } else {
            const parsedContent = JSON.parse(cart);

            if (parsedContent.hasOwnProperty(item.name)) {
                parsedContent[item.name].quantity += 1;
            } else {
                parsedContent[item.name] = { quantity: 1, item: item };
            }

            const stringifiedContent = JSON.stringify(parsedContent);
            localStorage.setItem(key, stringifiedContent);
        }
    },

    removeItem(item) {
        const cart = localStorage.getItem(key);

        if (cart !== null) {
            const parsedContent = JSON.parse(cart);

            if (parsedContent.hasOwnProperty(item.name)) {
                const quantity = parsedContent[item.name].quantity;

                if (quantity > 1) {
                    parsedContent[item.name].quantity -= 1;
                } else {
                    delete parsedContent[item.name];
                    // parsedContent[item.name] = undefined;
                }

                const stringifiedContent = JSON.stringify(parsedContent);
                localStorage.setItem(key, stringifiedContent);
            }
        }
    },

    getAllItems() {
        const cart = localStorage.getItem(key);

        if (cart === null) {
            return [];
        } else {
            const parsedContent = JSON.parse(cart);
            return Object.values(parsedContent);
        }
    },

    getTotal() {
        const cart = localStorage.getItem(key);

        if (cart === null) {
            return 0;
        } else {
            const parsedContent = JSON.parse(cart);

            return Object.values(parsedContent) // [ { quantity: 2, item: {} }, { quantity: 3, item: {} }, ... ]
                .reduce((accumulator, cartEntry) => {
                    return accumulator + cartEntry.quantity * cartEntry.item.price;
                }, 0);
        }
    }
};


