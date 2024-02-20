const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AshishGupta:<password>@cluster0.uku1orz.mongodb.net/?retryWrites=true&w=majority")


const User = mongoose.model('Users', {name: String, email: string, password: string});

const user = new User
({
name: 'Ashish Gupta', 
email: 'tzirw@example.com', 
password: '123456'
})


user.save();