Feature: Sign up Functionality

  Scenario: Sign up using email and then login with that

    Given The user is on the LF welcome page
    When The user clicks on the Join and get recommendation button
    And Clicks on the Get started button from the How to get started page
    And Fills the sign up form with desired data
    And Signs up with email
    And Clicks on the received magic link
    Then The user should get signed in and land on the Welcome back page


  Scenario: Sign in using email and complete the Onboarding
    Given The user is on the Welcome back page and the 1st step of Onboarding is done


