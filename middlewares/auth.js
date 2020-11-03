const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { buildResponse } = require("../utils/make-response");
const db = [
  {
    email: "test@mail.com",
    password: "test",
    brand_id: "34",
    manager_id: "2",
  },
];

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.logout = async (req, res) => {
  // will clear the cookie
  res.clearCookie("jwt");
  res.status(200);
  // trigger loginform in chatbot.
  res.send(
    buildResponse({
      custom: {
        payload: "loginform",
      },
    })
  );
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  // 1) Check if email and password exist
  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      data: "Please provide email and password",
    });
  }

  // 2) Check if user exists && password is correct
  const user = db.find((ele) => ele.email == email && ele.password == password);

  if (!user) {
    // If Incorrect Sending response
    return res.status(400).json({
      status: "failed",
      data: "Invalid email and password",
    });
  }

  // Getting User Data
  // let userData;
  // user.forEach((doc) => {
  // 	userData = {
  // 		uid: doc.id,
  // 		data: doc.data()
  // 	};
  // });

  // Signed Token
  const token = signToken(user.email);

  // 3)Sending Userdata and Token , maxAge is 7 days
  res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true });
  res.status(200).json({
    status: "success",
    token,
    data: user,
  });
};

exports.protect = async (req, res, next) => {
  try {
    let token;

    // 1) Getting token and check of its there
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      // trigger loginform
      return res.send(
        buildResponse({
          custom: {
            payload: "loginform",
            error: "Please login to continue",
          },
        })
      );
    }

    // 2) validate the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) get user details
    const currentUser = db.find((ele) => ele.email == decoded.id);

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  } catch (err) {
    console.error(err);
    // trigger loginform
    return res.send(
      buildResponse({
        custom: {
          payload: "loginform",
          error: err.message,
        },
      })
    );
  }
};
