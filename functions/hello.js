// domain/.netlify/functions/hello

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "We are now split testing!",
  };
};
