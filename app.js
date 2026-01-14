if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'development') {
    require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
// const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
const port = process.env.PORT || 3000

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 설정
const route = require('./routes');
const ejsRouter = require('./routes/ejs.routes');

app.use('/api', route);
app.use(ejsRouter);

// app.use(errorMiddleware);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.enable('trust proxy');

app.listen(port, '0.0.0.0', () => {
    console.log(port, '포트로 서버가 열렸어요!');
});

module.exports = app;
