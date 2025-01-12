import { Webhook } from "svix";
import { UserModel } from "../models/user.model.js";

//API controller function to manage clerk user with database

export const clerkWebHooks = async (req, res) => {
  try {
    //create a svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await UserModel.create(userData);
        res.status(200).json({
          success: true,
          message: "successfully user created!",
        });
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await UserModel.findOneAndUpdate({ clerkId: data.id }, userData);

        res.status(200).json({
          success: true,
          message: "user updated successfully",
        });
        break;
      }
      case "user.deleted": {
        await UserModel.findOneAndDelete({ clerkId: data.id });
        res.status(200).json({
          success: true,
          message: "user deleted successfully",
        });
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
