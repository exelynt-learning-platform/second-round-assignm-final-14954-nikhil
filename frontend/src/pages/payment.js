const payNow = async () => {
  const res = await fetch("http://localhost:8080/api/payment/razorpay/500");
  const order = await res.json();

  const options = {
    key: "YOUR_KEY_ID",
    amount: order.amount,
    currency: "INR",
    name: "My Store",
    order_id: order.razorpayOrderId,
    handler: function (response) {
      alert("Payment Successful: " + response.razorpay_payment_id);
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};