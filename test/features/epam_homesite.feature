@epam
Feature: Scenarious for epam.com

  @our_work
  Scenario Outline: Page titles validation for upsells on "Our Work" page
    Given I open "https://www.epam.com/our-work" url
    When I wait "1" seconds
    When I click "<Upsell>" link
    Then Page title should equal to "<Title>"


    Examples:
      | Upsell                                                    | Title                                                             |
      | Transforming the Entertainment Experience with Vue        | Transforming the customer experience with Vue \| EPAM             |
      | Passwordless Authentication for Salesforce Commerce Cloud | Passwordless Authentication for Salesforce Commerce Cloud \| EPAM |

    @careers
    Scenario: Should select Young Specialists skill
      Given I open "https://www.epam.com/careers" url
      And I close Accept Cookie pop-up
      When I type "testing engineer" in Job ID
      And I select "Minsk" location in Location
      And I check "Young Specialists" in Skills
      And I click button with "recruiting-search__submit" class
      Then "YOUNG SPECIALISTS" is returned in result list