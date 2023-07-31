function GenQuarterData(registration: any, renew: any) {
  let q_data_dict: { [key: string]: Array<{ x: string; y: number }> } = {};

  for (let i of renew) {
    let quarter = convertDateToQuarter(i["id"]);
    if (!(quarter in q_data_dict)) {
      q_data_dict[quarter] = [];
    }
    q_data_dict[quarter].push({ x: "renew", y: parseFloat(i["value"]) });
  }

  for (let i of registration) {
    let quarter = convertDateToQuarter(i["id"]);
    if (!(quarter in q_data_dict)) {
      q_data_dict[quarter] = [];
    }
    q_data_dict[quarter].push({ x: "registration", y: parseFloat(i["value"]) });
  }

  let q_data = Object.keys(q_data_dict)
    .sort()
    .map((key) => ({ id: key, data: q_data_dict[key] }));

  return q_data.slice(9);
}

function convertDateToQuarter(dateString: string): string {
  let date = new Date(dateString);
  let year = date.getFullYear();
  let month = date.getMonth();
  let quarter = Math.floor(month / 3) + 1;
  return `${year}-Q${quarter}`;
}

export default GenQuarterData;
