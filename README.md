# Megagrid Tic Tac Toe

## Overview

View the live site [here]()

![Responsice Mockup]()

## User Stories

- **Friend**

## Features

- **ex1**


![EX01]()

## Landing Page

## Game Page

- **Main Purpose**

![Image]()

- **Main Features**

![Overview]()


## Features Left to Implement

Implement Player vs Computer feature using the MiniMax algorithm

## Design

### Wireframes

## Testing

### Responsivness

- **Testing Criteria**

Conducted testing on all pages for responsiveness across screen sizes from 320px upwards, following [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)
Utilized Chrome, Edge, Firefox browsers.

- **Steps to Test**

Opened the browser and navigated to [Landing Page]().
Opened developer tools and set to responsive mode.
Decreased width to 320px, set zoom to 50%, and clicked/dragged the responsive window to maximum width.
testede phone numbers

- **Expected**

Website should be responsive on all screen sizes.

1. No pixelation.
2. No horizontal scroll.
3. No overlapping elements.

- **Actual**


### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed


### Functional Testing


- **Navigation**

Confirmed all navigation links lead to the correct pages.
Verified links on all pages, ensuring expected navigation.

### Validator Testing

- HTML

  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

  ![Home Validator Results]()
  ![Game Validator Results]()

- CSS

  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

  ![CSS Validator Results]()

### Lighthouse Testing

![Home Testing]()
![Game Testing]()


- **Additional Device Testing**

Aditional testing was performed on the following devices:

1. Ipad Pro
2. iPhone SE

- **Browsers**

I used for testing the following browsers:

1. Google Chrome
2. Mozilla Firefox
3. Microsoft Edge

### Unfixed Bugs

No major bugs were left unfixed. Any minor issues or limitations are detailed here: .........


## Deployment

### Version Control

The site was created using Codeanywhere code editor and pushed to github to the repository ‘farmers-market’.

The following git commands were used throughout development to push code to the remote repo:

`git add <file>` - This command was used to add the file(s) to the staging area before they are committed.

`git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.

`git push` - This command was used to push all committed code to the repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on left select 'Pages'
  - From the Build and deployment section, Branch sub section drop-down menu, select: main Click 'Save'
  - A live link will be displayed when published successfully.

The live link can be found here - <>

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now of been cloned on your local machine for use.

## Credits

I drew inspiration and incorporated code from:

[Youtube tutorial 01](https://youtu.be/4ARsthVnCTg?si=sZ1DGSHS9bwaNIsP)

[Youtube tutorial 02](https://youtu.be/P2TcQ3h0ipQ?si=j6nRsbbvn8JTbDJV)

[Shecodes](https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript)

[W3schools](https://www.w3schools.com/howto/howto_css_modals.asp)

[Geeksforgeeks](https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)



- **Media**

  - 

- **Content**

  - Wikipedia was used for inspiration to write a short game history 

  [Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe#:~:text=An%20early%20variation%20of%20tic,empty%20spaces%20to%20keep%20playing.)