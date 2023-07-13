import React from "react";
import dummydata2 from "./dummydata2.json"

const WeatherTable2 = () => {
  const data = dummydata2
  
  const dates = Object.keys(data);
  
  const columns = [
    { field: 'date', headerName: 'Time', width: 150 },
    ...Object.keys(data[dates[0]]).map(parameter => ({ field: parameter, headerName: parameter, width: 200 }))
  ];
  
  const rows = dates.map(date => {
    const row = { id: date, date };
    Object.keys(data[date]).forEach(parameter => {
      row[parameter] = data[date][parameter] || "";
    });
    return row;
  });
  
  return (
    <div>
      <h1>Third question</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.field}
            style={{
              width: column.width,
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            {column.headerName}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.id} style={{ borderBottom: "1px solid #ddd" }}>
          {columns.map((column) => (
            <td
              key={column.field}
              style={{
                width: column.width,
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "center",
              }}
            >
              {row[column.field]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
    </div>
    
  
  );
  
            }  

export default WeatherTable2;
