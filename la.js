let lineObjects = [null, { id: 1, text: 'First line' }, null, { id: 2, text: 'Second line' }];

let filteredLineObjects = lineObjects.filter((lineObject) => lineObject !== null);

console.log(filteredLineObjects);
