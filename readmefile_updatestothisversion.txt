Updates:

1. Font style on footer and content to Poppins
2. Header remains the same as Monsterrat
3. Contact form writes to FireBase now, yay!
4. Link to store, new arrivals, and sales on other pages.
5. Highlight text to orange when hover for links (Added this to make the UI look consistent on all pages).
6. Added documentations for the following CSS files:

	i. aboutus.css
	ii. home.css
	iii. store.css

7. Added a new section for CONTACT US under the HELP/FAQ page which will redirect to the Contact Form after clicking on the button.
8. LOGIN SYSTEM WORKING. Able to Login and Logout. User can sign up and no duplicating account permitted. Perfect
9. New contact form. Minimum and max length enforced on phone number. Message field will allow line breaks instead of writing into one long sentence.
   Pop up alert "Thank you" message will show up after user sends completed form over. 
10. Checkout now writes user input such as credit card number etc onto FireBase and redirects user to a Thank You Page after user clicks CONFIRM PURCHASE.
11. Updated all firebase-auth, firebase-database, and firebase-app to 7.5.2 from 7.5.0 on all scripts.

Things needed to work on:

1. Documentations
2. Checkout System (Link to Firebase and make sure able to write cart items along with total price)