import React, { Component } from 'react'
// import BootstrapTable from 'react-bootstrap';
import Chart from "react-apexcharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { json } from 'react-router-dom';



export default class Application extends Component {
  constructor(){
    super()
    this.state = {
    

      series: [{
              name: 'Marine Sprite',
              data: [44, 55, 41, 37, 22, 43, 21]
            }
            , {
              name: 'Striking Calf',
              data: [53, 32, 33, 52, 13, 43, 32]
            }, 
            //   {name: 'Tank Picture',
            //   data: [12, 17, 11, 9, 15, 11, 20]
            // }, {
            //   name: 'Bucket Slope',
            //   data: [9, 7, 5, 8, 6, 9, 4]
            // }, {
            //   name: 'Reborn Kid',
            //   data: [25, 12, 19, 32, 25, 24, 10]
            // }
          ],
            options: {
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  dataLabels: {
                    total: {
                      enabled: true,
                      offsetX: 0,
                      style: {
                        fontSize: '13px',
                        fontWeight: 900
                      }
                    }
                  }
                },
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              title: {
                text: 'Fiction Books Sales'
              },
              xaxis: {
                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                labels: {
                  formatter: function (val) {
                    return val + "K"
                  }
                }
              },
              yaxis: {
                title: {
                  text: undefined
                },
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + "K"
                  }
                }
              },
              fill: {
                opacity: 1
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
      col1:['Name', 'City', 'Course'] ,
      col2:[1,2,3],
      col3:[4,5,7],
      col4:[{"labelCos":"EC2 - Other","CostCos":"133.9423762946","range":"2023-07-01 - 2023-07-31"},{"labelCos":"Amazon Elastic Container Service for Kubernetes","CostCos":"72","range":"2023-07-01 - 2023-07-31"},{"labelCos":"Amazon Elastic Load Balancing","CostCos":"16.2","range":"2023-07-01 - 2023-07-31"},{"labelCos":"Amazon Redshift","CostCos":"124.57216527","range":"2023-07-01 - 2023-07-31"},{"labelCos":"Amazon Relational Database Service","CostCos":"513.286068132","range":"2023-07-01 - 2023-07-31"},{"labelCos":"AmazonCloudWatch","CostCos":"49.0789587187","range":"2023-07-01 - 2023-07-31"}],
      
      movies : [{
        'name': 'Jumanji',
        'duration': 120
      },
      {
        'name': 'Harry P',
        'duration': 60
      },
      {
        'name': 'Toy Story',
        'duration': 240
      },
      {
        'name': 'Jumanji222',
        'duration': 120
      },
      {
        'name': 'Harry P222',
        'duration': 60
      },
      {
        'name': 'Toy Story222',
        'duration': 240
      }
    ]

    }
  }
  render() {
    // {"labelCos":"EC2 - Other","costCos":"48.7067791991","range":"2023-03-01 - 2023-04-01"}
    const dta2 =[{"t":"Aug 2023","AWS Backup":1,"AWS Budgets":0,"AWS CloudTrail":0,"AWS Config":4,"AWS Cost Explorer":156,"AWS Directory Service":37,"AWS Glue":0,"AWS Key Management Service":0,"AWS Lambda":0,"AWS Secrets Manager":5,"AWS Security Hub":8,"Amazon DynamoDB":0,"EC2 - Other":141,"Amazon Elastic Compute Cloud - Compute":463,"Amazon Elastic Container Service for Kubernetes":74,"Amazon Elastic File System":2,"Amazon Elastic Load Balancing":16,"Amazon GuardDuty":3,"Amazon Managed Grafana":9,"Amazon Redshift":0,"Amazon Relational Database Service":155,"Amazon Route 53":0,"Amazon Simple Notification Service":0,"Amazon Simple Queue Service":0,"Amazon Simple Storage Service":11,"Amazon Virtual Private Cloud":347,"AmazonCloudWatch":48,"Tax":0},{"t":"Jul 2023","AWS Backup":1,"AWS Budgets":0,"AWS CloudTrail":0,"AWS Config":15,"AWS Cost Explorer":9,"AWS Directory Service":37,"AWS Glue":0,"AWS Key Management Service":0,"AWS Lambda":0,"AWS Secrets Manager":5,"AWS Security Hub":15,"Amazon DynamoDB":0,"EC2 - Other":138,"Amazon Elastic Compute Cloud - Compute":509,"Amazon Elastic Container Service for Kubernetes":74,"Amazon Elastic File System":2,"Amazon Elastic Load Balancing":16,"Amazon GuardDuty":3,"Amazon Managed Grafana":9,"Amazon Redshift":124,"Amazon Relational Database Service":533,"Amazon Route 53":0,"Amazon Simple Notification Service":0,"Amazon Simple Queue Service":0,"Amazon Simple Storage Service":8,"Amazon Virtual Private Cloud":348,"AmazonCloudWatch":49,"Tax":0},{"t":"Jun 2023","AWS Backup":1,"AWS Budgets":0,"AWS CloudTrail":0,"AWS Config":12,"AWS Cost Explorer":3,"AWS Directory Service":35,"AWS Glue":0,"AWS Key Management Service":0,"AWS Lambda":0,"AWS Secrets Manager":5,"AWS Security Hub":13,"Amazon DynamoDB":0,"EC2 - Other":163,"Amazon Elastic Compute Cloud - Compute":860,"Amazon Elastic Container Service for Kubernetes":72,"Amazon Elastic File System":2,"Amazon Elastic Load Balancing":16,"Amazon GuardDuty":5,"Amazon Managed Grafana":9,"Amazon QuickSight":25,"Amazon Redshift":331,"Amazon Relational Database Service":614,"Amazon Route 53":0,"Amazon Simple Notification Service":0,"Amazon Simple Queue Service":0,"Amazon Simple Storage Service":6,"Amazon Virtual Private Cloud":327,"AmazonCloudWatch":69,"Tax":0},{"t":"May 2023","AWS Backup":0,"AWS Budgets":0,"AWS CloudTrail":0,"AWS Config":14,"AWS Cost Explorer":13,"AWS Directory Service":37,"AWS Glue":0,"AWS Key Management Service":0,"AWS Lambda":0,"AWS Secrets Manager":5,"AWS Security Hub":14,"AWS Step Functions":0,"Amazon DynamoDB":0,"EC2 - Other":146,"Amazon Elastic Compute Cloud - Compute":702,"Amazon Elastic Container Service for Kubernetes":74,"Amazon Elastic File System":1,"Amazon Elastic Load Balancing":16,"Amazon GuardDuty":4,"Amazon QuickSight":130,"Amazon Redshift":494,"Amazon Relational Database Service":552,"Amazon Route 53":0,"Amazon Simple Notification Service":0,"Amazon Simple Queue Service":0,"Amazon Simple Storage Service":2,"Amazon Virtual Private Cloud":350,"AmazonCloudWatch":61,"Tax":0},{"t":"Apr 2023","AWS Backup":0,"AWS Budgets":0,"AWS CloudShell":0,"AWS CloudTrail":0,"AWS Config":0,"AWS Cost Explorer":0,"AWS Data Transfer":-1,"AWS Directory Service":0,"AWS Glue":0,"AWS Key Management Service":0,"AWS Lambda":0,"AWS Secrets Manager":0,"AWS Security Hub":0,"AWS Step Functions":0,"Amazon DynamoDB":0,"EC2 - Other":1,"Amazon Elastic Compute Cloud - Compute":0,"Amazon Elastic Container Service for Kubernetes":0,"Amazon Elastic File System":0,"Amazon Elastic Load Balancing":0,"Amazon GuardDuty":0,"Amazon QuickSight":0,"Amazon Redshift":0,"Amazon Relational Database Service":0,"Amazon Route 53":0,"Amazon Simple Email Service":0,"Amazon Simple Notification Service":0,"Amazon Simple Queue Service":0,"Amazon Simple Storage Service":0,"Amazon Virtual Private Cloud":0,"AmazonCloudWatch":0},{"t":"Mar 2023","AWS Backup":0,"AWS CloudTrail":0,"AWS CodeCommit":0,"AWS Config":4,"AWS Cost Explorer":0,"AWS Directory Service":18,"AWS Key Management Service":0,"AWS Lambda":0,"AWS Secrets Manager":1,"AWS Security Hub":0,"AWS Step Functions":0,"Amazon DynamoDB":0,"EC2 - Other":49,"Amazon Elastic Compute Cloud - Compute":220,"Amazon Elastic Container Service for Kubernetes":36,"Amazon Elastic File System":0,"Amazon Elastic Load Balancing":8,"Amazon GuardDuty":0,"Amazon Redshift":0,"Amazon Relational Database Service":139,"Amazon Route 53":0,"Amazon Simple Notification Service":0,"Amazon Simple Queue Service":0,"Amazon Simple Storage Service":0,"Amazon Virtual Private Cloud":158,"AmazonCloudWatch":21,"Tax":0}]

    let dtaz=[]
    let allDtaz=[]
    dtaz.push({
      res:'AWS Backup',
      pre:dta2[0]['AWS Backup'],
      last2nd:dta2[1]['AWS Backup'],
      last3rd:dta2[2]['AWS Backup'],
      last4th:dta2[3]['AWS Backup'],
      last5th:dta2[4]['AWS Backup'],
      last6th:dta2[5]['AWS Backup'],


    })

    const allKeys = [...new Set(dta2.flatMap(i=>Object.keys(i)))]

    allKeys.map((res)=>{
      allDtaz.push({
        res:res,
        pre:dta2[0][res],
        last2nd:dta2[1][res],
        last3rd:dta2[2][res],
        last4th:dta2[3][res],
        last5th:dta2[4][res],
        last6th:dta2[5][res],
      })
    })

    // for(let i=0;i<dta2.length;i++){
    //   console.log(Object.keys(dta2[i]))
    // }
    console.log(allKeys.length+'====all')
    console.log(JSON.stringify(allDtaz.length)+'lslss')

    // console.log(JSON.stringify(dtaz)+'lllz')
    // "t":["Aug 2023","Jul 2023","Jun 2023","May 2023","Apr 2023","Mar 2023"],"AWS Backup":[1,1,1,0,0,0],"AWS Budgets":[0,0,0,0,0,null],"AWS CloudTrail":[0,0,0,0,0,0],
    const studentList = [
      {"id": "1", "name": "s1", "age": 10, "gender" : "m", "subject": "Maths"},
      {"id": "2", "name": "s2", "age": 11, "gender" : "m", "subject": "Maths"}];
    // console.log( JSON.stringify(studentList.map( ({name, age}) => ({name, age}) )) +"llll");

    const data4 =[{"AWS Config":[4,15,12,14,0,4],"AWS Cost Explorer":[156,9,3,13,0,0],"AWS Directory Service":[37,37,35,37,0,18],"AWS Glue":[0,0,0,0,0,null],"AWS Key Management Service":[0,0,0,0,0,0],"AWS Lambda":[0,0,0,0,0,0],"AWS Secrets Manager":[5,5,5,5,0,1],"AWS Security Hub":[8,15,13,14,0,0],"Amazon DynamoDB":[0,0,0,0,0,0],"EC2 - Other":[141,138,163,146,1,49],"Amazon Elastic Compute Cloud - Compute":[463,509,860,702,0,220],"Amazon Elastic Container Service for Kubernetes":[74,74,72,74,0,36],"Amazon Elastic File System":[2,2,2,1,0,0],"Amazon Elastic Load Balancing":[16,16,16,16,0,8],"Amazon GuardDuty":[3,3,5,4,0,0],"Amazon Managed Grafana":[9,9,9,null,null,null],"Amazon Redshift":[0,124,331,494,0,0],"Amazon Relational Database Service":[155,533,614,552,0,139],"Amazon Route 53":[0,0,0,0,0,0],"Amazon Simple Notification Service":[0,0,0,0,0,0],"Amazon Simple Queue Service":[0,0,0,0,0,0],"Amazon Simple Storage Service":[11,8,6,2,0,0],"Amazon Virtual Private Cloud":[347,348,327,350,0,158],"AmazonCloudWatch":[48,49,69,61,0,21],"Tax":[0,0,0,0,null,0]}]

    // console.log(JSON.stringify(data4[0]["AWS Config"])+"lolo")

    let d1=["res","pre","last2","last3","last4","last5","last6"]
    let d2 = data4[0]["AWS Config"]
    
    let d3 = data4[0]["AWS Cost Explorer"]
    let d4 = data4[0]["AWS Directory Service"]
    let d5 = data4[0]["AWS Key Management Service"]
    let d6 = data4[0]["AWS Glue"]


    const map1 = new Map([d1,d2
    ]);
    const obj = Object.fromEntries(map1);
    // console.log(JSON.stringify(obj)+"lolo2")

// let data5 =[]
//     for(let i=0;i<data4.length;i++){
//       for (let item in data4[i]) {
//         data5.push({
//           "res":Object.keys(data4[i][item]),
//           "pre":data4[i][item],
         




//       })
//       }
     

//     }

//     console.log(JSON.stringify(data5)+"dta5")
// let source = [{
//   day: 1,
//   deliveries: 16,
//   hours: 9
// }, {
//   day: 2,
//   deliveries: 19,
//   hours: 11
// }]

// let ansArray = Object.keys(source[0]);
// let datatable = source.map(d => Array.from(Object.values(d)))

// let combined = [ansArray,...datatable];
// console.log(combined);
    var donuts = [
      { type: "Jelly", cost: 1.22 },
      { type: "Chocolate", cost: 2.45 },
      { type: "Cider", cost: 1.59 },
      { type: "Boston Cream", cost: 5.99 }];
      
      // donuts.forEach(v => {console.log(v["type"]+ " donuts cost $"+v["cost"]+" each")});




    var students = [{
      name: "Mike",
      track: "track-a",
      achievements: 23,
      points: 400,
    },
    {
      name: "james",
      track: "track-a",
      achievements: 2,
      points: 21,
    },
  ]
  
  // dta2.forEach(myFunction);
  
  // function myFunction(item, index) {
  //   for (var key in item) {
  //     console.log(item[key] +'======llll')
  //   }
  // }
    const dta = [{t: "13:00", value: 0.001013, valueTwo: 0.000132},
    {t: "16:00", value: 0.000854, valueTwo: 0.000108},
    {t: "18:00", value: 0.000861, valueTwo: 0.000136},
    {t: "22:00", value: 0.004468, valueTwo: 0.000308}]

    const data2 =[  {t: "00:00", value: 0.000957, valueTwo: 0.000185}, 
    {t: "03:00", value: 0.000853, valueTwo:  0.00011},
    {t: "07:00", value: 0.004372, valueTwo: 0.000236},
    {t: "09:00", value: 0.001052, valueTwo: 0.003084},...dta
    
] 
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    // amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    // pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    // uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page F",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];


    let heading = ['Name', 'City', 'Course'];
    let col1Data = this.state.col1
    let col2Data = this.state.col2

    let col3Data = this.state.col3
    let col4Data = this.state.col4
    const column = [
      {
        dataField:'Label',
        text:'labelCos'
      },
      {
        dataField:'item1',
        text:'costCos'
      }
    ]

    const rag = this.state.movies.filter((x)=> x.duration === 60).map((x)=>(<li>{x.name}</li>))

      //  console.log(JSON.stringify(rag)+ 'llll')
      // console.log(JSON.stringify(rag) + 'llll')
    return (
      <>
       <div>Application</div>
       <p>{rag}</p>
       {/* <p>{this.state.letycos.filter((x)=> {return x.range = '2023-03-01 - 2023-04-01'})}</p> */}
 <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
{/* <BootstrapTable /> */}
      {/* <p>{this.state.table.range}</p> */}
       <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" allowDuplicatedCategory={true}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
      <Bar dataKey="uv" stackId="a" fill="#ffc658" />
     
    </BarChart>
       <BarChart
      width={500}
      height={300}
      data={data2}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="t" allowDuplicatedCategory={true}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" stackId="a" fill="#0071fb" />
      <Bar dataKey="valueTwo" stackId="a" fill="#82ca9e" />
     
    </BarChart>
      </>
     
    )
  }
}
