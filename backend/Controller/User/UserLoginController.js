const UserLoginController = (app, db) => {
  app.post("/login/user", async (req, res) => {
    const { userUserName, userPassword } = req.body;

    const loginUserQuery =
      "SELECT user_id, userPassword FROM user_login WHERE userUserName = ?";

    try {
      const userLoginResult = await db.query(loginUserQuery, [userUserName]);

      if (userLoginResult.length === 0 || !userLoginResult[0]) {
        // User not found
        res.status(404).json({ success: false, message: "User not found" });
        return;
      }

      const storedPassword = userLoginResult[0].userPassword;

      // Check if storedPassword is defined before comparing
      if (storedPassword !== undefined && userPassword === storedPassword) {
        // Password is correct
        const userId = userLoginResult[0].user_id;
        res.status(200).json({ success: true, message: "Login successful", userId });
      } else {
        // Incorrect password or undefined storedPassword
        res.status(401).json({ success: false, message: "Incorrect password" });
      }
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  });
};

module.exports = UserLoginController;
