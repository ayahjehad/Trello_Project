Feature: Delete List 

Scenario: Delete List 
        When  Add a card  
        And click on the card 
        And go to archive
        And delete list
        Then The List will be deleted successfully