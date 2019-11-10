import {sign} from '../../services/jwt';
import {success} from '../../services/response/';
import axios from 'axios';
import coinbase from 'coinbase-commerce-node';
var Checkout = coinbase.resources.Checkout;
var Client = coinbase.Client;

Client.init('ad2a2d82-c0e8-41b0-bd84-ff29b7522f43');

export const createCharge = ({body: {amount}}, res, next) => {
  // console.log(req.amount);

  var checkoutData = {
    name: 'The Sovereign Individual',
    description: 'Mastering the Transition to the Information Age',
    pricing_type: 'fixed_price',
    local_price: {
      amount: amount,
      currency: 'USD',
    },
    requested_info: ['name', 'email'],
  };
  Checkout.create(checkoutData, function(error, response) {
    // console.log(error);
    // console.log(response);
    res.send(response);
  });
};

// curl https://api.commerce.coinbase.com/checkouts \
//      -X POST \
//      -H 'Content-Type: application/json' \
//      -H "X-CC-Api-Key: ad2a2d82-c0e8-41b0-bd84-ff29b7522f43" \
//      -H "X-CC-Version: 2018-03-22" \
//      -d '{
//          "name": "The Sovereign Individual",
//          "description": "Mastering the Transition to the Information Age",
//          "local_price": {
//              "amount": "100.00",
//              "currency": "USD"
//          },
//        "pricing_type": "fixed_price",
//          "requested_info": ["email"]
//      }'
