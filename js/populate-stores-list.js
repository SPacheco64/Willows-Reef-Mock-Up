/* 
Content: JS to Display Stores List from Spreadsheet
Developer: Sergio Pacheco 
*/

// Store List Variables
var usStores;
var ukStores;

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
            ukStores = result;
            console.log(result);
        },
        error: function(error)
        {
            console.log(error);
        }
    })

    createLists();
});

function createLists() 
{
    var usStoreList = "";
    var ukStoreList = "";
    var usContainer = document.getElementById('usStoreList');
    var ukContainer = document.getElementById('ukStoreList');

    $.each(usStores, function (key, value) 
    {
        if(value.Store_Name != null && (value.Link != null || value.Facebook != null))
        {
            usStoreList += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>";

            if(value.Link != null)
            {
                usStoreList += "<a href ='" + value.Link + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }
            else
            {
                usStoreList += "<a href ='" + value.Facebook + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }

            usStoreList += "</span>";
        }
        else if(value.Store_Name == null)
        {
            usStoreList += "";
        }
        else
        {
            usStoreList += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>" + value.Store_Name + "</span>";
        }
    });
    usContainer.innerHTML = usStoreList;

    $.each(ukStores, function (key, value) 
    {
        if(value.Store_Name != null && (value.Link != null || value.Facebook != null))
        {
            ukStoreList += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>";

            if(value.Link != null)
            {
                ukStoreList += "<a href ='" + value.Link + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }
            else
            {
                ukStoreList += "<a href ='" + value.Facebook + "' target = '_blank' rel = 'noopener norferrer'>" + value.Store_Name + "</a>";
            }

            ukStoreList += "</span>";
        }
        else if(value.Store_Name == null)
        {
            ukStoreList += "";
        }
        else
        {
            ukStoreList += "<span class = 'col-6 col-md-4 col-lg-3 mt-3'>" + value.Store_Name + "</span>";
        }
    });
    ukContainer.innerHTML = ukStoreList;
}