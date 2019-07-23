import keystone from "keystone";

const { Types } = keystone.Field;

const User = new keystone.List("User");

User.add({
  first_name: {
    type: Types.Text,
    index: true
  },
  last_name: {
    type: Types.Text,
    index: true
  },
  username: {
    type: Types.Text,
    min: 5,
    required: false,
    index: true,
    unique: true,
    default: "new_user"
  },
  phone: {
    type: String,
    index: true
  },
  email: {
    type: Types.Email,
    required: false,
    index: true,
    initial: true,
    unique: true
  },
  password: {
    type: Types.Password,
    required: true,
    initial: true,
    default: "admin"
  },
  confirmed: {
    type: Boolean,
    index: false
  }
});

User.defaultColumns = "username, email";

User.register();

export default User;
