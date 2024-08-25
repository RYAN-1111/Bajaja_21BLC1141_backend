const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];

    const fullName = "Ryan Ranjit Abraham";
    const dob = "05082003";  
    const userId = `${fullName}_${dob}`;
    const email = "ryanranjit.abraham2021@vitstudent.ac.in"
    const rollNumber = "21BLC1141"; 

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highest_lowercase_alphabet = lowercaseAlphabets.length > 0 
        ? [lowercaseAlphabets.sort().slice(-1)[0]]
        : [];

    const response = {
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase_alphabet
    };

    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
