Feature: Sign up Functionality

  Scenario: Sign up using email

    Given The user is on the LF welcome page
    When The user clicks on the Join and get recommendation button
    And Clicks on the Get started button from the How to get started page
    And Fills the sign up form with desired data
    And Signs up with email
    Then The user should be notified that a secure login link is sent

  Scenario: Sign in using email and complete the Onboarding

    Given The user has received the magic link and clicked on it
    Then The user should land on the Welcome back page where the 1st step of onboarding is marked as done
    When The user clicks on the Continue button
    And Provides data regarding diagnosis type and subtype
    And Selects diagnosis stage
    And Provides first and second concerns
    And Rates first and second concerns along with well being
    And Log out



