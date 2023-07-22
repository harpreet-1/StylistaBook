stylistRouter.post("/register", async (req, res) => {
  try {
    let { name, email, phone, password, image, salonName, address, bio } =
      req.body;

    const existingUser = await StylistModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already registered Please Login" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    req.body.password = hashedPassword;
    const newUser = new StylistModel({
      name,
      email,
      phone,
      password: hashedPassword,
      image,
      salonName,
      address,
      bio,
      otp: "1234",
      isEmailVerified: true,
    });

    const savedUser = await newUser.save();

    return res.status(201).json({
      message:
        "Stylist registered successfully. Please check your email for the OTP.",

      stylist: {
        id: savedUser._id,
        name,
        email,
        phone,
        image,
        salonName,
        address,
      },
    });
  } catch (error) {
    console.error("Error registering stylist:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
