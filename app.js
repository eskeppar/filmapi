require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const addressRouter = require('./routers/addressRouter');
const customerRouter = require('./routers/customerRouter');
const categoryRouter = require('./routers/categoryRouter');
const countryRouter = require('./routers/countryRouter');
const favoriteRouter = require('./routers/favoriteRouter');
const orderRouter = require('./routers/orderRouter');
const orderRowRouter = require('./routers/orderRowRouter');
const orderStatusRouter = require('./routers/orderStatusRouter');
const paymentMethodRouter = require('./routers/paymentMethodRouter');
const productCategoryRouter = require('./routers/productCategoryRouter');
const promoCodeRouter = require('./routers/promoCodeRouter');
const promoTypeRouter = require('./routers/promoTypeRouter');
const reviewRouter = require('./routers/reviewRouter');
const shippingMethodRouter = require('./routers/shippingMethodRouter');
const taxRouter = require('./routers/taxRouter');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(addressRouter());
app.use(countryRouter());
app.use(categoryRouter());
app.use(customerRouter());
app.use(favoriteRouter());
app.use(orderRouter());
app.use(orderRowRouter());
app.use(orderStatusRouter());
app.use(paymentMethodRouter());
app.use(productCategoryRouter());
app.use(promoCodeRouter());
app.use(promoTypeRouter());
app.use(reviewRouter());
app.use(shippingMethodRouter());
app.use(taxRouter());


app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
