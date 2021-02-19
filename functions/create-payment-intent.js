// domain/.netlify/functions/create-payment-intent

exports.handler = async (event, context) => {
  console.log(event);
  return {
    statusCode: 200,
    body: "payment intent",
  };
};
