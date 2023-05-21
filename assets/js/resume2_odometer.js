const odo_illustrator = document.querySelector('*.odo_illustrator');

const odometer = new Odometer({
    el: odo_illustrator,
});

odometer.update(75);