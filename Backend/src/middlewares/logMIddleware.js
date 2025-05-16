const requestLogger = (req, res, next) => {
  console.log("Request Received:");
//   console.log("Method:", req.method);
//   console.log("URL:", req.originalUrl);
//   console.log("Headers:", req.headers);
//   console.log("Query Params:", req.query);
//   console.log("Body:", req.body);
//   console.log("Files:", req.files); // Multer ke file data
  next();
};

export default requestLogger;