// hash.js
import bcrypt from "bcryptjs";

const password = "admin123"; // ← Change this to your desired admin password
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Hashed Password:", hash);
});
