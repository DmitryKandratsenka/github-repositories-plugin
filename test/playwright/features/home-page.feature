Feature: Home page functionality: search repository by name

  Background:
    Given Home page is loaded
    Then "GitHub repository plugin" text is visible

  Scenario: 01 - Default input value is entered
    Then "dmitrykandratsenka" is entered for placeholder "Search for a repository..."
    Then "Filter: All" text is visible
    Then Github repository authored by "dmitrykandratsenka" is visible

  Scenario Outline: 02 - Search by author name
    When User enters "<author>" for placeholder "Search for a repository..."
    Then Github repository authored by "<author>" is visible
    Examples:
      | author             |
      | dmitrykandratsenka |
      | microsoft          |
      | facebook           |

  Scenario Outline: 03 - Github repository card is displayed properly
    When User enters "<value>" for placeholder "Search for a repository..."
    Then Github repo card has text "<value>"
    Then Github repo card has text "<id>"
    Examples:
      | value                                         | id        |
      | DmitryKandratsenka/github-repositories-plugin | 683006117 |