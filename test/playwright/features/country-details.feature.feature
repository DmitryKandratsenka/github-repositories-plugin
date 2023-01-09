Feature: Country details page functionality

  Background:
    Given Home page is loaded
    Then "Where in the world?" text is visible

  Scenario: 01 - Details page is opening properly
    Then "China" text is visible
    When User clicks on "China"
    Then "China" country header is visible
    Then "Native Name" text is visible
    Then "Population" text is visible
    Then "Region" text is visible
    Then "Sub Region" text is visible
    Then "Capital" text is visible
    Then "Top Level Domain" text is visible
    Then "Currencies" text is visible
    Then "Languages" text is visible
    Then "Border Countries:" text is visible
    Then "Back" button is visible
    Then "India" button is visible
    Then "Nepal" button is visible

  Scenario: 02 - Navigation between pages
    When User clicks on "China"
    Then "China" country header is visible
    When User clicks on button "Nepal"
    Then "Nepal" country header is visible
    When User clicks on button "India"
    Then "India" country header is visible
    When User clicks on button "Back"
    Then "Nepal" country header is visible
    When User clicks on button "Back"
    Then "China" country header is visible
    When User clicks on button "Back"
    Then "China" text is visible
    Then "India" text is visible
    Then "United States of America" text is visible