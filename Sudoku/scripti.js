//array muuttujat
var finalArray = [];
var convertedIntoArray = [];
var squareStatus = "0";
var rowStatus = "0";
var columnStatus = "0";

//funktio jolla saadaan html tablen "td" elementit omien riviensä arrayhin
function refreshArray() {

            $("table tr").each(function() {
               var rowDataArray = [];
               var actualData = $(this).find('td');
               if (actualData.length > 0) {
                  actualData.each(function() {
                     rowDataArray.push(parseInt($(this).text()));
                  });
                  convertedIntoArray.push(rowDataArray);
               }
            });
            finalArray = convertedIntoArray;
            convertedIntoArray = []
        };

$(function() {
    $(".pelitable td").click(function() {

        $(".Fader").removeClass("FadeAnimation");
        $("td").removeClass("breathFade");
        $("#ohje").removeClass("ScrollAnimation");

        if(parseInt($(this).text()) < 9) {
        $(this).html(parseInt($(this).text()) + 1)
        }

        else {
            $(this).html("1");
        };

        refreshArray()
    });
});

function showValidator() {
    $("#RowValidator").html(rowStatus);
    if(rowStatus.includes(`invalid`)) {
        $("#RowValidator").css("color", "rgb(253, 90, 90)");
    }

    $("#ColumnValidator").html(columnStatus);
    if(columnStatus.includes(`invalid`)) {
        $("#ColumnValidator").css("color", "rgb(253, 90, 90)");
    }

    $("#SquareValidator").html(squareStatus);
    if(squareStatus.includes(`invalid`)) {
        $("#SquareValidator").css("color", "rgb(253, 90, 90)");
    }

    $(".Fader").toggleClass("FadeAnimation");
    $("#ohje").toggleClass("ScrollAnimation");
};

function redLightRow(i){
    i += 1
    if (i <= 3) {
        var redRow = $("#eka").find(`tr:nth-child(${i})`);
        $(redRow).find("td").each(function() {
            $(this).toggleClass("breathFade");
        })
    }
    else if (i > 3 && i <= 6) {
        var redRow = $("#toka").find(`tr:nth-child(${i - 3})`);
        $(redRow).find("td").each(function() {
            $(this).toggleClass("breathFade");
        })
    }
    else if (i > 6) {
        var redRow = $("#kolmas").find(`tr:nth-child(${i - 6})`);
        $(redRow).find("td").each(function() {
            $(this).toggleClass("breathFade");
        })
    };
};

function redLightColumn(y){
    var redCol = $("table").find(`tr`);
    redCol.each(function(){
        $(this).find(`td:nth-child(${y})`).removeClass("breathFade");        // TODO: tee tästä tiiviimpi
    });
    redCol.each(function(){
        $(this).find(`td:nth-child(${y})`).toggleClass("breathFade");
    });
};

function redLightSquare(cords){

};

// TODO: tee funktio jolla saa random numerot valmiiseen tableen täynnä nollia

//rivintarkistus

function checkRow() {
    for (let i = 0; i < finalArray.length; i++) {
        let check = [];
        for (let x = 0; x < finalArray[i].length; x++) {
            if(check.includes(finalArray[i][x])) {
                console.log("ei mahdollinen")
            }
            else {
                check.push(finalArray[i][x])
                console.log(check, i)
            }
        }
        if(check.length === 9) {
            rowStatus = `Row ${i + 1} is valid`;
        } else {
            rowStatus = `Row ${i + 1} is invalid`;
            redLightRow(i);
            break;
        }
    }
};

function checkColumn() {
    for (let y = 0; y < finalArray.length; y++) {
        let check = [];
        for (var column = 0; column < 9; column++) {
            if (check.includes(finalArray[column][y]) || finalArray[column][y] === 0) {
                console.log(`Error in column ${y + 1}`)
                break;
            }
            else {
                check.push(finalArray[column][y])
                console.log(check, column)
            }
        }
        if(check.length === 9) {
            columnStatus = `Column ${y + 1} is valid`;
        } else {
            columnStatus = `Column ${y + 1} is invalid`;
            redLightColumn(column);
            break;
        }
    }
};

function checkSquare() {
    let check = [];
    var cords = [0,0];
    do {
        for (let ver = cords[0]; ver < cords[0] + 3; ver++) {
            for (let hor = cords[1]; hor < cords[1] + 3; hor++) {
                if (check.includes(finalArray[ver][hor]) || finalArray[ver][hor] === 0) {
                    break;
                }
                else {
                    check.push(finalArray[ver][hor])
                } 
            }
        }
        if (check.length === 9) {
            squareStatus = `Square ${cords[0] + 1},${cords[1] + 1} is valid`;
            check = []
        } else {
            squareStatus = `Square ${cords[0] + 1},${cords[1] + 1} is invalid`;
            // RedLightSquare(cords);
            check = []
            cords[0] = 10;
            cords[1] = 10;
        }
        if (cords[0] < 6 && cords[1] <= 6){
            cords[0] += 3
        }
        else if (cords[0] >= 6 && cords[1] <= 6) {
            cords[0] = 0;
            cords[1] += 3;
        }
    }
    while (cords[0] < 9 && cords[1] < 9);
};

//nappula
$("button#check").click(function() {
    if(finalArray.length == 0) {
        console.log("Array is empty");
    } else {
        console.log(finalArray);
        checkRow();
        checkColumn();
        checkSquare();
        showValidator();
    };
});

//TODO: aseta satunnainen pöytä