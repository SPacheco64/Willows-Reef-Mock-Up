/* 
Content: JS to Display Stores List from Spreadsheet
Developer: Sergio Pacheco 
*/

// Store List Variables
var usStores;
var ukStores;
var usContainer = document.getElementById("usStoreList");
var ukContainer = document.getElementById("ukStoreList");

// ajax Calls to JSON Files
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
            usStores = result;
            console.log(result);
        },
        error: function(error)
        {
            console.log(error);
        }
    });

    // Call to US Store List JSON
    $.ajax
    ({
        url: "./json/uk-stores.json",
        type: "GET",
        dataType: 'json',
        success: function(data)
        {
            result = data;
            ukStores = result;
            console.log(result);
        },
        error: function(error)
        {
            console.log(error);
        }
    }).done(function()
    {
        createLists();
    });
});

function createLists() 
{
    var usStoreSet = "";
    var ukStoreSet = "";

    $.each(usStores, function (key, value) 
    {
        if(value.Store_Name != "" && (value.Link != "" || value.Facebook != ""))
        {
            usStoreSet += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>";

            if(value.Link != "")
            {
                usStoreSet += "<a href ='" + value.Link + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }
            else
            {
                usStoreSet += "<a href ='" + value.Facebook + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }

            usStoreSet += "</span>";
        }
        else if(value.Store_Name == "")
        {
            usStoreSet += "";
        }
        else
        {
            usStoreSet += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>" + value.Store_Name + "</span>";
        }
    });
    usContainer.innerHTML = usStoreSet;

    $.each(ukStores, function (key, value) 
    {
        if(value.Store_Name != "" && (value.Link != "" || value.Facebook != ""))
        {
            ukStoreSet += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>";

            if(value.Link != "")
            {
                ukStoreSet += "<a href ='" + value.Link + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }
            else
            {
                ukStoreSet += "<a href ='" + value.Facebook + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }

            ukStoreSet += "</span>";
        }
        else if(value.Store_Name == "")
        {
            ukStoreSet += "";
        }
        else
        {
            ukStoreSet += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>" + value.Store_Name + "</span>";
        }
    });
    ukContainer.innerHTML = ukStoreSet;
}