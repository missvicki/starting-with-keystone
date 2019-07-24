import keystone from "keystone";
import resp from "../../constants/user";
import status from "../../constants/status";
import User from "../../models/User";

const Users = () => keystone.list("User");

// fetch users
export const list = async (req, res) => {
  const user = Users().model.find();
  // eslint-disable-next-line consistent-return
  user.exec((err, response) => {
    if (err) return res.status(400).json(err);
    res.send(
      {
        data: response
      },
      200
    );
  });
};

// sign up new user
export const createUser = async (req, res) => {
  const user = User.model();
  const data = req.body;
  user.getUpdateHandler(req).process(data, err => {
    if (err) return res.json({ error: "error" });
    return res.status(201).json({
      status: status.SUCCESS,
      message: resp.accountCreated
    });
  });
};

// login user

// get user by id

// remove user

// edit user info
