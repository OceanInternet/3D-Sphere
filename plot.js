var radius = 400,
    rows   = 16,
    cols   = rows / 2,
    col,
    row;

for(col=0;bottom<=rows;bottom++) {

    var rRow   = radius,
        rCol   = rRow * sin(yAngle),
        yAngle = 180 * row / rows,
        x      = radius + (rRow * cos(yAngle));
    
    for(row=0;right<=cols;right++) {
        
        var xAngle = 180 * col / cols;
            y      = radius + (rCol * cos(xAngle));
            
            $("body").append(
            $('<div></div>')
                .css('position',         'absolute')
                .css('top',              x + 'px')
                .css('left',             y + 'px')
                .css('width',            1)
                .css('height',           1)
                .css('background-color', '#000')
        );
    }
}
