"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../modules/userModule/user.routes"));
const admin_routes_1 = __importDefault(require("../modules/adminModule/admin.routes"));
const auth_routes_1 = __importDefault(require("../modules/authModule/userAuthModule/auth.routes"));
const auth_routes_2 = __importDefault(require("../modules/authModule/adminAuthModule/auth.routes"));
const abountUs_routes_1 = __importDefault(require("../modules/aboutUsModule/abountUs.routes"));
const privacyPolicy_routes_1 = __importDefault(require("../modules/privacyPolicyModule/privacyPolicy.routes"));
const termsCondition_routes_1 = __importDefault(require("../modules/termsConditionModule/termsCondition.routes"));
const contactUs_routes_1 = __importDefault(require("../modules/contactUsModule/contactUs.routes"));
const faq_routes_1 = __importDefault(require("../modules/faqModule/faq.routes"));
const team_routes_1 = __importDefault(require("../modules/teamModule/team.routes"));
const blog_routes_1 = __importDefault(require("../modules/blogModule/blog.routes"));
const category_routes_1 = __importDefault(require("../modules/categoryModule/category.routes"));
const grade_routes_1 = __importDefault(require("../modules/gradeModule/grade.routes"));
const collection_routes_1 = __importDefault(require("../modules/collectionModule/collection.routes"));
const book_routes_1 = __importDefault(require("../modules/bookModule/book.routes"));
const box_routes_1 = __importDefault(require("../modules/boxModule/box.routes"));
const order_routes_1 = __importDefault(require("../modules/orderModule/order.routes"));
const subscription_routes_1 = __importDefault(require("../modules/subscriptionModule/subscription.routes"));
const subscriptionPurchase_routes_1 = __importDefault(require("../modules/subscriptionPurchaseModule/subscriptionPurchase.routes"));
const invoice_routes_1 = __importDefault(require("../modules/invoiceModule/invoice.routes"));
const survey_routes_1 = __importDefault(require("../modules/surveyModule/survey.routes"));
const recommendation_routes_1 = __importDefault(require("../modules/recommendationModule/recommendation.routes"));
const reviewModule_routes_1 = __importDefault(require("../modules/reviewModule/reviewModule.routes"));
const favoriteBook_routes_1 = __importDefault(require("../modules/favoriteBookModule/favoriteBook.routes"));
const routersVersionOne = express_1.default.Router();
// user
routersVersionOne.use('/user', user_routes_1.default);
routersVersionOne.use('/admin', admin_routes_1.default);
// auth
routersVersionOne.use('/user/auth', auth_routes_1.default);
routersVersionOne.use('/admin/auth', auth_routes_2.default);
// app
routersVersionOne.use('/team', team_routes_1.default);
routersVersionOne.use('/blog', blog_routes_1.default);
routersVersionOne.use('/category', category_routes_1.default);
routersVersionOne.use('/grade', grade_routes_1.default);
routersVersionOne.use('/collection', collection_routes_1.default);
routersVersionOne.use('/book', book_routes_1.default);
routersVersionOne.use('/box', box_routes_1.default);
routersVersionOne.use('/order', order_routes_1.default);
routersVersionOne.use('/subscription', subscription_routes_1.default);
routersVersionOne.use('/subscription-purchase', subscriptionPurchase_routes_1.default);
routersVersionOne.use('/invoice', invoice_routes_1.default);
routersVersionOne.use('/survey', survey_routes_1.default);
routersVersionOne.use('/recommendation', recommendation_routes_1.default);
routersVersionOne.use('/review', reviewModule_routes_1.default);
routersVersionOne.use('/favorite-book', favoriteBook_routes_1.default);
// settings
routersVersionOne.use('/about-us', abountUs_routes_1.default);
routersVersionOne.use('/privacy-policy', privacyPolicy_routes_1.default);
routersVersionOne.use('/terms-condition', termsCondition_routes_1.default);
routersVersionOne.use('/contact-us', contactUs_routes_1.default);
routersVersionOne.use('/faq', faq_routes_1.default);
exports.default = routersVersionOne;
