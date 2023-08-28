Feature: Home page functionality: search repository by name

  Background:
    Given Home page is loaded
    Then "GitHub repository plugin" text is visible

  Scenario: 01 - Show my favourites
    Then "dmitrykandratsenka" is entered for placeholder "Search for a repository..."
    Then "Filter: All" text is visible
    When User adds repository "github-repositories-plugin" to favourites
    When User clicks on "Filter: All"
    When User selects menu option "My favourites"
    Then "" is entered for placeholder "Search for a repository..."
    Then Github repo card has text "github-repositories-plugin"


