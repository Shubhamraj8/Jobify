import app from './app.js';

app.listen(process.env.PORT, () => {
    console.log(`Server is running on https://localhost:${process.env.PORT}`);
})
