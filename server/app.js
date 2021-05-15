const express= require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.post('/api/passwords', (req,res) => {
    console.log(req.body);
    return res.json(generatePasswordsAsString(req.body.Length, req.body.Amount, req.body.Alphabet));
})

const generatePassword = (length, alphabet) =>
{
    const intLength = parseInt(length);

    let password = "";
    for(let i = 0; i<intLength; i++){
        password += alphabet.charAt(Math.floor(Math.random() * alphabet.length-1));
    }

    return password;
}

const generatePasswordsAsString = (length, amount, alphabet) =>
{
    const intAmount = parseInt(amount);
    let pwCount = 0;
    let passwords = "";
    while (pwCount < intAmount)
    {
        const password = generatePassword(length, alphabet);
        passwords += password +"\n";
        pwCount++;
    }
    console.log(passwords);
    return passwords;
}

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})