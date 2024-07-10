function onEdit(e)
{
    var sheet = e.source.getActiveSheet();

    if (sheet.getName() === "Sheet1") {
        var editedCell = e.range.getA1Notation();
        var editedValue = e.value;
        var recipients = "email1@example.com, email2@example.com, email3@example.com";
        var subject = "Google Sheet Update Notification";
        var message = "The Google Sheet has been updated. Edited cell: " + editedCell + ", New value: " + editedValue;

        MailApp.sendEmail(recipients, subject, message);
    }
}