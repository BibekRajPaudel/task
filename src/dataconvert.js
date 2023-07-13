function convertDataToNewFormat(data) {
    const newData = {};
  
    data.forEach(item => {
      item.data.forEach(entry => {
        if (!newData[entry.time]) {
          newData[entry.time] = {};
        }
        newData[entry.time][item.name] = entry.value;
      });
    });
  
    return newData;
  }
  
  const originalData = [
    {
      "name": "Air Temperature",
      "data": [
        {"time": "2022-01-01", "value": "20.1"},
        {"time": "2022-01-02", "value": "20.2"},
        {"time": "2022-01-03", "value": "20.3"},
        {"time": "2022-01-04", "value": "20.4"},
        {"time": "2022-01-05", "value": "20.5"}
      ]
    },
    {
      "name": "Relative Humidity",
      "data": [
        {"time": "2022-01-01", "value": "90.1"},
        {"time": "2022-01-02", "value": "90.2"},
        {"time": "2022-01-03", "value": "90.3"},
        {"time": "2022-01-04", "value": "90.4"},
        {"time": "2022-01-05", "value": "90.5"}
      ]
    },
    {
      "name": "Wind Speed",
      "data": [
        {"time": "2022-01-01", "value": "10.1"},
        {"time": "2022-01-02", "value": "10.2"},
        {"time": "2022-01-03", "value": "10.3"},
        {"time": "2022-01-04", "value": "10.4"},
        {"time": "2022-01-05", "value": "10.5"}
      ]
    },
    {
      "name": "Wind Direction",
      "data": [
        {"time": "2022-01-01", "value": "10.1"},
        {"time": "2022-01-02", "value": "20.2"},
        {"time": "2022-01-03", "value": "30.3"},
        {"time": "2022-01-04", "value": "40.4"},
        {"time": "2022-01-05", "value": "50.5"}
      ]
    }
  ];
  
  const newData = convertDataToNewFormat(originalData);
  