import keystone from "keystone";
import dotEnv from "dotenv";
import routes from "./routes/index";

dotEnv.config();

// eslint-disable-next-line consistent-return
export const mongodbURL = () => {
  if (process.env.NODE_ENV === "test") {
    return process.env.TEST_MONGODB_URL;
  }
  if (process.env.NODE_ENV === "production") {
    const { MONGODB_URL } = process.env;
    return MONGODB_URL;
  }
  if (process.env.NODE_ENV === "development") {
    return process.env.DEV_MONGODB_URL;
  }
};

keystone.init({
  name: "BusTicket CMS",
  // Paths to our application static files
  static: [],
  // Keystone includes an updates framework,
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database,
  // transition data when your models change,
  // or run transformation scripts against your database.
  "auto update": true,
  updates: "./updates",
  // The url for your MongoDB connection
  mongo: mongodbURL(),
  // Whether to enable built-in authentication for Keystone's Admin UI,
  auth: true,
  // The key of the Keystone List for users, required if auth is set to true
  "user model": "User",
  // The encryption key to use for your cookies.
  "cookie secret": process.env.COOKIE_SECRET
});

// Load your project's Models
keystone.import("./models");

// Add routes later
keystone.set("routes", routes);

// Start Keystone
keystone.start();

export default keystone;
