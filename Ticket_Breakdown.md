# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1:
As a Facility user, I should be able to add custom ids for each Agent I work with so that I can use those ids on the reports.

Acceptance Criteria:

- A new field "Custom Id" should be added to the Agents table in the database.
- The frontend should display a form where the Facility users can add/edit the custom id for each Agent.
- Backend endpoints should be updated to handle the new field.
- The custom id should be used instead of the internal id when generating reports.

Estimated time: 3-5 days

Implementation details:

- Migrate the Agents table in the database to add the new "Custom Id" field.
- Add/update REST API endpoints for the Agents resource to handle the new field.
- Update the backend functions that create/update Shifts to use the Custom Id when assigning an Agent to a Shift if it exists.
- Update the report generation function to use the Custom Id instead of the internal id.

Ticket 2:
As a Facility user, I should be able to see the custom id of each Agent assigned to a Shift so that I can verify if my custom ids are correct.

Acceptance Criteria:

- The API response of getShiftsByFacility should include the Custom Id of each Agent assigned to a Shift.
- The frontend should display the Custom Id in the Shift list view and individual Shift detail view.

Estimated time: 2-3 days

Implementation details:

- Update the getShiftsByFacility API endpoint to include the Custom Id of each Agent assigned to a Shift.
- Update the Shift list view and individual Shift detail view in the frontend to display the Custom Id.

Ticket 3:
As a Facility user, I should be able to search for a Shift by the custom id of the Agent assigned to it so that I can quickly find particular records.

Acceptance Criteria:

- The frontend should have a search bar where the Facility users can enter a custom id.
- The API should allow searching for Shifts by the Custom Id of the Agent assigned to it.
- The frontend should display the filtered Shifts that match the search term.

Estimated time: 2-3 days

Implementation details:

- Add a search bar to the Shift list view in the frontend.
- Update the getShiftsByFacility API endpoint to allow filtering by the Custom Id of the Agent assigned to it.
- Update the Shift list view in the frontend to display the filtered Shifts that match the search term.

Ticket 4:
As a Facility admin, I want to be able to remove or update the custom id of an Agent so that I have control over how they are identified.

Acceptance Criteria:

- The frontend should allow editing/removing the Custom Id field for each Agent.
- Backend endpoints should be updated to handle removing/updating the Custom Id field.
- If the Custom Id of an Agent is removed, their shifts should use the internal id instead when generating reports.

Estimated time: 2-3 days

Implementation details:

- Update the Agents list view in the frontend to allow editing/removing the Custom Id field.
- Update the REST API endpoints for the Agents resource to handle removing/updating the Custom Id field.
- Update the backend functions that create/update Shifts to use the internal id if a shift has an Agent without a Custom Id.
- Update the report generation function to use the Custom Id if it exists, otherwise use the internal id.
