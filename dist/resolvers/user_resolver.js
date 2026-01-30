"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolversUser = void 0;
const md5_1 = __importDefault(require("md5"));
const user_model_1 = __importDefault(require("../models/user_model"));
const generate_1 = require("../helpers/generate");
//resolvers chọc vào database để lấy data nhưng tuân thủ thẻ Query 
exports.resolversUser = {
    Query: {
        getUser: (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(context["user"]);
            // const {id}= args
            const infoUser = yield user_model_1.default.findOne({
                token: context["user"].token
            });
            if (infoUser) {
                return {
                    code: 200,
                    message: "thành công",
                    id: infoUser.id,
                    fullName: infoUser.fullName,
                    email: infoUser.email,
                    token: infoUser.token
                };
            }
            else {
                return {
                    code: 400,
                    message: "thất bại"
                };
            }
        })
    },
    Mutation: {
        registerUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { user } = args;
            const emailExist = yield user_model_1.default.findOne({
                email: user.email,
            });
            if (emailExist) {
                return {
                    code: 400,
                    message: "email đã tồn tại"
                };
            }
            else {
                user.passWord = (0, md5_1.default)(user.password);
                user.token = (0, generate_1.generateRandomString)(30);
                const newUser = yield new user_model_1.default(user);
                const data = yield newUser.save();
                return {
                    code: 200,
                    message: "thành công",
                    id: data.id,
                    fullName: data.fullName,
                    email: data.email,
                    token: data.token
                };
            }
        }),
        loginUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { email, password } = args.user;
            const infoUser = yield user_model_1.default.findOne({
                email: email,
                deleted: false
            });
            if (!infoUser) {
                return {
                    code: 400,
                    message: "email không tồn tại"
                };
            }
            if ((0, md5_1.default)(password) !== infoUser.passWord) {
                return {
                    code: 400,
                    message: "sai mật khẩu "
                };
            }
            return {
                code: 400,
                message: "đăng nhập thành công",
                id: infoUser.id,
                fullName: infoUser.fullName,
                email: infoUser.email,
                token: infoUser.token
            };
        }),
    }
};
