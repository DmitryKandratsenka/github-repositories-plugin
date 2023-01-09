Feature: Home page functionality: filtering, sorting by population.

  Background:
    Given Home page is loaded
    Then "Where in the world?" text is visible

  Scenario: 01 - Filter by country name works properly
    Then "China" text is visible
    Then "India" text is visible
    Then "United States of America" text is visible
    When User enters "A" for placeholder "Search for a country..."
    Then "China" text is visible
    Then "India" text is visible
    Then "United States of America" text is visible
    When User enters "Am" for placeholder "Search for a country..."
    Then "China" text is not visible
    Then "India" text is not visible
    Then "United States of America" text is visible

  Scenario: 02 - Filter by region
    Then "China" text is visible
    Then "India" text is visible
    Then "United States of America" text is visible
    Then "Russian Federation" text is visible
    When User clicks on "Filter by Region"
    When User selects menu option "Asia"
    Then "China" text is visible
    Then "India" text is visible
    Then "United States of America" text is not visible
    Then "Russian Federation" text is not visible
    When User clicks on "Filter by Region: Asia"
    When User selects menu option "America"
    Then "China" text is not visible
    Then "India" text is not visible
    Then "United States of America" text is visible
    Then "Russian Federation" text is not visible
    When User clicks on "Filter by Region: America"
    When User selects menu option "Europe"
    Then "Filter by Region: Europe" text is visible
    Then "China" text is not visible
    Then "India" text is not visible
    Then "United States of America" text is not visible
    Then "Russian Federation" text is visible