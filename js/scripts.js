function Place(name, county, landmark, date) {
    this.placeName = name;
    this.county = county;
    this.landmark = landmark;
    this.date = date;
}

$(document).ready(function(){
    $('#date').val(new Date().toISOString().slice(0, 10));

    $('form#placesForm').submit(function(e){
        e.preventDefault();

        let inputtedName = $('#placeName').val();
        let inputtedCounty = $('#county').val();
        let inputtedLandmark = $('#landmarks').val();
        let inputtedDate = $('#date').val();

        let newPlace = new Place(inputtedName, inputtedCounty, inputtedLandmark, inputtedDate);

        $('ul#places').append('<li><span class="place">' + newPlace.placeName + '</span></li>');

        $('.place').last().click(function(){
            $('.show-place').show();
            $('.show-place h2').text(newPlace.placeName.split(" ", 1));
            $('.show-place .detName').text(newPlace.placeName);
            $('.show-place .detCounty').text(newPlace.county);
            $('.show-place .detLandmarks').text(newPlace.landmark);
            $('.show-place .detDate').text(newPlace.date);
        });
    });

});