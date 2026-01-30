"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const article_typeDefs_1 = require("./article_typeDefs");
const category_typeDefs_1 = require("./category_typeDefs");
const user_typeDefs_1 = require("./user_typeDefs");
exports.typeDefs = [article_typeDefs_1.typeDefsArticle, category_typeDefs_1.typeDefsCategory, user_typeDefs_1.typeDefsUser];
