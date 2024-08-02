// Hypothetical function to configure a chart
function configureChart(type, data, options) {
    console.log(`Chart Type: ${type}`);
    console.log(`Data: ${JSON.stringify(data)}`);
    console.log(`Options: ${JSON.stringify(options)}`);
}

// Example usage:
const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }];

configureChart('line', data, {
    title: 'Sample Line Chart',
    color: 'blue',
    gridLines: true
});
