class Order {
    name; //name order
    content; //video game content (videogame name and genre)
    price; //video game price (in dollars)

    constructor(name, content, price) {
        this.name = name;
        this.content = content;
        this.price = price;
    }

    details() {
        return `DATA ORDER: Name: ${this.name} | Content: [${this.content}] | Price: ${this.price}`
    }
}

// Export the Order class so it can be used in other files
module.exports = Order;
