function formatterImpressionsCurrent30D() {
    var currentSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dashboard");
    var valueThreshold = currentSheet.getRange("C6").getValue();
    Logger.log(valueThreshold);

    var range = currentSheet.getRange("I11:I200");
    var values = range.getValues();

    var dataArray = [];
    for (var i = 0; i < values.length; i++) {
        var row = values[i];
        var data = {};
        var valuePrev30D = currentSheet.getRange("H" + (i + 11)).getValue();

        data["current30D"] = row[0];
        data["prev30D"] = valuePrev30D;
        data["field_index_value"] = "I" + (i + 11);
        dataArray.push({ ["data_" + (i + 1)]: data });
    }

    Logger.log(dataArray[0]["data_1"]["field_index_value"]);
    Logger.log(dataArray);
}
