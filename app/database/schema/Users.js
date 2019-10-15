const mongoose = require("mongoose")
const { Schema } = mongoose

let objectId = Schema.Types.ObjectId

const userSchema = new Schema({
    __v: { // 设置取消返回__v字段
        type: Number,
        select: false
    },
    userId: {
        type: objectId  // 主键
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false // 默认返回，设置为false后不返回密码字段
    },
    avatar_url: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female'],  // 枚举性别
        default: 'male',
        required: true
    },
    headline: {
        type: String
    },
    locations: {
        type: [{ type: String }],   // 字符串数组
        select: false
    },
    business: {
        type: String,
        select: false
    },
    employments: {
        type: [{
            company: { type: String },
            job: { type: String }
        }],
        select: false
    },
    educations: {
        type: [{
            school: { type: String },
            major: { type: String },
            diploma: { type: Number, enum: [1, 2, 3, 4, 5] },
            entrance_year: { type: Number },
            graduation_year: { type: Number }
        }],
        select: false
    }
})

module.exports = User = mongoose.model("User", userSchema)