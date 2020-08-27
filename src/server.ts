import dbConnect from './database/config';
import app from './app/index';

const PORT: number = parseInt(process.env.PORT || '3333');

dbConnect();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
