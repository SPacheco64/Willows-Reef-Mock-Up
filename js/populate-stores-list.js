/* 
Content: JS to Display Stores List from Spreadsheet
Developer: Sergio Pacheco 
*/

$(document).ready(function () 
{
    // Call to US Store List JSON
    $.ajax
    ({
        url: "./json/us-stores.json",
        type: "GET",
        dataType: 'json',
        success: function(data)
        {
            result = data;
            console.log(result);
        },
        error: function(error)
        {
            console.log(error);
        }
    })

    // Call to US Store List JSON
    $.ajax
    ({
        url: "./json/uk-stores.json",
        type: "GET",
        dataType: 'json',
        success: function(data)
        {
            result = data;
            console.log(result);
        },
        error: function(error)
        {
            console.log(error);
        }
    })
});