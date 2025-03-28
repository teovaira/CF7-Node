const User = require('../models/user.model');

exports.findAll = async(req, res) => {
  console.log("Find all users from collection users");

  try {
    const result = await User.find();
    res.json({status: true, data: result});
  } catch (err) {
    console.log("Problem in reading users", err);
    res.json({status:false, data: err});
  }
}

exports.findOne = async(req, res) => {
  console.log("Find user with specific username");
  let username = req.params.username;

  try {
    const result = await User.findOne({username: username});
    res.json({status:true, data: result});
  } catch (err) {
    console.log("Problem in findng user", err)
    res.json({status: false, data: err});
  }
}

exports.create = async(req, res) => {
  console.log("Create User");

  let data = req.body;
  
  const newUser = new User({
    username: data.username,
    password: data.password,
    name: data.name,
    surname: data.surname,
    email: data.email,
    address: {
      area: data.address.area,
      road: data.address.road
    }
  });

  try{
    const result = await newUser.save();
    res.json({status: true, data: result});
  } catch (err) {
    console.log("Problem in creating user", err);
    res.json({status: false, data: err});
  }
}