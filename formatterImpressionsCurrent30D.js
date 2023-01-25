function formatterImpressionsCurrent30D() {
    var currentSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dashboard");
    var valueThreshold = currentSheet.getRange("C6").getValue();
    Logger.log(valueThreshold);

    var range = currentSheet.getRange("I11:I100");
    var values = range.getValues();

    // *** Fetch values
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

    // *** Loop dataArray
    for (var i = 0; i < dataArray.length; i++) {
        var data = dataArray[i];

        for (var key in data) {
            if (data.hasOwnProperty(key) && data[key]["current30D"] !== "") {
                var currentCell = currentSheet.getRange(data[key]["field_index_value"]);

                if (((data[key]["current30D"] - data[key]["prev30D"]) / data[key]["prev30D"]) > valueThreshold) {
                    // *** Green formatter
                    currentCell.setBackgroundRGB(0, 128, 0);

                    Logger.log("VALUE OF " + data[key]["field_index_value"] + " is > valueThreshold");
                } else if (((data[key]["current30D"] - data[key]["prev30D"]) / data[key]["prev30D"]) <= valueThreshold) {
                    // *** Red formatter
                    currentCell.setBackgroundRGB(255, 0, 0);

                    Logger.log("VALUE OF " + data[key]["field_index_value"] + " is <= valueThreshold");
                }

                Logger.log(data[key]["field_index_value"]);
                Logger.log(data[key]["current30D"]);
                Logger.log(data[key]["prev30D"]);

                Logger.log("--- --- ---");
            }
        }
    }

    // Logger.log(dataArray[0]["data_1"]["field_index_value"]);
    // Logger.log(dataArray);
}
