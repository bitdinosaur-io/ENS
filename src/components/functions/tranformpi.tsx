// import { QuarterData } from "@/types";

// function TransformPi(data: any, arrname: any) {
//   let stepfirst = data.map((item: any) => {
//     const idParts = item.id.split("-"); // 拆分年份和季度部分
//     const year = idParts[0];
//     const quarterNumber = parseInt(idParts[1]) / 3; // 转换季度数为1、2、3、4等整数
//     const quarter = `Q${Math.ceil(quarterNumber)}`; // 使用Math.ceil()确保四舍五入取整
//     const transformedId = `${year}-${quarter}`;
//     return { id: transformedId, value: Number(item.value) };
//   });
//   let result = transformArray(stepfirst, arrname);
//   return result;

//   function transformArray(arr: any, id: any) {
//     const dataMap: any = {};
//     arr.forEach((item: any) => {
//       if (!dataMap[item.id]) {
//         dataMap[item.id] = 0;
//       }
//       dataMap[item.id] += item.value;
//     });
//     let valall = {
//       value: 0,
//     };
//     arr.map((item: any) => {
//       valall.value += item.value;
//       return valall;
//     });
//     const result = {
//       id,
//       data: Object.keys(dataMap).map((key) => ({
//         x: key,
//         y: dataMap[key],
//       })),
//       value: valall.value,
//     };
//     console.log(result)
//     return result;
//   }
// }

// export default TransformPi;


function GenQuarterData(registration: any, renew: any) {
  let q_data_dict: { [key: string]: Array<{ x: string, y: number }> } = {};

  for (let i of renew) {
    let quarter = convertDateToQuarter(i['id']);
    if (!(quarter in q_data_dict)) {
      q_data_dict[quarter] = [];
    }
    q_data_dict[quarter].push({ "x": "renew", "y": parseFloat(i['value']) });
  }


  for (let i of registration) {
    let quarter = convertDateToQuarter(i['id']);
    if (!(quarter in q_data_dict)) {
      q_data_dict[quarter] = [];
    }
    q_data_dict[quarter].push({ "x": "registration", "y": parseFloat(i['value']) });
  }

  let q_data = Object.keys(q_data_dict)
    .sort()
    .map(key => ({ "id": key, "data": q_data_dict[key] }));

  return q_data.slice(9)

}

function convertDateToQuarter(dateString: string): string {
  let date = new Date(dateString);
  let year = date.getFullYear();
  let month = date.getMonth();
  let quarter = Math.floor(month / 3) + 1;
  return `${year}-Q${quarter}`;
}

export default GenQuarterData;