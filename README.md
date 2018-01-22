 1. On your local machine, Check to make sure you have the latest version of node installed. *The latest, at the time of writing is 9.4.0*
`node -v`
 2. If you do skip to step "6". If not, proceed to step "3"
 3. Install homebrew 
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
`

 4. Install Node
 `brew install node`
 
 5. Check if you have NPM (Node Package Manager) Installed
`npm -v `

 6. Clone the following git repository
`git clone https://github.com/whyisjacob/pharmatech_email_test.git`

 7. Navigate to the newly cloned git repo and run the following command in the root of the repo
`node emailtest.js youremail@address.com`
 An email has just been sent to the email address you just entered. This list can include multiple email addresses. Just add a comma, with no space, in between each email address
 `node emailtest.js email1@gmail.com,email2@hotmail.com,email3@YouGetThePicture.com`

 8. Check to verify you received the email
*NOTE: Depending on the mail client, your email may be delivered to the junk / spam folders*

## To edit the email that is sent,

 1. CD to the zija_test_email directory inside the cloned git repo
 2. Make any needed changes to the file email_testfile.html 
 3. When satisfied with your changes, copy/paste *all .html contents* to the appropriate .html email file.

navigate to the 
