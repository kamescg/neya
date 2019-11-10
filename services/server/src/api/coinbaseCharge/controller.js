import coinbase from 'coinbase-commerce-node';
const Checkout = coinbase.resources.Checkout;
const Client = coinbase.Client;

Client.init(env.process.COINBASE_API);
export const createCharge = (req, res, next) => {
  var checkoutData = {
    name: req.body.name,
    description: req.body.description,
    pricing_type: 'fixed_price',
    local_price: {
      amount: req.body.name,
      currency: 'USD',
    },
    requested_info: ['name', 'email'],
  };
  Checkout.create(checkoutData, function(error, response) {
    return res.json(response);
  });
};
