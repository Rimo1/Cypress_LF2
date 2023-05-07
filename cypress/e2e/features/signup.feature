Feature: Sign up Functionality

  Scenario: Sign up using email

    Given The user is on the LF welcome page
    Then Click on the Join and get recommendation button
    And Click on the Get started button
    And Fill the sign up form
    And Sign up with email

  Scenario: Sign in using email and complete the Onboarding
    Given The user has clicked on the magic link


