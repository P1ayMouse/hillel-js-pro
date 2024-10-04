let contacts = {
    contactsList: [
        {
            name: "John Smith",
            phone: 3808274938,
            email: "johnSmith@gmail.com"
        },
        {
            name: "Marta Stuart",
            phone: 3806478932,
            email: "martaStuart@gmail.com"
        },
        {
            name: "Preston Stark",
            phone: 3804298523,
            email: "prestonStark@gmail.com"
        }
    ],
    getContact: function (contactName) {
        let contact = this.contactsList.find(contact => contact.name === contactName);
        if (contact) {
            return `Contact name: ${contact.name}\nPhone number: +${contact.phone}\nMail address: ${contact.email}.`;
        }
        else {
            return "Contact not found";
        }

        },
    addNewContact (name, phone, email) {
        if (name.length > 2 && typeof phone === "number" && email.length > 10) {
            if (this.contactsList.push({name, phone, email})){
                let contact = this.contactsList[this.contactsList.length - 1];
                return `The new contact with name ${contact.name}, phone number +${contact.phone} and e-mail ${contact.email} is created.`;
            }
            else {
                return "Contact is not created"
            }
        }
        else {
            return "Incorrect data"
        }
    }
}

console.log(contacts.getContact("John Smith"));
console.log("\n" + contacts.getContact("John"));
console.log("\n" + contacts.addNewContact("Cameron Moon", 3805223423, "cameronMoon@gmail.com"));
console.log("\n" + contacts.addNewContact("Ali Cart", "phone number", "mail"));