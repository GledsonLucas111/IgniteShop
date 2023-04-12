import Stripe from "stripe";


const STRIPE_PUBLIC_KEY = "pk_test_51MpxjmDR8FCe7R4PPKFKDjUHc5na5Ise8ERiTDkNFTmNhHNHTBTewhl8SvN0u5QaOMF5fxOS6HOC0hS0nj76IFGV00pNgs4sER"
const STRIPE_SECRET_KEY = "sk_test_51MpxjmDR8FCe7R4P08PF6J4FtpbguISdmIctxnDfHWquPpz0PaQ3sAmTxcly1kTm1gvFrxDItPIA2TIvqOMFjWsa00mD8hpmPz"


export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
    appInfo: {
        name: "Ignite Shop",
    }
});
