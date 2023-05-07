Feature: Sign up Functionality

  Scenario: Sign up using email

    Given The user is on the LF welcome page
    When The user clicks on the Join and get recommendation button
    And Clicks on the Get started button from the How to get started page
    And Fills the sign up form with desired data
    And Signs up with email
    Then The user should be notified that a secure login link is sent

  Scenario: Sign in using email and complete the Onboarding
    Given The user has received the magic lick and clicked on it
    Then The user should land on the Welcome back page where the 1st step of onboarding is marked as done


