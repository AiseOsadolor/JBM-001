  
        document.addEventListener('DOMContentLoaded', function () {
            const paystackButton = document.getElementById('paystack-button');
            if (paystackButton) {
                paystackButton.addEventListener('click', function () {
                    // Get form values
                    const fullName = document.getElementById('full-name').value;
                    const email = document.getElementById('email').value;
                    const phone = document.getElementById('phone').value;
                    const amount = document.getElementById('amount').value * 100; // Convert to kobo
        
                    // Paystack setup
                    const handler = PaystackPop.setup({
                        key: 'your-public-key-here', // Replace with your Paystack public key
                        email: email, // Donor's email
                        amount: amount, // Amount in kobo
                        currency: 'NGN', // Currency (e.g., NGN for Naira)
                        ref: 'donation-' + Math.floor((Math.random() * 1000000000) + 1), // Unique transaction reference
                        metadata: {
                            custom_fields: [
                                {
                                    display_name: "Full Name",
                                    variable_name: "full_name",
                                    value: fullName
                                },
                                {
                                    display_name: "Phone Number",
                                    variable_name: "phone_number",
                                    value: phone
                                }
                            ]
                        },
                        callback: function (response) {
                            alert('Donation successful! Transaction reference: ' + response.reference);
                            // Optionally, send the response to your server for verification
                        },
                        onClose: function () {
                            alert('Transaction was not completed, window closed.');
                        }
                    });
                    handler.openIframe();
                });
            }
        });
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
        