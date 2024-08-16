import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";


// const registerUser = asyncHandler(async(req, res) => {
// get user details from frontend
// validation - not empty
// check if user already exists: username, email
// check for images, check for avatar
// upload them to cloudinary - avatar
// create user object - create entry in db
// remove password and refresh token field from response
// check for user creation
// return response


const registerUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message:"Ok"
    })
})


// } )


export {registerUser}