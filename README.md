# Torquay Sunday League


<!--Image on all devices-->

This is a Sunday league football website, for a league based in Torquay. Languages include; HTML, CSS, JavaScript and Python. This application was created using Flask, Postgres and SQLAlchemy, and originally deployed on Heroku using ElephantSQL.

The season is about to begin in sunny Torquay but we have one more space open for a team to take part in the twelve teamed league. The user has the ability to register and upload their teams details for submission to the league.

They can create, read, update and delete any information and the same is set for their player information too. Anyone can see the team and player information whether logged in or not so they know who is taking part in the upcoming league.

<!--Shields-->

## Deployment

<!--New deployment method and links-->

## UX

### Project Goal

To allow a user to input their team and players information, and give them the opportunity to edit that information before the finalization date.

#### Manager Goals



#### Fan Goals



#### Player Goals



#### Developer and Business Goals



### User Stories



### Design Choices



#### Fonts



#### Icons



#### Colours



#### Styling



#### Backgrounds



#### Images



### Wireframes

These wireframes were created using <a href="https://balsamiq.com/wireframes/?gad=1&gclid=Cj0KCQjwmN2iBhCrARIsAG_G2i4B-7yK8ylaMm-EgPZyIat6rzJi5BBNRLhY50Ej2SbjAHbQF2LMZocaAj9nEALw_wcB" target="_blank">Balsamiq Wireframes:</a>

<img src="/assets/images/readme-images/index-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/login-or-register-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/create-team-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/team-profile-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/players-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/teams-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/add-edit-players-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/user-profile-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

<img src="/assets/images/readme-images/rules-wireframe.webp" width="50%" alt="Homepage" style="display: inherit; margin: auto;">

### Prototype

- This index prototype was created on Figma.com.

<img src="/assets/images/readme-images/index-prototype.webp" width="50%" alt="Index Prototype" style="display: inherit; margin: auto;">

### Q and A of Potential Users



#### Q1 ?



#### Q2 ?



#### Q3 ?



#### Q4 ?



#### Q5 ?



#### Q6 ?



#### Q7 ?



#### Q8 ?



### Competitor Review



### Roadmap

<!--This roadmap indicates the importance and viability of specific opportunities.

| Opportunities/Problems               | Importance | Viability |
| ------------------------------------ | ---------- | --------- |
| Feature 1         | 5          | 5         |-->

## Features

### Existing Features

- **Navigation Bar**

- **Footer**



- **Logo**



### Features Left to Implement

- **Feature Name**



## Testing

I have tested my web application automatically and manually using Test Driven Development and Behaviour Driven Development.

### Automated Testing

### W3C Validation

<!-- <p>
  <a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img  style="border:0;width:88px;height:31px;margin:auto;display:flex;"
          src="http://jigsaw.w3.org/css-validator/images/vcss"
          alt="Valid css!" />
    </a>
</p> -->

### Javascript Validation

<!--Jest Tests-->

#### JSHint



### Lighthouse



#### Mobile Lighthouse



### Manual Testing

<!-- This project has been tested using the following browsers: -->

<!--Chrome, Safari & Edge-->

<!-- On the following devices
Desktop Macbook
Ipad Air Simulator on Dev Tools
Smallest phone size IPhone 5/SE simulator on Dev Tools -->

<!-- `Homepage`

| Feature                                 | Expected Outcome                                       | Testing Performed                    | Result                                              | Pass/Fail |
| --------------------------------------- | ------------------------------------------------------ | ------------------------------------ | --------------------------------------------------- | --------- |
| Navbar links                            | Links take user to correct pages, CSS changes on hover | Clicked Links                        | All four links work, CSS changes on hover           | Pass      |
| All five other buttons (including logo) | Take user to the correct page, CSS changes on hover    | Clicked Buttons                      | All links work and change colour when hovered over  | Pass      |
| Burger icon on IPhone 5/SE              | Item is clickable and navbar readable                  | Clicked burger icon                  | Navbar opens vertically, links work                 | Pass      |
| Page layout                             | Layout changes to accommodate for smaller devices      | Opened site on IPhone 5/SE simulator | Every element visible through scrolling, links work | Pass      | -->

### Fixed Bugs

1). When trying to upload database using python3, I was getting an error saying "tsl" does not exist. This is because when setting up my env.py file, I short-handed the name of my project, not doing so anywhere else.

I fixed this issue by opening psql and changing the directory again to torquay_sunday_league, and when I tried again this worked.

2). Really struggled getting all of the main area content on one line. Salah (right player) was not staying on the same line as Odegaard (left player) and the table.

<!-- IMAGE -->

I fixed this in several steps, first, I made the table inline-table and the two players inline-block. This placed the three elements in a line, but the table's margin: auto property no longer centered it. I fixed this issue by using the margin-left: 50%, left: (half the width of the element) trick.

3). Cannot update postgres after I have changed model.py. Max character length was 15, need it to be 25.

4). 

5). When adding a player, the user is supposed to be transported back to the players page for the team currently being worked on. However, my page would only either load an empty player page, or werksoid would interject with an error, stating that "ID" was either not defined or defined incorrectly.

<!-- IMAGE -->

I fixed this by copying the line from the players app.route, placing in the players variable, however, this loaded without the new player visible. I placed the variable declaration after the commit message but before the return, and this fixed the issue.

<!-- IMAGE -->

### Responsive Design

#### Ipad Air screen resolution



#### IPhone 5/SE screen resolution



## Credits

### Content



### Media



### Acknowledgements
