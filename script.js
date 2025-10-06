// Handle "Buy Now" clicks
function buyNow(item) {
  // For now, direct to checkout placeholder.
  // Later we’ll plug in your Stripe/Paystack links.
  let checkoutLinks = {
    hoodie: "https://checkout.stripe.com/pay/example_hoodie",
    tshirt: "https://checkout.stripe.com/pay/example_tshirt",
    mug: "https://checkout.stripe.com/pay/example_mug"
  };

  window.open(checkoutLinks[item], "_blank");
}
