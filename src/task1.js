import React from "react";
import dummydata1 from "./dummydata1.json";

const WeatherTable = () => {
  const data = dummydata1;

  const dates = Array.from(
    new Set(data.flatMap((item) => item.data.map((entry) => entry.time)))
  );

  const columns = [
    { field: "name", headerName: "Parameter", width: 150 },
    ...dates.map((date) => ({ field: date, headerName: date, width: 150 })),
  ];

  const rows = data.map((item) => {
    const row = { id: item.name, name: item.name };
    dates.forEach((date) => {
      const matchingData = item.data.find((entry) => entry.time === date);
      row[date] = matchingData ? matchingData.value : "";
    });
    return row;
  });

  return (
    <div >
      <h1>First question</h1>
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
            <p style={{ margin: 0 }}>{row[column.field]}</p>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

    </div>
   
  );
};

export default WeatherTable;
