/*
 * Overview
 * 
 * the linting exception.
*/

import { CSVLink, CSVDownload } from "react-csv/lib";

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import Select from 'react-select';
// import "bootstrap/dist/css/bootstrap.min.css";
import { components } from 'react-select';
// import { Alert, Col, Row, Button, Checkbox, Label, ListGroup, ListGroupItem, FieldGroup, FormControl, FormGroup, form, Form, ControlLabel, OverlayTrigger, Tooltip, ButtonToolbar, Popover } from "react-bootstrap";
import { Alert, Col, Row, Button, Checkbox, Label, ListGroup, ListGroupItem, FieldGroup, FormControl, FormGroup, form, Form, ControlLabel, OverlayTrigger, ButtonToolbar, Popover } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import SimpleTable from "../../components/table/regulartable";
import moment from "moment";
import CostUtils from "../../utils/CostUtils";
import BudgetUtils from "../../utils/BudgetUtils";
import CostRecommendUtils from "../../utils/CostRecommendUtils";
import SVG from 'react-inlinesvg';
import { searchCostByTag, searchOSbyTag, costOnService, CreateBudget } from "../../redux/Cost/reducer";
import { showAndHideHitrustModal, getListAllTags } from "../../redux/Cost/reducer";
// import { Chart } from "react-google-charts";
import store from "../../app";
import SimpleModal from "../../components/modal/modal";
import SimpleCostModal from "../../components/modal/costmodal"
import { metaData, AWS_ACCOUNT_NUMBER } from "../../utils/constants";
import TextOverlay from "../../components/tooltip/tooltip";
import Loader from "react-loader-spinner";
import '../../components/select/custom-select.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import barIcon from '../../images/barIcon.svg';
import lineIcon from '../../images/lineIcon.svg';
import pieIcon from '../../images/pieIcon.svg';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box, Card, CardContent, Container, InputLabel, MenuItem, TablePagination, Typography } from "@mui/material";
import SsidChartIcon from '@mui/icons-material/SsidChart';
// import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
// import Dropdown from 'react-bootstrap';
// import DropdownButton from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PaymentsIcon from '@mui/icons-material/Payments';
// import CreditScoreIcon from '@mui/icons-material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
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

// import Modal from 'react-bootstrap';
// import '../Costs/Budget.css'
// import tableRed from '../../images/table_red.jpg'
// import { TablePagination } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0071fb',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    //   [`&.${rows.protein[4]}`]: {
    //     fontSize: 74,
    //   },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    //   '&:nth-of-type(4)': {
    //     backgroundColor: '#ffc0bd',
    //     // color:'#FF0000 !important',
    //     font: '#ff0000',
    //   },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function CreditTable(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
// const rows2 ={this.state.budgetDataList}
const rowsCredit = [
    CreditTable('06/05/2023', 'AccountA132132135156', '$80.0', '$120.0', '$0.0'),
    CreditTable('27/05/2023', 'AccountB552132135156', '$90.0', '$100.0', '-'),
    CreditTable('01/04/2023', 'AccountX857832135156', '$150.0', '$160.0', '-'),
    CreditTable('16/05/2023', 'AccountY632432135156', '$70.0', '$80.0', '-'),
    CreditTable('18/03/2023', 'AccountZ548732135156', '$50.0', '$70.0', '-'),
];

function createData(name, calories, fat, carbs, protein, forcasted) {
    return { name, calories, fat, carbs, protein, forcasted };
}

const rows = [
    createData('Storage Report', 'Daily', 'Storage Budget,EBS Budget', 'user1@companyA.com'),
    createData('Services Report', 'Monthly', 'EC2 Budget,VPC Budget', 'user2@companyA.com'),
    createData('Compute Engine Report', 'Daily', 'Compute Engine Budget-Daily', 'user3@companyA.com'),
    createData('Compute Engine Report', 'Monthly', 'Compute Engine Budget-Monthly', 'user4@companyA.com'),
    createData('Branch Report', 'Weekly', 'Branch Budget', 'user5@companyA.com'),
];

// function createData(name, calories, fat, carbs, protein, forcasted) {
//   return { name, calories, fat, carbs, protein,forcasted };
// }

// const rows = [
//   createData('Ok', 'Project A', 350, 380, 360, '500$'),
//   createData('Not Set', 'Project B',250, 280, 290, '500$'),
//   createData('Ok', 'EC2 COMPANY A',150, 175 ,170, '500$'),
//   createData('Not Set', 'COMPANY A',510, 580,  520, '500$'),
//   createData('Ok', 'COST CODE A', 300, 330,  310, '500$'),
// ];


/* eslint-disable react/prefer-stateless-function */
class CostV1 extends Component {
    constructor(props) {
        super(props);
        //     this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);
        this.updatebudgetData = this.updatebudgetData.bind(this);
        this.updatebudgetAmountData = this.updatebudgetAmountData.bind(this);
        this.updatebudgetemailData = this.updatebudgetemailData.bind(this);
        this.loadNewPageView = this.loadNewPageView.bind(this);
        this.loadNewRecommendView = this.loadNewRecommendView.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectCheckbox = this.handleSelectCheckbox.bind(this);
        this.state = {
            optionLineCos: {
                // colors : ['#0071fb','#4d3a96', '#4576b5'],
                colors: ['#0071fb', '#003f5c', '#bc5090', '#ff6361', '#ffa600', '#5758d0'],

                chart: {
                    id: "basic-bar"
                },
                plotOptions: {
                    bar: {
                        distributed: true,
                        horizontal: false,
                        dataLabels: {
                            position: 'bottom'
                        },
                        // barHeight: '85%',
                        // offsetX: 30
                    },
                    line: {
                        distributed: true,
                        horizontal: false,
                        dataLabels: {
                            position: 'bottom'
                        },
                        // barHeight: '85%',
                        // offsetX: 30
                    }
                },
                xaxis: {
                    // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                    categories: [],
                    title: {
                        text: `${moment().subtract(1, 'month').format('MMM YYYY')}`
                    },
                    labels: {
                        // show: false,
                        // rotate: 0
                    }
                    // label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    // categories:[...`${this.state.optionBarCost}`]
                    // categories:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                },
                yaxis: { text: 'billing' }
            },
            seriesLineCos: [{
                name: `${moment().subtract(1, 'month').format('MMM YYYY')}`,
                // data: [11,22,33,44,55,66,77,88,99,100]
                data: [],
                // data: [...`${this.state.seriesBarCost}`]
                // data: [...barCostseries]
            }],
            seriesCosPie: [],
            optionsCosPie: {
                // colors : ['#0071fb','#4d3a96', '#4576b5'],
                chart: {
                    //   width: 380,
                    type: 'pie',
                },
                labels: [],
                //   labels:previousMonCosService,
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


            optionBarCos: {
                colors: ['#0071fb', '#4d3a96', '#4576b5'],
                chart: {
                    id: "basic-bar",
                    type: 'bar',
                    stacked: true
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        dataLabels: {
                            position: 'bottom'
                        },
                        // offsetX: 30
                    }
                },
                xaxis: {
                    categories: [],
                    title: {
                        text: 'Days'
                    },
                    labels: {
                        rotate: -45
                    }
                    // label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    // categories:[...`${this.state.optionBarCost}`]
                    // categories:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                },
                yaxis: { text: 'billing' }
            },
            seriesBarCos: [{
                name: "Days",
                data: []
                // data: [...`${this.state.seriesBarCost}`]
                // data: [...barCostseries]
            }],

            optionBarCost: {
                colors: ['#0071fb', '#4d3a96', '#4576b5'],
                chart: {
                    id: "basic-bar"
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        dataLabels: {
                            position: 'bottom'
                        },
                        // offsetX: 30
                    }
                },
                xaxis: {
                    categories: [],
                    title: {
                        text: 'Days'
                    }
                    // labels: {
                    //     rotate: 0
                    //   }
                    // label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    // categories:[...`${this.state.optionBarCost}`]
                    // categories:[...barCostOption],
                },
                yaxis: { text: 'billing' }
            },
            seriesBarCost: [{
                name: "Days",
                data: []
                // data: [...`${this.state.seriesBarCost}`]
                // data: [...barCostseries]
            }],
            costTitle: 'Number of Days',
            selectedOptionCost: 'SIX_MONTH',
            show: false,
            newtry: [],
            checkValues: [],
            creditList: [],
            isBar: true,
            isLine: false,
            isLineSelected: false,
            isPie: false,
            isBarSelected: true,
            isPieSelected: false,
            isCreditsHtml: false,
            isCostHtml: true,
            isBudgetHtml: false,
            isBudgetsReportHtml: false,
            isCoSHtml: false,
            isBarChart: true,
            totalCost: 0,
            timeP: "Current Month",
            datePickerIsOpen: false,
            datePickerStartDate: new Date(),
            datePickerEndDate: null,
            frequency: "Monthly",
            range: `${moment().subtract(6, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`,
            rangeCurrent: `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`,
            queryBuilderData: {},
            selectedGroup: '*',
            allListTags: {
            },
            filterTagsObject: [],
            selectedAccount: AWS_ACCOUNT_NUMBER || '130489330727',
            region: process.env.AWS_REGION || 'us-west-2',
            finalFilterList: {},
            selectedTagKeyfromSelect: '',
            filterCheckboxOptions: [],
            checkedFilterList: [],
            enabledCheckboxList: [],
            enabledCheckedCheckboxList: [],
            disabledCheckboxList: [],
            leftFilterList: [],
            rightFilterList: [],
            groupTotals: [],
            selectedCheckboxes: [],
            clearFilter: [],
            isFilter: false,
            tabledata: [],
            filtertags: [],
            customFilterList: [],
            customFilterOptions: [],
            savingDataList: [],
            budgetDataList: [],
            budgetReportDataList: [],
            cosTableData: [],
            cosTableDataPreMonth: [],
            cos2MonthsTableData: [],
            cosTotalTableData: [],
            cosDataModified: [],
            CosGraphBarX: [],
            CosGraphBarXPreMonth: [],
            CosGraphBarXLast3rdMonth: [],
            CosGraphBarXLast4thMonth: [],
            CosGraphBarXLast5thMonth: [],
            CosGraphBarXLast6thMonth: [],
            CosGraphBarY: [],
            CosGraphBarYPreMonth: [],
            CosGraphBarYLast3rdMonth: [],
            CosGraphBarYLast4thMonth: [],
            CosGraphBarYLast5thMonth: [],
            CosGraphBarYLast6thMonth: [],
            cosRechartBarCurrentMonth: [],
            cosRechartPreMonth: [],
            cosRechartLast3rdMonth: [],
            cosRechartLast4thMonth: [],
            cosRechartLast5thMonth: [],
            cosRechartLast6thMonth: [],
            cosRechartData: [],

            cosAlign: [],

            Expired: '',
            templateTypeOptions: [{
                label: 'Zero spend budget',
                value: 'MyZeroSpendBudget'
            }],
            budgetReportFrequency: [{
                label: "Daily",
                value: "daily"
            }, {
                label: "Weekly",
                value: "weekly"
            }, {
                label: "Monthly",
                value: "monthly"
            }],

            budgetOptions: [
                { value: 'Zero', label: 'Zero spend budget' },
                { value: 'Monthly', label: 'Monthly cost budget' }
            ],
            options01: [
                { value: 'CostCenter', label: 'CostCenter' }
            ],
            options02: [
                { value: 'OSType', label: 'OSType' }
            ],
            // options03: [
            //     { value: '130489330727', label: '130489330727' }
            // ],
            options03: [
                { value: '130489330727', label: 'Shared-Services' },
                { value: '130489330727', label: 'DataEz-Dataplatform-SBX' },
                { value: '688669685966', label: 'DataEz-Dataplatform-UAT' },
                { value: '458837775984', label: 'DataEz-Dataplatform' },
                { value: '295390451377', label: 'DataEz-Devsecops' },
                { value: '653014750705', label: 'DataEz-Devsecops-SBX' },
                { value: '996068258731', label: 'DataEz-SharedServices-SBX' }
            ],
            stackedColData: [
                ['Cost', 'Total Cost', 0, 0]
            ],
            MonthlyColData: ['Cost', 'Total Cost', 0, 0]


            , columnoptions: {
                isStacked: 'true',
                legend: {
                    position: 'bottom',
                },
                title: 'Cost Details',
                chartArea: { width: '85%' },
                colors: ['#1A9ED6', '#E77272'],
                bar: { groupWidth: '75%' },
                hAxis: {
                    title: 'Number of days',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Billing',
                    minValue: 0,
                    viewWindowMode: "explicit", viewWindow: { min: 0 }
                },
            },
            costData: [{
                usertags: 'TotalCost',
                monthtodatecost: '0',
                prevmonthcost: '0',
                avgmonthlycost: '0',
                forecastcost: '0'
            }],
            billingData: {
                Request: {
                    Metadata: {
                        Service: "Billing",
                        Version: "1.0",
                        Provider: "AWS",
                        Account: "130489330727"
                    },
                    Parameters: {
                        Content: {
                            Key: "",
                            Value: "ANY",
                            Service: "All",
                            Frequency: "Monthly",
                            Range: `${moment()
                                .subtract(6, 'months')
                                .format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
                        }
                    }
                }
            },
            cosData: {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": AWS_ACCOUNT_NUMBER || '130489330727',
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": [{
                                "*": ["*"]
                            }],
                            "Group": "*",
                            "Service": "All",
                            "Frequency": "Monthly",
                            "Range": `${moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                            //"Range": `${moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(0, 'months').format('YYYY-MM-DD')}`
                        }
                    }
                }
            },

            budgetPayload: {
                Email: "",
                Name: "",
                Amount: "",
                Account: AWS_ACCOUNT_NUMBER || '130489330727',
                Range: `${moment()
                    .subtract(6, 'months')
                    .format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`

            },
            columnoptionscos: {
                //isStacked: 'true',
                legend: {
                    position: 'bottom',
                },
                title: '',
                chartArea: { width: '85%' },
                colors: ['#1A9ED6', '#E77272', '#6e55aa', '#ff9461', '#c2579f', '#f86982'],
                bar: { groupWidth: '75%' },
                hAxis: {
                    title: 'Months',
                    minValue: 0,
                },
                vAxis: {

                    title: 'Cost',
                    //minValue: 0,
                    //viewWindowMode: "explicit", viewWindow:{ min: 0 } 

                },
            },
            percentChange: '0',
            chartTotalCost: 0,
            checkstatus: false,
            currentMonth: `${moment().format('MMMM')}`,
            previouMonth: `${moment().subtract(1, 'M').format('MMMM')}`,
            TwoMonthAgo: `${moment().subtract(2, 'M').format('MMMM')}`,
            ThreeMonthAgo: `${moment().subtract(3, 'M').format('MMMM')}`,
            FourMonthAgo: `${moment().subtract(4, 'M').format('MMMM')}`,
            FiveMonthAgo: `${moment().subtract(5, 'M').format('MMMM')}`
        };
        this.onSearch = this.onSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.clearFilterTags = this.clearFilterTags.bind(this);
        this.queryBuilderChange = this.queryBuilderChange.bind(this);
        this.queryBuilderGroupChange = this.queryBuilderGroupChange.bind(this);
        this.onFilterMenuOpen = this.onFilterMenuOpen.bind(this);
        this.onFilterApply = this.onFilterApply.bind(this);
        this.props.costOnService(this.state.cosData);
        // this.props.costOnService(this.state. cosDataTwoMonthAgo);
    }

    selectRefNew = null;
    handleSelect = (eventKey, event) => {
        // this.setState({selectValue:eventKey});
        event.persist();
    }
    // handleClose() {
    //     this.setState({ show: false });
    //   }

    //   handleShow() {
    //     this.setState({ show: true });
    //   }

    openDatePicker = () => {
        this.setState({
            datePickerIsOpen: !this.state.datePickerIsOpen,
        });
    };

    onDateRangeChange = (dates) => {
        const [start, end] = dates;
        this.setState({
            frequency: "Daily",
            range: `${moment(start).format("YYYY-MM-DD")}:${moment(end).format("YYYY-MM-DD")}`,
            timeP: ""
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": [{
                                "*": ["*"]
                            }],
                            "Group": "*",
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };

    onOneWeekButtonClick = () => {
        let r = `${moment().subtract(1, 'week').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            range: r,
            timeP: "Last 1 Week"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            this.props.getListAllTags(this.state.selectedAccount);
        });

    };

    onTwoWeekButtonClick = () => {
        let r = `${moment().subtract(2, 'week').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            range: r,
            timeP: "Last 2 Weeks"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };

    onThreeWeekButtonClick = () => {
        let r = `${moment().subtract(3, 'week').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            range: r,
            timeP: "Last 3 Weeks"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };

    onOneMonthButtonClick = () => {
        let months_res = `${moment()}`
        let check_last_month = `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')}`
        console.log(check_last_month + 'check last Month')
        let check_current_month = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        console.log(check_current_month + 'check current Month')
        console.log(months_res + 'month_res')
        let r = `${moment().subtract(1, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            range: r,
            timeP: "Last 1 Month"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            console.log(this.state.range + 'range_res')
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };

    onThreeMonthButtonClick = () => {
        let r = `${moment().subtract(3, 'months').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Monthly",
            range: r,
            timeP: "Last 3 Months"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };

    onSixMonthButtonClick = () => {
        let r = `${moment().subtract(6, 'months').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Monthly",
            range: r,
            timeP: "Last 6 Months"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };

    onCurrentMonthButtonClick = () => {
        let months_res = `${moment().subtract(1, 'M').format('MMMM')}`
        // let check_last_month = `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')}`
        // console.log(check_last_month + 'check last Month')
        let check_current_month = `${moment().startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        console.log(check_current_month + 'check current Month' + this.state.stackedColData + 'stack col data')
        // console.log(months_res + 'month_res')
        let r = `${moment().subtract(1, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            // range: r,
            selectedOptionCost: `${this.state.currentMonth}`,
            range: check_current_month,
            timeP: "Current Month"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            console.log(this.state.range + 'range_res')
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };
    onPreviousMonthButtonClick = () => {
        // let months_res = `${moment()}`
        let check_last_month = `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        console.log(check_last_month + 'check last Month' + this.state.stackedColData + 'stack col data')
        // let check_current_month = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        // console.log(check_current_month + 'check current Month')
        // console.log(months_res + 'month_res')
        console.log(check_last_month + ' == last month trigger')
        let r = `${moment().subtract(1, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            // range: r,
            range: check_last_month,
            timeP: "Previous Month"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            console.log(this.props.searchCostByTag(billingData) + 'pre data')
            console.log(this.state.range + 'range_res' + JSON.stringify(billingData))
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };
    onTwoMonthBeforeButtonClick = () => {
        // let months_res = `${moment()}`
        let check_last2_month = `${moment().subtract(2, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(2, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        // console.log(check_last_month + 'check last Month')
        // let check_current_month = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        console.log(check_last2_month + 'check_last2_month' + this.state.stackedColData + 'stack col data')
        // console.log(months_res + 'month_res')
        let r = `${moment().subtract(1, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            // range: r,
            range: check_last2_month,
            timeP: "Two Months ago"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            console.log(this.state.range + 'range_res')
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };
    onThreeMonthBeforeButtonClick = () => {
        // let months_res = `${moment()}`
        let check_last3_month = `${moment().subtract(3, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(3, 'months').endOf('month').format('YYYY-MM-DD')}`
        // console.log(check3_last_month + 'check last Month')
        // let check_current_month = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        console.log(check_last3_month + 'check_last3_month' + this.state.stackedColData + 'stack col data')
        // console.log(months_res + 'month_res')
        let r = `${moment().subtract(1, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({

            frequency: "Daily",
            // range: r,
            range: check_last3_month,
            timeP: "Three Months ago",

        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            console.log(this.state.range + 'range_res')
            this.props.getListAllTags(this.state.selectedAccount);
        },


        );
    };
    onFourMonthBeforeButtonClick = () => {
        // let months_res = `${moment()}`
        let check_last4_month = `${moment().subtract(4, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(4, 'months').endOf('month').format('YYYY-MM-DD')}`
        console.log(check_last4_month + 'check last Month' + this.state.stackedColData + 'stack col data')
        // let check_current_month = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        console.log(check_last4_month + ' check_last4_month')
        // console.log(months_res + 'month_res')
        let r = `${moment().subtract(1, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            // range: r,
            range: check_last4_month,
            timeP: "Four Months ago"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            console.log(this.state.range + 'range_res')
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };
    onFiveMonthBeforeButtonClick = () => {
        // let months_res = `${moment()}`
        let check_last5_month = `${moment().subtract(5, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(5, 'months').endOf('month').format('YYYY-MM-DD')}`
        // console.log(check_last_month + 'check last Month')
        // let check_current_month = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        console.log(check_last5_month + 'check_last5_month' + this.state.stackedColData + 'stack col data')
        // console.log(months_res + 'month_res')
        let r = `${moment().subtract(1, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let tags = (queryData && Object.keys(queryData).length === 0 && queryData.constructor === Object) ? [{ "*": ["*"] }] : [queryData];
        this.setState({
            frequency: "Daily",
            // range: r,
            range: check_last5_month,
            timeP: "Five Months ago"
        }, function () {
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": tags,
                            "Group": this.state.selectedGroup,
                            "Service": "All",
                            "Frequency": this.state.frequency,
                            "Range": this.state.range
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
            // this.loadInitialFilters();
            console.log(this.state.range + 'range_res')
            this.props.getListAllTags(this.state.selectedAccount);
        });
    };


    queryBuilderGroupChange = () => {
        let tagName, groupCheckboxValues = [];
        if (event.target.checked) {
            tagName = event.target.name;
        } else {
            tagName = '*';
        }
        const customFilterList = [...this.state.customFilterList];
        customFilterList.forEach((filter) => {
            if (filter.tagName === tagName) {
                filter.isGroupChecked = !filter.isGroupChecked;
            } else {
                filter.isGroupChecked = false;
            }
        });
        if (event.target.checked) {
            let groupCheckboxes = (this.state.customFilterOptions.filter(item => item[0].value === tagName))[0].filter(item => item.isChecked);
            groupCheckboxes.forEach((item) => {
                groupCheckboxValues.push(item.value);
            });
        } else {
            groupCheckboxValues = this.state.selectedCheckboxes;
        }
        this.setState({
            customFilterList: customFilterList,
            selectedGroup: tagName,
            selectedCheckboxes: groupCheckboxValues
        })
    }

    queryBuilderChange = () => {
        const keyx = event.target.getAttribute('rel');
        const valuex = event.target.name;
        let customFilterList = [...this.state.customFilterList];
        if (event.target.checked) {
            this.state.selectedCheckboxes.push(valuex);
            if (!this.state.queryBuilderData[keyx]) {
                this.state.queryBuilderData[keyx] = [valuex]
            } else {
                this.state.queryBuilderData[keyx].push(valuex);
            }
            customFilterList.find(item => item.tagName === keyx).checkedCount++;
        } else {
            let index = this.state.queryBuilderData[keyx].indexOf(valuex);
            this.state.queryBuilderData[keyx].splice(index, 1);
            if (!this.state.queryBuilderData[keyx].length) {
                delete this.state.queryBuilderData[keyx];
            }
            customFilterList.find(item => item.tagName === keyx).checkedCount--;
        }
        let customFilterOptions = [...this.state.customFilterOptions];
        customFilterOptions.forEach(filterarr => {
            filterarr.forEach((item) => {
                if (item.label === valuex) {
                    item.isChecked = !item.isChecked;
                }
            });
        });
        if (this.state.selectedGroup !== '*') {
            let groupCheckboxes = (this.state.customFilterOptions.filter(item => item[0].value === this.state.selectedGroup))[0].filter(item => item.isChecked);
            let groupCheckboxValues = [];
            groupCheckboxes.forEach((item) => {
                groupCheckboxValues.push(item.value);
            });
            this.setState({
                customFilterList: customFilterList,
                customFilterOptions: customFilterOptions,
                selectedCheckboxes: groupCheckboxValues
            });
            return;
        }

        this.setState({
            customFilterList: customFilterList,
            customFilterOptions: customFilterOptions
        });
        console.log(this.state.customFilterOptions);
    }

    handleSelectCheckbox = () => {
        let isChecked = event.target.checked;
        let selectedValue = event.target.value;

        if (isChecked && this.state.selectedCheckboxes.indexOf(selectedValue) === -1) {
            this.state.selectedCheckboxes.push(event.target.value);
        }

        if (!isChecked && this.state.selectedCheckboxes.indexOf(selectedValue) > -1) {
            this.state.selectedCheckboxes.splice(this.state.selectedCheckboxes.indexOf(selectedValue), 1);
        }
        let totalOptions = [...this.state.filterCheckboxOptions], checkboxList = [...this.state.selectedCheckboxes];
        checkboxList.forEach(filter => {
            if (totalOptions.indexOf(filter) > -1) {
                totalOptions.splice(totalOptions.indexOf(filter), 1);
            }
        });
        if (this.state.selectedCheckboxes.length === 5) {
            this.setState({
                enabledCheckboxList: [],
                enabledCheckedCheckboxList: [],
                disabledCheckboxList: []
            }, () => {
                this.setState({
                    enabledCheckboxList: [],
                    enabledCheckedCheckboxList: checkboxList,
                    disabledCheckboxList: totalOptions
                })
            });
        } else {
            this.setState({
                enabledCheckboxList: [],
                enabledCheckedCheckboxList: [],
                disabledCheckboxList: []
            }, () => {
                this.setState({
                    enabledCheckboxList: totalOptions,
                    enabledCheckedCheckboxList: checkboxList,
                    disabledCheckboxList: []
                })
            });
        }
    }

    handleChange = (value) => {
        this.setState({
            enabledCheckboxList: [],
            enabledCheckedCheckboxList: [],
            disabledCheckboxList: [],
            selectedCheckboxes: [],
            selectValue: value
        }, () => {
            this.setState({
                filterCheckboxOptions: this.state.allListTags[value.label],
                enabledCheckboxList: this.state.allListTags[value.label],
                selectedTagKeyfromSelect: value
            })
        });
    }

    onSearch = e => {
        this.setState({
            columnoptions: this.state.columnoptions
        }, () => {
            let obj = {};
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": this.state.filtertags,
                            "Service": "All",
                            "Frequency": "Monthly",
                            "Range": `${moment()
                                .subtract(6, 'months')
                                .format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
        })
    };

    updatebudgetData() {
        const key = "Name";
        const val = event.target.value;
        this.setState(prevState => {
            let budgetPayload = Object.assign({}, prevState.budgetPayload);
            budgetPayload[key] = val;
            budgetPayload.Range = this.state.range;
            return { budgetPayload }
        });
        console.log("budgetPayload", this.state.budgetPayload);
        this.setState({
            nameempty: false
        })
    }

    updatebudgetAmountData() {
        const key = "Amount";
        const val = event.target.value;
        this.setState(prevState => {
            let budgetPayload = Object.assign({}, prevState.budgetPayload);
            budgetPayload[key] = val;
            return { budgetPayload }
        });
        console.log("budgetPayload", this.state.budgetPayload);
    }

    updatebudgetemailData() {
        const key = "Email";
        const val = event.target.value;
        this.setState(prevState => {
            let budgetPayload = Object.assign({}, prevState.budgetPayload);
            budgetPayload[key] = val;
            return { budgetPayload }
        });
        console.log("budgetPayload email", this.state.budgetPayload);
    }

    onCreateBudgetSubmit() {
        event.preventDefault();
        let budgetData = {
            "Request": {
                "Metadata": {
                    "Service": "Billing",
                    "Version": "1.0",
                    "Provider": "AWS",
                    "Account": `${this.state.selectedAccount}`,
                },
                "Parameters": {
                    "Content": this.state.budgetPayload
                }
            }
        };

        console.log("add", this.state.budgetPayload);
        this.setState({
            errormess: true
        })
        if (this.state.budgetPayload.Name != '') {
            this.props.CreateBudget(budgetData);
        } else {
            this.setState({
                nameempty: true,
                errormess: false
            })
        }

    }

    handlebudgetChange = (selectedOption) => {
        this.setState({
            currentSelectedBudget: selectedOption,
            checkstatus: true
        })
        const key = 'budget';
        const val = selectedOption.value;
        this.setState(prevState => {
            let budgetPayload = Object.assign({}, prevState.budgetPayload);
            budgetPayload[key] = val;
            return { budgetPayload }
        });
        console.log("it", this.state.budgetPayload, selectedOption, key, val)
    }

    handleTemplateTypeChange = (selectedOption) => {
        this.setState({
            currentSelectedTemplateType: selectedOption
        })
        const key = 'Template';
        const val = selectedOption.value;
        this.setState({
            typeSelection: val
        });
        console.log("tssss", selectedOption.value)
    }
    handleReportFrequencyChange = (selectedOption) => {
        this.setState({
            currentSelectedFrequencyType: selectedOption
        })
        const key = 'Frequency';
        const val = selectedOption.value;
        this.setState(prevState => {
            let budgetPayload = Object.assign({}, prevState.budgetPayload);
            budgetPayload[key] = val;
            return { budgetPayload }
        });
        console.log("it", this.state.budgetPayload, selectedOption, key, val)
    }


    handleNameChange = (selectedOption) => {
        this.setState({
            currentSelectedName: selectedOption
        })
        const key = 'Name';
        const val = selectedOption.value;

        this.setState(prevState => {
            let budgetPayload = Object.assign({}, prevState.budgetPayload);
            budgetPayload[key] = val;
            return { budgetPayload }
        });
        console.log("it", this.state.budgetPayload, selectedOption, key, val)
    }

    onSixMonthButtonClickCos = () => {
        let r = `${moment().subtract(6, 'months').format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
        this.setState({
            frequency: "Monthly",
            range: r,
            timeP: "Last 6 Months"
        });

        this.defaultValuesChanges();
    };

    // apexApiLoad = () =>{

    //     console.log(this.state.stackedColData + 'apex api')
    //     // const chartdata1a = []
    //     // this.setState({
    //     //     options07:{
    //     //         chart:{id:'apex-chart'},
    //     //         xaxis:{
    //     //             categories:[]
    //     //         },
    //     //         series:{
    //     //             name:'teama', 
    //     //             data:chartdata1a
    //     //         } 
    //     //     }
    //     // })
    // }

    componentWillMount() {
        if (!localStorage.getItem('userrole')) {
            this.props.history.push('/login');
        }
    }

    componentDidMount() {

        let billingData = {
            "Request": {
                "Metadata": {
                    "Service": "Billing",
                    "Version": "1.0",
                    "Provider": "AWS",
                    "Account": `${this.state.selectedAccount}`,
                },
                "Parameters": {
                    "Content": {
                        "Tags": [{
                            "*": ["*"]
                        }],
                        "Group": "*",
                        "Service": "All",
                        "Frequency": this.state.frequency,
                        "Range": this.state.range
                        // "Range": this.state.rangeCurrent,
                    }
                }
            }
        };
        let cosData = {
            "Request": {
                "Metadata": {
                    "Service": "Billing",
                    "Version": "1.0",
                    "Provider": "AWS",
                    "Account": `${this.state.selectedAccount}`,
                },
                "Parameters": {
                    "Content": {
                        "Tags": [{
                            "*": ["*"]
                        }],
                        "Group": "*",
                        "Service": "All",
                        "Frequency": this.state.frequency,
                         "Range": `${moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`,
                        //"Range": `${moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').add(1, 'days').format('YYYY-MM-DD')}`
                    }
                }
            }
        };
        // let cosDataLastTwoMonths = {
        //     "Request": {
        //         "Metadata": {
        //             "Service": "Billing",
        //             "Version": "1.0",
        //             "Provider": "AWS",
        //             "Account": `${this.state.selectedAccount}`,
        //         },
        //         "Parameters": {
        //             "Content": {
        //                 "Tags": [{
        //                     "*": ["*"]
        //                 }],
        //                 "Group": "*",
        //                 "Service": "All",
        //                 "Frequency": this.state.frequency,
        //                 "Range": `${moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')}`
        //             }
        //         }
        //     }
        // };
        // console.log(JSON.stringify(cosDataLastTwoMonths) + 'cos data 2months')


        // this.props.searchCostByTag(billingData);
        this.props.costOnService(cosData);
        // this.props.costOnService(cosDataLastTwoMonths);

        // this.props.costOnService(cosDataLastTwoMonths);
        // this.loadInitialFilters();
        this.props.getListAllTags(this.state.selectedAccount);
        this.isBarActive = true;
        this.isLineActive = false;
        this.isPieActive = false;

        const chartdata1 = [];
        console.log('comp didmount' + JSON.stringify(billingData))
        // const charttotalcost = [];
        // const chartlabel = [];
        this.onCurrentMonthButtonClick();

    }

    componentWillReceiveProps(props) {
        let cosDataLastTwoMonths = props.costByTagDetails.costByTagDetails.Response
        let costData = props.costByTagDetails.costByTagDetails.Response;
        let totalcost = 0;
        let chartarr = [["Cost", "Billing"]];
        let lab2Cost = [];
        let lab2Service = [];
        let previousMonCosService = [];
        let previousMonCosCost = [];
        let lastTwoMonCosCost = []
        let cosArray = [];
        let splitArrayCos = []
        // console.log(JSON.stringify(cosDataLastTwoMonths) +'cosDataLastTwoMonths')
        if (costData) {
            let expiryy = props.costByTagDetails.costByTagDetails.Response;
            console.log("Expired expiryy", expiryy);
            this.setState({
                Expired: expiryy
            });
            console.log("Expired", this.state.Expired);

            // if(cosDataLastTwoMonths && this.props.cosDetails.cosSuccess){

            //     let cos2 = props.cosDetails.cosDetails.Response.Output.Content.CostOnService;
            //     console.log(JSON.stringify(cos2)+'cos2')
            // //    cos2.forEach((item) => {
            // //     if((item.Service === 'Amazon Elastic Container Service for Kubernetes'
            // //     || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
            // //     || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')){

            // //         if(this.state.cos2MonthsTableData){
            // //             this.state.cos2MonthsTableData.push({
            // //                 'labelCosz': item.Service,
            // //                 'CostCosz': item.Cost
            // //             })
            // //             lab2Cost.push(item.Cost)
            // //             lab2Service.push(item.Service)
            // //         }
            // //         // if(this.state.cosTableData){
            // //         //     // this.state.cosTableData.push({
            // //         //     //     'labelCos2': item.Service,
            // //         //     //     'CostCos2': item.Cost
            // //         //     // })

            // //         // }
            // //         // this.setState({
            // //         //     cosTotalTableData:[{ 
            // //         //         // labelCos:[],
            // //         //         // CostCos:[],
            // //         //         labelCos2:lab2Cost,
            // //         //         CostCos2:lab2Service
            // //         //     }]
            // //         // })

            // //         // console.log(JSON.stringify(this.state.cosTotalTableData )+'cos22')
            // //     }

            // //    }) 
            // }

            if (costData && this.props.cosDetails.cosSuccess) {
                let totalcostusage = props.cosDetails.cosDetails.Response.Output.Content.TotalAmount;
                let tcos = parseFloat(totalcostusage).toFixed(2);
                let serviceCount = props.cosDetails.cosDetails.Response.Output.Content.ServiceCount;
                let cos = props.cosDetails.cosDetails.Response.Output.Content.CostOnService;
                let avgcos = (tcos / 6).toFixed(2);
                let budData = props.cosDetails.cosDetails.Response.Output.Content.Budgets;
                console.log("budData" + JSON.stringify(budData));
                // console.log("cos ser"+JSON.stringify(cos.service) + "cost"+JSON.stringify(cos.cost))
                // console.log(JSON.stringify(totalcostusage)+'totalcost')
                // console.log(JSON.stringify(cos)+'cosz')




                for (let k = 0; k < cos.length; k++) {
                    // if(cos[k].TimeTaken === '2023-07-01 - 2023-07-31'){
                    //     console.log(JSON.stringify(cos[k])+'july cos')
                    // }
                    let preMonthcos = `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')}`
                    let twoMonthAgocos = `${moment().subtract(2, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(2, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                    // console.log(cos[k].TimeTaken +'cos timetaken')
                    // console.log(twoMonthAgocos +'twoMonthAgocos')
                    // console.log(preMonthcos +'pre month cos')
                    let item = cos[k];
                    if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                        || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                        || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {


                        this.state.cosTotalTableData.push({
                            'labelCos': item.Service,
                            'costCos': item.Cost,
                            'range': item.TimeTaken
                        })

                        if (cos[k].TimeTaken == preMonthcos) {
                            //    let k=true
                            let data1 = cos[k]

                            console.log(JSON.stringify(cos[k]) + 'july cos')

                            if (this.state.cosTableData === '' || item.Service != undefined) {

                                this.state.cosTableData.push({
                                    'labelCos': item.Service,
                                    'costCos': item.Cost,
                                    'range': item.TimeTaken
                                })

                                previousMonCosService.push(item.Service)
                                previousMonCosCost.push(parseInt(item.Cost))
                            }



                        }
                        if (cos[k].TimeTaken == twoMonthAgocos) {
                            if (this.state.cosTableDataPreMonth === '' || item.Service != undefined) {
                                // this.setState({
                                //     cosTableDataPreMonth:[]
                                // })
                                this.state.cosTableDataPreMonth.push({
                                    'labelCos2': item.Service,
                                    'costCos2': item.Cost,
                                    'range2': item.TimeTaken
                                })
                                lastTwoMonCosCost.push(parseInt(item.Cost))
                            }
                            // this.state.cosTotalTableData.lastTwoMonth.push({
                            //     'labelCos': item.Service,
                            //  'CostCos': item.Cost,
                            //  'range':item.TimeTaken
                            // })

                            console.log(JSON.stringify(cos[k]) + 'june cos')
                            console.log(this.state.cosTableDataPreMonth)
                            console.log(lastTwoMonCosCost + 'cost pre 2')
                        }



                    }


                }
                cosArray.push({
                    'labelCos': previousMonCosService,
                    'cosCost': previousMonCosCost,
                    'labelCos2': lastTwoMonCosCost
                })

                console.log(JSON.stringify(cosArray) + 'cosArray')



                //  console.log(this.state.cosTotalTableData)
                // console.log(JSON.stringify(cos) + 'cos dataz')
                if (this.state.budgetDataList == '') {
                    budData.forEach((item) => {
                        if (item.BudgetName != undefined) {
                            this.state.budgetDataList.push({
                                "BudgetName": item.BudgetName,
                                "BudgetLimit": item.BudgetLimit.amount,
                                "BudgetSpend": item.BudgetSpend.actualSpend.amount,
                                "BudgetSpendUnit": item.BudgetSpend.actualSpend.unit,
                                "BudgetForcast": item.BudgetSpend.forecastedSpend.amount,
                                "BudgetForcastUnit": item.BudgetSpend.forecastedSpend.unit,
                                "Budgeted": item.BudgetLimit.amount,
                                "BudgetedUnit": item.BudgetLimit.unit,

                                "BudgetType": item.BudgetSpend.forecastedSpend.amount,
                                "BudgetPlannedLimit": item.BudgetPlannedLimit,
                                "BudgetCosttype": item.BudgetCosttype.includeTax
                            });
                        }
                        // console.log(JSON.stringify(this.state.budgetDataList) + 'bud data list')
                    });
                }
                this.setState({
                    totalcostusage: tcos,
                    serviceCount: serviceCount,
                    avgcos: avgcos,
                })
                let sarr = ['Month'];
                let scost = ['May 23'];

                //filter for others
                const nonFilterObjects = Object.fromEntries(Object.entries(cos).filter(([key, value]) => value.Service != 'Amazon Elastic Container Service for Kubernetes'
                    && value.Service != 'EC2 - Other' && value.Service != 'Directory Service'
                    && value.Service != 'Amazon Elastic Load Balancing' && value.Service != 'AmazonCloudWatch' && value.Service != 'Amazon Relational Database Service' && value.Service != 'Amazon Redshift')
                );
                const costs = Object.values(nonFilterObjects).map(item => item.Cost);
                let totalCost = costs.reduce((sum, cost) => parseFloat(sum) + parseFloat(cost), 0);

                const firstValue = "Other";
                let arr1 = [];
                totalCost = +totalCost;
                arr1.unshift(firstValue);
                arr1.push(totalCost);

                if (this.state.newtry.length === 0) {
                    this.state.newtry.push(sarr, scost);
                    this.state.newtry[0].push("Others");
                    this.state.newtry[1].push(totalCost);
                    console.log(this.state.newtry + 'newtry')
                }

                if (this.state.CosGraphBarX.length === 0) {

                    cos.forEach((item) => {
                        let CurrentMonthCosMOd1 = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(0, 'months').format('YYYY-MM-DD')}`
                        // if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                        //     || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                        //     || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {
                        //     if (item.TimeTaken == CurrentMonthCosMOd1 && item.Service != undefined) {

                        //         this.state.CosGraphBarX.push(item.Service)
                        //         // this.state.CosGraphBarY.push(parseInt(item.Cost))

                        //     }
                        // }
                        let c = item.Service
                        if (item.TimeTaken == CurrentMonthCosMOd1) {
                            this.state.CosGraphBarX.push(item.Cost)
                        }


                        // console.log(CurrentMonthCosMOd1+'aug ')
                        console.log(CurrentMonthCosMOd1 + 'cos graph bar' + JSON.stringify(this.state.CosGraphBarX) + 'ser===' + JSON.stringify(this.state.CosGraphBarX) + 'length' + this.state.CosGraphBarX.length)
                    })

                }
                if (this.state.cosRechartBarCurrentMonth.length === 0) {
                    cos.forEach((item) => {
                        let CurrentMonthCosMOd2 = `${moment().subtract(6, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(6, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                        if (item.TimeTaken == CurrentMonthCosMOd2) {
                            this.state.cosRechartBarCurrentMonth.push({
                                "labelCos": item.Service,
                                "cosCost": parseInt(item.Cost),
                                "range": item.TimeTaken
                            })

                        }
                        console.log(CurrentMonthCosMOd2 + 'rechart Current month')
                    })
                    console.log(JSON.stringify(this.state.cosRechartBarCurrentMonth) + 'pree months data')

                }
                if (this.state.cosRechartPreMonth.length === 0) {
                    // let res ={t:`${moment().subtract(1,'months').format('MMM YYYY')}`}
                    cos.forEach((item) => {
                        let CurrentMonthCosMOdre2 = `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                        if (item.TimeTaken == CurrentMonthCosMOdre2) {
                            // Object.assign(res, { [item.Service]: item.Cost })

                            this.state.cosRechartPreMonth.push({
                                "labelCos": item.Service,
                                "cosCost": parseInt(item.Cost),
                                "range": item.TimeTaken
                            })

                        }

                        console.log(CurrentMonthCosMOdre2 + 'rechart premonth')
                    })
                    console.log(JSON.stringify(this.state.cosRechartPreMonth) + 'pree months data')

                }
                if (this.state.cosRechartLast3rdMonth.length === 0) {
                    cos.forEach((item) => {
                        let CurrentMonthCosre3 = `${moment().subtract(2, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(2, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                        if (item.TimeTaken == CurrentMonthCosre3) {
                            this.state.cosRechartLast3rdMonth.push({
                                "labelCos": item.Service,
                                "cosCost": parseInt(item.Cost),
                                "range": item.TimeTaken
                            })

                        }
                        console.log(CurrentMonthCosre3 + 'rechart 3rdmonth')
                    })
                    console.log(JSON.stringify(this.state.cosRechartLast3rdMonth) + '3rd months data')

                }
                if (this.state.cosRechartLast4thMonth.length === 0) {
                    cos.forEach((item) => {
                        let CurrentMonthCosre4 = `${moment().subtract(3, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(3, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                        if (item.TimeTaken == CurrentMonthCosre4) {
                            this.state.cosRechartLast4thMonth.push({
                                "labelCos": item.Service,
                                "cosCost": parseInt(item.Cost),
                                "range": item.TimeTaken
                            })

                        }
                        console.log(CurrentMonthCosre4 + 'rechart 4thmonth')
                    })
                    console.log(JSON.stringify(this.state.cosRechartLast4thMonth) + '4th months data')


                }
                if (this.state.cosRechartLast5thMonth.length === 0) {
                    cos.forEach((item) => {
                        let CurrentMonthCosre5 = `${moment().subtract(4, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(4, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                        if (item.TimeTaken == CurrentMonthCosre5) {
                            this.state.cosRechartLast5thMonth.push({
                                "labelCos": item.Service,
                                "cosCost": parseInt(item.Cost),
                                "range": item.TimeTaken
                            })

                        }
                        console.log(CurrentMonthCosre5 + 'rechart 5thmonth')
                    })
                    console.log(JSON.stringify(this.state.cosRechartLast5thMonth) + '5th months data')

                }
                if (this.state.cosRechartLast6thMonth.length === 0) {
                    cos.forEach((item) => {
                        let CurrentMonthCosre6 = `${moment().subtract(5, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(5, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
                        if (item.TimeTaken == CurrentMonthCosre6) {
                            this.state.cosRechartLast6thMonth.push({
                                "labelCos": item.Service,
                                "cosCost": parseInt(item.Cost),
                                "range": item.TimeTaken
                            })

                        }
                        console.log(CurrentMonthCosre6 + 'rechart 6thmonth')
                    })
                    console.log(JSON.stringify(this.state.cosRechartLast6thMonth) + '6th months data')

                }

                //   this.setState({
                //                 cosRechartData:[{t:`${moment().format('MMM YYYY')}`,...this.state.cosRechartPreMonth},
                //                 {t:`${moment().subtract(1,'months').format('MMM YYYY')}`,...this.state.cosRechartLast3rdMonth}
                //             ]
                //             })
                //             console.log('rechart data'+JSON.stringify(this.state.cosRechartData))
                // if(this.state.cosRechartData.length === 0){
                //     this.state.cosRechartData.push(
                //         {t:`${moment().subtract(1,'months').format('MMM YYYY')}`,...this.state.cosRechartPreMonth},
                //         {t:`${moment().subtract(2,'months').format('MMM YYYY')}`,...this.state.cosRechartLast3rdMonth}

                //     )
                //     console.log('rechart data'+JSON.stringify(this.state.cosRechartData))
                // }
                if (this.state.CosGraphBarXPreMonth.length === 0) {

                    cos.forEach((item) => {
                        let CurrentMonthCosMOd2 = `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`

                        if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                            || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                            || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {
                            if (item.TimeTaken == CurrentMonthCosMOd2 && item.Service != undefined) {

                                this.state.CosGraphBarXPreMonth.push(parseInt(item.Cost))
                                this.state.CosGraphBarYPreMonth.push(item.Service)

                                // this.state.CosGraphBarY.push(parseInt(item.Cost) )

                            }
                        }

                        // if (item.TimeTaken == CurrentMonthCosMOd2) {
                        //     this.state.CosGraphBarXPreMonth.push(item.Service)

                        // }

                        console.log('preeee' + CurrentMonthCosMOd2 + 'ser===' + JSON.stringify(this.state.CosGraphBarXPreMonth) + 'length' + this.state.CosGraphBarYPreMonth)
                    })

                }
                if (this.state.CosGraphBarXLast3rdMonth.length === 0) {

                    cos.forEach((item) => {
                        let CurrentMonthCosMOd3 = `${moment().subtract(2, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(2, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`

                        // if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                        //     || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                        //     || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {
                        //     if (item.TimeTaken == CurrentMonthCosMOd3 && item.Service != undefined) {

                        //         this.state.CosGraphBarXLast3rdMonth.push(parseInt(item.Cost))
                        //         // this.state.CosGraphBarY.push(parseInt(item.Cost) )

                        //     }
                        // }
                        if (item.TimeTaken == CurrentMonthCosMOd3) {
                            this.state.CosGraphBarXLast3rdMonth.push(item.Service)

                        }

                        console.log('3rd coss' + CurrentMonthCosMOd3 + 'ser===' + JSON.stringify(this.state.CosGraphBarXLast3rdMonth) + 'length' + this.state.CosGraphBarXLast3rdMonth.length)
                    })

                }
                if (this.state.CosGraphBarXLast4thMonth.length === 0) {

                    cos.forEach((item) => {
                        let CurrentMonthCosMOd4 = `${moment().subtract(3, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(3, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`

                        // if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                        //     || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                        //     || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {
                        //     if (item.TimeTaken == CurrentMonthCosMOd4 && item.Service != undefined) {

                        //         this.state.CosGraphBarXLast4thMonth.push(parseInt(item.Cost))
                        //         // this.state.CosGraphBarY.push(parseInt(item.Cost) )

                        //     }
                        // }
                        if (item.TimeTaken == CurrentMonthCosMOd4) {
                            this.state.CosGraphBarXLast4thMonth.push(item.Service)

                        }

                        console.log('4th coss' + CurrentMonthCosMOd4 + 'ser===' + JSON.stringify(this.state.CosGraphBarXLast4thMonth) + 'length' + this.state.CosGraphBarXLast4thMonth.length)
                    })

                }
                if (this.state.CosGraphBarXLast5thMonth.length === 0) {

                    cos.forEach((item) => {
                        let CurrentMonthCosMOd5 = `${moment().subtract(4, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(4, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`

                        // if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                        //     || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                        //     || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {
                        //     if (item.TimeTaken == CurrentMonthCosMOd5 && item.Service != undefined) {

                        //         this.state.CosGraphBarXLast5thMonth.push(parseInt(item.Cost))
                        //         // this.state.CosGraphBarY.push(parseInt(item.Cost) )

                        //     }
                        // }
                        if (item.TimeTaken == CurrentMonthCosMOd5) {
                            this.state.CosGraphBarXLast5thMonth.push(item.Service)
                        }


                        console.log('5th coss' + CurrentMonthCosMOd5 + 'ser===' + JSON.stringify(this.state.CosGraphBarXLast5thMonth) + 'length' + this.state.CosGraphBarXLast5thMonth.length)
                    })

                }
                if (this.state.CosGraphBarXLast6thMonth.length === 0) {

                    cos.forEach((item) => {
                        let CurrentMonthCosMOd6 = `${moment().subtract(5, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(5, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`

                        // if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                        //     || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                        //     || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {
                        //     if (item.TimeTaken == CurrentMonthCosMOd6 && item.Service != undefined) {

                        //         this.state.CosGraphBarXLast6thMonth.push(parseInt(item.Cost))
                        //         // this.state.CosGraphBarY.push(parseInt(item.Cost) )

                        //     }
                        // }
                        if (item.TimeTaken == CurrentMonthCosMOd6) {
                            this.state.CosGraphBarXLast6thMonth.push(item.Service)

                        }
                        console.log('6th coss' + CurrentMonthCosMOd6 + 'ser===' + JSON.stringify(this.state.CosGraphBarXLast6thMonth) + 'length' + this.state.CosGraphBarXLast6thMonth.length)
                    })

                }
                if (this.state.cosDataModified.length === 0) {

                    cos.forEach((item) => {

                        if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                            || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                            || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {


                            if (item.Service != undefined) {
                                this.state.cosDataModified.push({
                                    'labelCos': item.Service,
                                    'cosCost': parseFloat(item.Cost).toFixed(2),
                                    'range': item.TimeTaken
                                })
                            }


                        }
                    })
                    console.log('mod cos' + JSON.stringify(this.state.cosDataModified))
                }

                if (this.state.checkValues.length === 0) {
                    let ini = ['Service', 'Total Cost'];
                    this.state.checkValues.push(ini);

                    // let previousMonCosServicefor = [];
                    // let previousMonCosCostfor = [];
                    console.log(JSON.stringify(this.state.checkValues) + 'check val')
                    cos.forEach((item) => {
                        if ((item.Service === 'Amazon Elastic Container Service for Kubernetes'
                            || item.Service === 'EC2 - Other' || item.Service === 'Directory Service'
                            || item.Service === 'Amazon Elastic Load Balancing' || item.Service === 'AmazonCloudWatch' || item.Service === 'Amazon Relational Database Service' || item.Service === 'Amazon Redshift')) {
                            let b = +item.Cost;
                            let arr = [];
                            let arrz = [];



                            arr.push(item.Service, b);
                            sarr.push(item.Service);
                            console.log("s ser", item.Service);
                            console.log(arr + 'arr cost')
                            scost.push(b);
                            this.state.checkValues.push(arr);

                            // this.state.cosDataModified.push({
                            //     ''
                            // })


                            console.log(JSON.stringify(this.state.cosTableData) + 'premonth')
                            console.log(JSON.stringify(item) + 'cos items')
                            // })
                            // console.log(JSON.stringify(this.state.cosTotalTableData )+ 'totalcos')
                            // arrz = previousMonCosCost.map((y)=>{
                            //     y.toFixed(2)
                            // })
                            //  for(obj of )
                        }

                    });
                    //  this.setState({
                    //     cosTotalTableData:[{ 
                    //         labelCos:previousMonCosService,
                    //         CostCos:previousMonCosCost,
                    //         labelCos2:lab2Cost,
                    //         CostCos2:lab2Service
                    //     }]
                    // })

                    console.log(previousMonCosService + 'ssss' + previousMonCosCost + 'oooo' + lab2Cost + lab2Service)
                    console.log(JSON.stringify(this.state.cosTableData) + 'cos 33')
                    console.log(JSON.stringify(this.state.cos2MonthsTableData) + 'kkkl')
                    // console.log(JSON.stringify(this.state.costab) + 'cos 33')

                    // for(let obj of previousMonCosService){
                    //     previousMonCosServicefor.push(obj)
                    //         // previousMonCosCost.push(obj.Cost)
                    //         // console.log(previousMonCosService + 'ssss'+ previousMonCosCost)
                    //  }
                    //  for(let obj of previousMonCosCost){
                    //     previousMonCosCostfor.push(obj)
                    //         // previousMonCosCost.push(obj.Cost)
                    //         // console.log(previousMonCosService + 'ssss'+ previousMonCosCost)
                    //  }
                    console.log('rrrr' + previousMonCosService)
                    // this.setState({
                    //     cosTotalTableData:[{ 
                    //         labelCos:[...previousMonCosService],
                    //         costCos:[...previousMonCosCost],
                    //         costTwoCos:[...lastTwoMonCosCost],


                    //     }]

                    // })

                    this.setState({
                        seriesCosPie: this.state.CosGraphBarXPreMonth,
                        optionsCosPie: {
                            colors: ['#0071fb', '#003f5c', '#bc5090', '#ff6361', '#ffa600', '#5758d0'],
                            chart: {
                                width: 380,
                                type: 'pie',
                            },

                            //   labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                            labels: this.state.CosGraphBarYPreMonth,
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    // chart: {
                                    //   width: 200
                                    // },
                                    legend: {
                                        position: 'bottom'
                                    },
                                    xaxis: {
                                        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                                        // categories: previousMonCosService,
                                        title: {
                                            text: `${moment().subtract(1, 'month').format('MMM YYYY')}`
                                        },
                                    },

                                }
                            }]
                        },

                        pieChartCos: {
                            // series: [44, 55, 13, 43, 22],
                            series: this.state.CosGraphBarYPreMonth,
                            options: {
                                chart: {
                                    width: 380,
                                    type: 'pie',
                                },
                                //   labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                                labels: this.state.CosGraphBarXPreMonth,
                                responsive: [{
                                    breakpoint: 480,
                                    options: {
                                        chart: {
                                            width: 200
                                        },
                                        legend: {
                                            position: 'bottom'
                                        }
                                    }
                                }]
                            }
                        },
                        optionBarCos: {
                            // colors : ['#0071fb','#4d3a96', '#4576b5'],
                            colors: ['#0071fb', '#003f5c', '#bc5090', '#ff6361', '#ffa600', '#5758d0'],

                            chart: {
                                id: "basic-bar",
                                type: 'bar',
                                stacked: true,
                                // stackType: "100%"
                            },
                            plotOptions: {
                                bar: {
                                    // distributed: true,
                                    horizontal: false,
                                    dataLabels: {
                                        position: 'bottom'
                                    },
                                    // barHeight: '85%',
                                    // offsetX: 30
                                },
                                line: {
                                    // distributed: true,
                                    horizontal: false,
                                    dataLabels: {
                                        position: 'bottom'
                                    },
                                    // barHeight: '85%',
                                    // offsetX: 30
                                }
                            },
                            xaxis: {
                                // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                                categories: this.state.CosGraphBarX,
                                title: {
                                    text: `Stacked Data of Cost of Services`
                                },
                                // labels: {
                                //     show: false,
                                //     // rotate: 0
                                //   }
                                // label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                // categories:[...`${this.state.optionBarCost}`]
                                // categories:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                            },
                            yaxis: { text: 'billing' }
                        },
                        seriesBarCos: [{
                            name: `${moment().subtract(0, 'month').format('MMM YYYY')}`,
                            // data: [11,22,33,44,55,66,77,88,99,100]
                            data: this.state.CosGraphBarY,
                            // data: [...`${this.state.seriesBarCost}`]
                            // data: [...barCostseries]
                        }, {
                            name: `${moment().subtract(1, 'month').format('MMM YYYY')}`,
                            data: this.state.CosGraphBarXPreMonth,
                        },
                        {
                            name: `${moment().subtract(2, 'month').format('MMM YYYY')}`,
                            data: this.state.CosGraphBarXLast3rdMonth
                        }, {
                            name: `${moment().subtract(3, 'month').format('MMM YYYY')}`,
                            data: this.state.CosGraphBarXLast4thMonth
                        },
                        {
                            name: `${moment().subtract(4, 'month').format('MMM YYYY')}`,
                            data: this.state.CosGraphBarXLast5thMonth
                        },
                        {
                            name: `${moment().subtract(5, 'month').format('MMM YYYY')}`,
                            data: this.state.CosGraphBarXLast6thMonth
                        }
                        ],

                        optionLineCos: {
                            // colors : ['#0071fb','#4d3a96', '#4576b5'],
                            colors: ['#0071fb', '#003f5c', '#bc5090', '#ff6361', '#ffa600', '#5758d0'],

                            chart: {
                                id: "basic-bar"
                            },
                            plotOptions: {
                                bar: {
                                    distributed: true,
                                    horizontal: false,
                                    dataLabels: {
                                        position: 'bottom'
                                    },
                                    // barHeight: '85%',
                                    // offsetX: 30
                                },
                                line: {
                                    distributed: true,
                                    horizontal: false,
                                    dataLabels: {
                                        position: 'bottom'
                                    },
                                    // barHeight: '85%',
                                    // offsetX: 30
                                }
                            },
                            xaxis: {
                                // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                                categories: this.state.CosGraphBarYPreMonth,
                                title: {
                                    text: 'Stacked Data of Cost of Services'
                                },
                                labels: {
                                    // show: false,
                                    // rotate: 0
                                    //     formatter: function(value) {
                                    //         return value;    
                                    //  }
                                }
                                // label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                // categories:[...`${this.state.optionBarCost}`]
                                // categories:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                            },
                            yaxis: {
                                text: 'billing',
                                // opposite: true,
                                // labels: {
                                //     maxWidth: "auto",
                                //     style: {
                                //         colors: ["#BEBFCB"],
                                //         fontSize: "40px"
                                //     }
                                // }  
                            },


                        },
                        seriesLineCos: [{
                            name: `${moment().subtract(1, 'month').format('MMM YYYY')}`,
                            // data: [11,22,33,44,55,66,77,88,99,100]
                            data: this.state.CosGraphBarXPreMonth,
                            // data: [...`${this.state.seriesBarCost}`]
                            // data: [...barCostseries]
                        }],
                    })
                    this.state.checkValues.push(arr1);
                }

            }
        }
        let savingData = 0;

        if (costData && this.props.costByTagDetails.costByTagInProgress) {

            if (props.costByTagDetails.costByTagDetails.Response.Output.Content.EstimatedSavingCost) {
                let RecommendedData = '0';
                let RecommendedDetails = '';
                if (props.costByTagDetails.costByTagDetails.Response.Output.Content.EstimatedSavingCost.EstiCost) {
                    RecommendedData = props.costByTagDetails.costByTagDetails.Response.Output.Content.EstimatedSavingCost.EstiCost.estimatedTotalMonthlySavingsAmount || '0';
                    RecommendedDetails = props.costByTagDetails.costByTagDetails.Response.Output.Content.EstimatedSavingCost;
                    savingData = parseFloat(RecommendedData).toFixed(2);
                    this.state.savingDataList.push({
                        "instanceid": RecommendedDetails.ResourceID,
                        "saving": parseFloat(RecommendedDetails.EstimatedCost).toFixed(2),
                        "accountid": RecommendedDetails.AccountID,
                        "instancetype": RecommendedDetails.ResourceDetails,
                        "Recommendedinstancetype": RecommendedDetails.RecommendedResourceDetail,
                        "cpu": parseFloat(RecommendedDetails.ResourceUtilization).toFixed(2)
                    });
                } else {
                    RecommendedData = '0';
                    savingData = parseFloat(RecommendedData).toFixed(2);

                }


            }
            let costData = props.costByTagDetails.costByTagDetails.Response.Output.Content.Billing;
            let forecastTime = props.costByTagDetails.costByTagDetails.Response.Output.Content.Forecast.Timeperiod;
            let sixMonthVar = 6;
            // let costDataMonth = `${moment().subtract(6, 'months').format('MMM YYYY')}`;
            let costDataMonth = `${moment().subtract(sixMonthVar, 'months').format('MMM YYYY')}`;

            let forecostChange = forecastTime && parseFloat(forecastTime[0].meanValue).toFixed(2) || '0';
            let arr = [['Cost']];
            let arrMonth = [['Cost']];

            // This is for total cost. When no filters it means its an onload call
            let aar = []
            let barCostOption = []
            let barCostseries = []
            if (!this.state.selectedCheckboxes.length) {
                let monthToDateCost = this.calculateMonthToDateCost(costData);
                let prevMonthCost = this.calculatePrevMonthCost(costData);
                let avgMonthlyCost = this.calculateAvgMonthCost(costData);
                let percentChange = this.calculatePercentageChange(monthToDateCost, prevMonthCost);
                let ymp = [];

                let aarData = ['Cost', 'Total Cost']
                let bothAar = []


                // console.log(JSON.stringify(costData.total) + 'dddd')
                // ymp.forEach((x)=>{
                //     x.push(costData.timePeriod.start)
                // })
                // console.log('ssss'+ JSON.stringify(billinfo.timePeriod.start.format('MMM YYYY')))

                costData.forEach((billinfo) => {
                    // console.log(JSON.stringify(billinfo.timePeriod.start) + 'bbbb')
                    if (Object.keys(billinfo.total).length) {
                        let arrCheck = []
                        let timeLength = billinfo.timePeriod.start;
                        let timeLength1 = billinfo.timePeriod.end;

                        totalcost += parseFloat(billinfo.total.UnblendedCost.amount);
                        arr.push([billinfo.timePeriod.start, parseFloat(billinfo.total.UnblendedCost.amount)]);
                        // arrMonth.push([ymp, parseFloat(billinfo.total.UnblendedCost.amount)])
                        // ymp.push(billinfo.timePeriod.start)
                        // if(timeLength.length == 4){
                        //     aar.push([ymp, parseFloat(billinfo.total.UnblendedCost.amount)])
                        //     console.log(aar+ 'aaaa')

                        // }
                        aar.push({ 'timestartz': timeLength, 'timeEndz': timeLength1, "dataz": parseFloat(billinfo.total.UnblendedCost.amount).toFixed(1) })
                        // aarData.push([timeLength:timeLength1])
                        // aar.push()

                        // for(let i=0;i<aar.length;i++){
                        //     for(let j=0;j<aarData.length;j++){
                        //         bothAar.push([aar[i],aarData[j]])
                        //     }
                        // }




                    }




                    // month_chart(6);
                });


                // for(let obj of aar){
                //     barCostOption.push(obj.timestartz)
                //     barCostseries.push(obj.dataz)
                // }
                // aar.forEach((obj)=>{
                //     barCostOption.push(obj.timestartz)
                //     barCostseries.push(obj.dataz)
                // })
                for (let i = 0; i < aar.length; i++) {
                    barCostOption.push(aar[i].timestartz)
                    barCostseries.push(aar[i].dataz)
                    console.log(JSON.stringify(aar) + 'mmsrz')
                }
                // barCostOption = aar.map((x)=>x.timestartz)
                // barCostseries = aar.map((x)=>x.dataz)
                console.log(barCostseries + 'llll' +barCostOption[1] + 'zzzz' + `${moment().subtract(2, 'months').startOf('month').format('MM-DD-YYYY')}`)
                // if(barCostOption)
                if (barCostseries.length == 3 && barCostOption[1] == `${moment().subtract(2, 'months').startOf('month').format('MM-DD-YYYY')}`) {
                    for (let i = 0; i < 3; i++) {
                        let dateFormat = moment().subtract(i + 1, 'months').format('MMM YYYY')
                        ymp.push(dateFormat)
                    }
                    let lmp = ymp.reverse()

                    // console.log(ymp.reverse()+'ymp')
                    this.setState(
                        {
                            optionBarCost: {
                                colors: ['#0071fb', '#4d3a96', '#4576b5'],
                                chart: {
                                    id: "basic-bar"
                                },
                                plotOptions: {
                                    bar: {
                                        horizontal: false,
                                        dataLabels: {
                                            position: 'bottom'
                                        },
                                        // offsetX: 30
                                    }
                                },
                                xaxis: {
                                    categories: barCostOption,
                                    // labels: {
                                    //     rotate: -45
                                    //   }

                                }
                                ,
                                xaxis: {
                                    categories: lmp,
                                    title: {
                                        text: 'Months'
                                    }
                                    // labels: {
                                    //     rotate: 0
                                    //   }

                                }
                            },
                            seriesBarCost: [{
                                name: "Months",
                                data: barCostseries

                            }],
                        }
                    )

                } else if (barCostseries.length == 6 && barCostOption[1] == `${moment().subtract(5, 'months').startOf('month').format('MM-DD-YYYY')}`) {
                    for (let i = 0; i < 6; i++) {
                        let dateFormat = moment().subtract(i + 1, 'months').format('MMM YYYY')
                        ymp.push(dateFormat)
                    }
                    let lmp = ymp.reverse()
                    this.setState(
                        {
                            optionBarCost: {
                                colors: ['#0071fb', '#4d3a96', '#4576b5'],
                                chart: {
                                    id: "basic-bar"
                                },
                                plotOptions: {
                                    bar: {
                                        horizontal: false,
                                        dataLabels: {
                                            position: 'bottom'
                                        },
                                        // offsetX: 30
                                    }
                                },
                                xaxis: {
                                    categories: barCostOption,
                                    // labels: {
                                    //     rotate: -45
                                    //   }

                                },
                                xaxis: {
                                    categories: lmp,
                                    title: {
                                        text: 'Months'
                                    }
                                    // labels: {
                                    //     rotate: 0
                                    //   }

                                }
                            },
                            seriesBarCost: [{
                                name: "Months",
                                data: barCostseries

                            }],
                        }
                    )
                } else {
                    this.setState(
                        {
                            optionBarCost: {
                                colors: ['#0071fb', '#4d3a96', '#4576b5'],
                                chart: {
                                    id: "basic-bar"
                                },
                                plotOptions: {
                                    bar: {
                                        horizontal: false,
                                        dataLabels: {
                                            position: 'bottom'
                                        },
                                        // offsetX: 30
                                    }
                                },
                                xaxis: {
                                    categories: barCostOption,
                                    title: {
                                        text: 'Days'
                                    }
                                    // labels: {
                                    //     rotate: -45
                                    //   }

                                }
                            },
                            yaxis: {
                                show: true,
                                title: {
                                    text: 'undefined',
                                }
                            },
                            seriesBarCost: [{
                                name: "Days",
                                data: barCostseries

                            }],
                        }
                    )
                }

                // aar.forEach((x,i)=>{
                //     let s=3
                //     aarData.push([`${moment().subtract(s-i,'months').format('MMM YY')}`],x.dataz)
                //     this.setState(
                //        {MonthlyColData: aarData} 
                //     )
                //    })
                // aar.forEach((x,i)=>{
                //     let s=3
                //     barCostOption.push([x.dataz])
                //     barCostseries.push([x.timestartz])

                //     // this.state.MonthlyColData.push([aarData])
                //    })
                //    this.setState(
                //     {MonthlyColData: aarData,
                //      optionBarCost:[...barCostOption],
                //      seriesBarCost:[...barCostseries]
                //    } 
                //  )
                // console.log(barCostseries+'sync data ser'+`${this.state.optionBarCost}`)
                // console.log(barCostOption+'sync data state opt'+`${this.state.seriesBarCost}`)

                // if(aar.length == 4){
                //     // aarData.push([ymp,parseFloat(billinfo.total.UnblendedCost.amount)])
                //     // console.log(aarData+'bbbb')
                //     ymp.forEach((x)=>{
                //         totalcost += parseFloat(billinfo.total.UnblendedCost.amount);
                //         aarData.push([x,parseFloat(billinfo.total.UnblendedCost.amount)]) 
                //     })
                //    }
                //    console.log(aarData + 'bbbb')

                this.setState({
                    savingDataDetails: [...this.state.savingDataList],
                    budgetDataDetails: [...this.state.budgetDataList],
                    savingData: savingData,
                    percentChange: percentChange,
                    forecostChange: forecostChange,
                    prevMonthCost: prevMonthCost,
                    monthtodatecost: monthToDateCost,
                    chartTotalCost: Math.floor(parseInt(monthToDateCost) + parseInt(prevMonthCost)),
                    totalCost: totalcost
                });
                arr[0].push(`Total Cost ($${totalcost.toFixed(2)})`);
            }

            if (this.state.selectedCheckboxes.length && this.state.selectedGroup === '*') {
                totalcost = 0;
                costData.forEach((billinfo) => {
                    if (Object.keys(billinfo.total).length) {
                        totalcost += parseFloat(billinfo.total.UnblendedCost.amount);
                        arr.push([billinfo.timePeriod.start, parseFloat(billinfo.total.UnblendedCost.amount)]);
                    }
                });
                arr[0].push(`Total Cost ($${totalcost.toFixed(2)})`);
            } else if (this.state.selectedCheckboxes.length > 0 && this.state.selectedGroup !== '*') {
                costData.forEach((billinfo) => {
                    if (billinfo.groups.length) {
                        let samparr = [billinfo.timePeriod.start];
                        billinfo.groups.forEach((group) => {
                            samparr.push(parseFloat(group.metrics.UnblendedCost.amount));
                        });
                        if (samparr.length < this.state.selectedCheckboxes.length + 1) {
                            let diff = this.state.selectedCheckboxes.length + 1 - samparr.length;
                            for (let i = 0; i < diff; i++) {
                                samparr.push(0);
                            }
                        }
                        arr.push(samparr);

                    } else {
                        let samparr = [billinfo.timePeriod.start];
                        this.state.selectedCheckboxes.forEach(item => {
                            samparr.push(0);
                        });
                        arr.push(samparr);
                        // arrz.push(samparr);

                    }
                });
            }

            //If filters exist, change the mock data 

            // let temp = arr
            if (this.state.selectedCheckboxes.length > 0 && this.state.selectedGroup !== '*') {
                totalcost = 0;
                let colorarr = [], subtotalarr = {}, titlearr = [];
                const colorList = ['#6e55aa', '#ff9461', '#c2579f', '#ffc952', '#f86982'];
                let targetedCheckboxes = [];
                this.state.selectedCheckboxes.forEach((box, index) => {
                    let boxval = '';
                    colorarr.push(colorList[index]);
                    let grouparr = [];
                    costData.forEach((item) => {
                        if (item.groups.length) {
                            item.groups.forEach((group) => {
                                if (group.keys[0] === box) {
                                    grouparr.push(parseFloat(group.metrics.UnblendedCost.amount));
                                }
                            });
                        }

                        if (item.groups.length === this.state.selectedCheckboxes.length) {
                            titlearr = item.groups;
                        }
                    });
                    let total = (grouparr.reduce((a, b) => a + b, 0).toFixed(2));
                    subtotalarr[box] = total;
                    totalcost = total;
                });
                console.log(subtotalarr + ',' + titlearr + 'months dayyear');
                if (titlearr.length) {
                    titlearr.forEach((ele, index) => {
                        arr[0].push(`${ele.keys[0]}  ($ ${subtotalarr[ele.keys[0]]})`);
                        // arrz[0].push(`${ele.keys[0]}  ($ ${subtotalarr[ele.keys[0]]})`);

                    });
                } else {
                    this.state.selectedCheckboxes.forEach((ele, index) => {
                        arr[0].push(`${ele}  ($ ${subtotalarr[ele]})`);
                        // arrz[0].push(`${ele}  ($ ${subtotalarr[ele]})`);

                    });
                }
                this.setState({
                    columnoptions: {
                        isStacked: 'true',
                        colors: [...colorarr],
                        legend: { position: 'bottom' },
                        chartArea: { width: '85%' },
                        vAxis: {
                            title: 'Billing',
                            minValue: 0,
                            viewWindowMode: "explicit", viewWindow: { min: 0 }
                        },
                    }
                })
            } else {
                this.setState({
                    columnoptions: {
                        isStacked: 'true',
                        colors: ['#1A9ED6', '#E77272'],
                        legend: { position: 'bottom' },
                        chartArea: { width: '85%' },
                        vAxis: {
                            title: 'Billing',
                            minValue: 0,
                            viewWindowMode: "explicit", viewWindow: { min: 0 }
                        },
                    }
                });
            }
            this.setState({
                stackedColData: [],
            }, () => {
                this.setState({
                    stackedColData: [...arr]
                })

            });
            console.log(this.state.stackedColData + 'hhhh')
        }

        if (props.allTagDetails.allTagDetails.Response) {
            let filterList = Object.keys(props.allTagDetails.allTagDetails.Response.Output.Content.Result);
            let allListTags = props.allTagDetails.allTagDetails.Response.Output.Content.Result;
            this.setState({
                allListTags: props.allTagDetails.allTagDetails.Response.Output.Content.Result,
                leftFilterList: [...filterList]
            });
            this.saveSelectedFilters(allListTags, filterList);
        }
    }

    hideComplianceModal = () => {
        this.props.showAndHideHitrustModal("hide", store);
    };

    loadNewView = () => {
        this.props.showAndHideHitrustModal("show", store);
    }

    loadReportView = () => {
        this.setState({
            isBudgetHtml: false,
            isBudgetsReportHtml: false,
            launchview: false,
            reportview: true,
            iscredit: false,
            isCreditsHtml: false,
            saveRep: false
        })
    }

    loadBackView = () => {
        this.setState({
            isBudgetHtml: true,
            launchview: false,
            reportview: false,
            iscredit: false,
            isCreditsHtml: false,
            save: false,
            errormess: false
        })
        let billingData = {
            "Request": {
                "Metadata": {
                    "Service": "Billing",
                    "Version": "1.0",
                    "Provider": "AWS",
                    "Account": `${this.state.selectedAccount}`,
                },
                "Parameters": {
                    "Content": {
                        "Tags": [{
                            "*": ["*"]
                        }],
                        "Group": "*",
                        "Service": "All",
                        "Frequency": this.state.frequency,
                        "Range": `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')}:${moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD')}`
                    }
                }
            }
        };
        this.props.costOnService(billingData);
    }
    loadRepBackView = () => {
        this.setState({
            isBudgetsReportHtml: true,
            launchview: false,
            iscredit: false,
            reportview: false
        })
    }

    loadLaunchView = () => {
        this.setState({
            isBudgetHtml: false,
            isBudgetsReportHtml: false,
            launchview: true,
            iscredit: false,
            isCreditsHtml: false
        })
    }

    handleDownload = () => {
        console.log("entersss");
        this.setState({
            save: true
        });
    };

    handlereportDownload = () => {
        console.log("entersss");
        this.setState({
            saveRep: true
        });
    };

    loadNewPageView() {
        let taghtml;
        let currentText = event.target.textContent.trim().toLowerCase();

        console.log("currentText rec", currentText);

        if (currentText === 'cost') {
            this.setState({
                isCostHtml: true,
                isCoSHtml: false,
                isBudgetHtml: false,
                launchview: false,
                isBudgetsReportHtml: false,
                reportview: false,
                iscredit: false,
                isCreditsHtml: false,
                save: false,
                saveRep: false
            })
        }

        if (currentText === 'cost on service') {
            this.setState({
                isCoSHtml: true,
                isCostHtml: false,
                isBudgetHtml: false,
                launchview: false,
                isBudgetsReportHtml: false,
                reportview: false,
                iscredit: false,
                isCreditsHtml: false,
                save: false,
                saveRep: false

            })
        }
        if (currentText === 'budgets') {
            this.setState({
                isCoSHtml: false,
                isCostHtml: false,
                isBudgetHtml: true,
                launchview: false,
                isBudgetsReportHtml: false,
                reportview: false,
                iscredit: false,
                isCreditsHtml: false,
                save: false,
                saveRep: false
            })
        }
        if (currentText === 'budgets report') {
            this.setState({
                isCoSHtml: false,
                isCostHtml: false,
                isBudgetHtml: false,
                launchview: false,
                isBudgetsReportHtml: true,
                reportview: false,
                iscredit: false,
                isCreditsHtml: false,
                save: false,
                saveRep: false
            })
        }
        if (currentText === 'credits') {
            this.setState({
                isCoSHtml: false,
                isCostHtml: false,
                isBudgetHtml: false,
                launchview: false,
                isBudgetsReportHtml: false,
                reportview: false,
                isCreditsHtml: true,
                iscredit: false,
                save: false,
                saveRep: false
            })
        }
    }

    loadView = () => {
        this.setState({
            iscredit: true,
            isCreditsHtml: false,
            isCoSHtml: false,
            isCostHtml: false,
            isBudgetHtml: false,
            launchview: false,
            isBudgetsReportHtml: false,
            reportview: false,
        })
    }

    loadCancelView = () => {
        console.log("cancelview", this.state.creditview);
        this.setState({
            budgetPayload: {
                Name: "",
                Code: ""
            },
            iscredit: true,
            creditview: false
        })
        console.log("cancelview", this.state.creditview);
    }

    onRedeemSubmit() {
        event.preventDefault();
        let budgetData = {
            "Request": {
                "Metadata": {
                    "Service": "Billing",
                    "Version": "1.0",
                    "Provider": "AWS",
                    "Account": `${this.state.selectedAccount}`,
                },
                "Parameters": {
                    "Content": this.state.budgetPayload
                }
            }
        };
        console.log("add", this.state.budgetPayload);
        //this.props.CreateBudget(budgetData);
    }

    loadNewRecommendView() {
        let taghtml;
        let currentText = event.target.textContent.trim().toLowerCase();
        currentText === 'Recommendation' ? taghtml = false : taghtml = true;
        console.log("currentText rec", currentText, taghtml);
        this.setState({
            isRecHtml: taghtml
        })
    }

    onHideFindingModal() {
        this.setState({
            isRecHtml: false,
            close: false
        });
    }

    calculateMonthToDateCost(data) {
        if (!data[data.length - 1].groups.length) {
            let monthtodatecost = parseFloat((data[data.length - 1].total.UnblendedCost.amount)).toFixed(2);
            localStorage.setItem('monthtodatecost', monthtodatecost);
            return monthtodatecost;
        } else {
            return localStorage.getItem('monthtodatecost');
        }
    }

    calculatePrevMonthCost(data) {
        if (!data[data.length - 1].groups.length) {
            let prevmonthcost = parseFloat((data[data.length - 2].total.UnblendedCost.amount)).toFixed(2);
            localStorage.setItem('prevmonthcost', prevmonthcost);
            return prevmonthcost;
        } else {
            return localStorage.getItem('prevmonthcost');
        }
    }

    calculateAvgMonthCost(data) {
        let sum = 0;
        data.forEach((cost) => {
            if (!cost.groups.length) {
                sum = sum + parseInt(cost.total.UnblendedCost.amount, 10);
            }
        });
        return parseInt(sum / (data.length - 1)).toFixed(2);
    }

    calculatePercentageChange(current, previous) {
        if (current !== "0") {
            return Math.floor(((current - previous) / previous) * 100);
        }
        else {
            return "0";
        }
    }
    handleTAccountOptions = (event) => {
        this.state.selectedAccount = event.value;
        let billingData = {
            "Request": {
                "Metadata": {
                    "Service": "Billing",
                    "Version": "1.0",
                    "Provider": "AWS",
                    "Account": `${this.state.selectedAccount}`,
                },
                "Parameters": {
                    "Content": {
                        "Tags": [],
                        "Service": "All",
                        "Frequency": "Monthly",
                        "Range": `${moment()
                            .subtract(6, 'months')
                            .format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
                    }
                }
            }
        };
        this.props.searchCostByTag(billingData);
        this.props.getListAllTags(this.state.selectedAccount);
    }

    moveFilterstoRight = () => {
        this.setState({
            rightFilterList: this.state.selectedCheckboxes
        })
    }


    clearSelectedFilter = () => {
        this.state.selectedCheckboxes.splice(event.target.id, 1);
        this.setState({
            rightFilterList: this.state.selectedCheckboxes
        })
    }

    clearFilterTags = () => {
        this.setState({
            finalFilterList: [],
            isFilter: true,
            stackedColData: ['Cost', 'Total Cost', 0, 0],
        }, () => {
            this.setState({
                finalFilterList: JSON.parse(localStorage.getItem('finalFilterList')),
                filtertags: []
            });
            let billingData = {
                "Request": {
                    "Metadata": {
                        "Service": "Billing",
                        "Version": "1.0",
                        "Provider": "AWS",
                        "Account": `${this.state.selectedAccount}`,
                    },
                    "Parameters": {
                        "Content": {
                            "Tags": [{
                                "*": ["*"]
                            }],
                            "Group": "*",
                            "Service": "All",
                            "Frequency": "Monthly",
                            "Range": `${moment()
                                .subtract(6, 'months')
                                .format('YYYY-MM-DD')}:${moment().format('YYYY-MM-DD')}`
                        }
                    }
                }
            };
            this.props.searchCostByTag(billingData);
        });
    }


    clearAllFilters = () => {
        let userrolelocal = localStorage.getItem('userrole');
        localStorage.clear();

        localStorage.setItem('userrole', userrolelocal);

        this.setState({
            selectedCheckboxes: [],
            enabledCheckboxList: [],
            disabledCheckboxList: [],
            enabledCheckedCheckboxList: [],
            timeP: "Last 6 Monthsz",
            selectValue: null,
            columnoptions: {
                colors: ['#1A9ED6', '#E77272'],
            },
            customFilterList: [],
            customFilterOptions: [],
            selectedGroup: '*',
            queryBuilderData: [],
            queryData: [],
            selectedOptionCost: `${this.state.currentMonth}`
        });
        // this.clearFilterTags();
        this.onCurrentMonthButtonClick();

    }


    saveSelectedFilters = (alllisttags, list) => {

        let optionsarr = [], keysarr = [];
        Object.values(alllisttags).forEach((item, idx) => {
            let mock = [];
            item.forEach(subitem => mock.push({ value: subitem, label: subitem, isChecked: false, query: item }));
            optionsarr.push(mock);
        });

        Object.keys(alllisttags).forEach((tag) => {
            let obj = { tagName: tag, isGroupChecked: false, checkedCount: 0 };
            keysarr.push(obj);
        });

        let obj = { keysarr, optionsarr };

        if (localStorage.getItem('savedSelectedFilters') && this.state.selectedCheckboxes.length) {
            let { filterlist, filteroptions } = JSON.parse(localStorage.getItem('savedSelectedFilters'));
            this.setState({
                finalFilterList: optionsarr,
                customFilterList: filterlist,
                customFilterOptions: filteroptions
            });
            return;
        }

        this.setState({
            finalFilterList: optionsarr,
            customFilterList: keysarr,
            customFilterOptions: optionsarr
        });

    }

    renderBarGraphCos = () => {
        this.setState({
            isBar: true,
            isPie: false,
            isBarSelected: true,
            isPieSelected: false,
            isLineSelected: false,
            isLine: false
        });

    };
    renderPieGraphCos = () => {
        this.setState({
            isPie: true,
            isBar: false,
            isBarSelected: false,
            isPieSelected: true,
            isLineSelected: false,
            isLine: false
        });
    };
    renderLineGraphCos = () => {
        this.setState({
            isPie: false,
            isBar: false,
            isBarSelected: false,
            isPieSelected: false,
            isLineSelected: true,
            isLine: true
        });
    };

    renderBarGraph = () => {
        this.setState({
            isBarChart: true,
            isLineChart: false,
            isPieChart: false
        });
        this.isBarActive = true;
        this.isLineActive = false;
        this.isPieActive = false;
        console.log(this.state.stackedColData + 'bars chat val')
        console.log(this.state.stackedColData[3][1] + 'bars chat val splitt')
        // console.log((this.state.columnoptions).JSON.stringify() + 'colom opt')

    };

    renderLineGraph = () => {
        // const linegraphdata = [0, 0, 12, 25]
        this.setState({
            isBarChart: false,
            isLineChart: true,
            isPieChart: false,
            // options07: {
            //     chart: { id: 'apex-chart' },
            //     xaxis: {
            //         categories: []
            //     },
            //     series: {
            //         name: 'teama',
            //         data: [25,35,36,99]
            //     }
            // }
        });
        this.isBarActive = false;
        this.isLineActive = true;
        this.isPieActive = false;
        console.log('linegraph initiated' + linegraphdata)
    };

    renderPieGraph = () => {
        this.setState({
            isBarChart: false,
            isLineChart: false,
            isPieChart: true
        });
        this.isBarActive = false;
        this.isLineActive = false;
        this.isPieActive = true;
    };

    onFilterApply = () => {
        let queryData = {};
        for (let key in this.state.queryBuilderData) {
            queryData[key] = [...new Set(this.state.queryBuilderData[key])];
        }
        let billingData = {
            "Request": {
                "Metadata": {
                    "Service": "Billing",
                    "Version": "1.0",
                    "Provider": "AWS",
                    "Account": `${this.state.selectedAccount}`,
                },
                "Parameters": {
                    "Content": {
                        "Tags": [queryData],
                        "Group": this.state.selectedGroup,
                        "Service": "All",
                        "Frequency": this.state.frequency,
                        "Range": this.state.range
                    }
                }
            }
        };
        let filters = JSON.stringify({ filterlist: this.state.customFilterList, filteroptions: this.state.customFilterOptions });
        localStorage.setItem('savedSelectedFilters', filters);
        this.props.searchCostByTag(billingData);
        this.setState({
            optionBarCost: {
                colors: ['#0071fb', '#4d3a96', '#4576b5'],
                chart: {
                    id: "basic-bar"
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        dataLabels: {
                            position: 'bottom'
                        },
                        // offsetX: 30
                    }
                },
                xaxis: {
                    categories: [],
                    title: {
                        text: 'Days'
                    }
                    // labels: {
                    //     rotate: 0
                    //   }
                    // label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    // categories:[...`${this.state.optionBarCost}`]
                    // categories:[...barCostOption],
                },
                yaxis: { text: 'billing' }
            },
            seriesBarCost: [{
                name: "Days",
                data: []
                // data: [...`${this.state.seriesBarCost}`]
                // data: [...barCostseries]
            }],
        })
    }

    disableFilterCheckbox = (id) => {

    }

    isFilterChecked = () => {
        return false;
    }

    onFilterMenuOpen = () => {

    }
    handlePeriodChange2 = ({ target }) => {

        //    console.log(`${this.state.threemonthsXAxis}`+'3months')
        console.log(`${this.state.MonthlyColData}` + 'stack data')
        if (target.value == 'ONE_WEEK') { // let month_chart = (x)=>{
            //     let sixMonthVar = 6;
            //     // let costDataMonth = `${moment().subtract(6, 'months').format('MMM YYYY')}`;
            //     let costDataMonth = `${moment().subtract(x, 'months').format('MMM YYYY')}`;
            //     let ymp = [];
            //     let ympData = [];

            //     for(let i=0;i<x;i++){
            //          ymp.push(`${moment().subtract(i, 'months').format('MMM YYYY')}`);
            //     }
            //     ympData.push(billinfo.total.UnblendedCost.amount);
            //     console.log(ymp.reverse() + 'ssss')
            //     // for(let i=0;i)
            // } 
            // month_chart(`${this.state.monthlyXAxis}`)
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',
            })
            this.onOneWeekButtonClick();
        } else if (target.value == 'TWO_WEEK') {
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',

            })
            this.onTwoWeekButtonClick();
        } else if (target.value == 'THREE_WEEK') {
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',
            })
            this.onThreeWeekButtonClick();
        } else if (target.value == 'ONE_MONTH') {
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',
            })
            this.onOneMonthButtonClick();
        } else if (target.value == 'THREE_MONTH') {

            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Months',


                // monthlyXAxis:[before2MonthXAxis,previousMonthXAxis,currentMonthXAxis]
            })
            //   console.log(this.state.threemonthsXAxis + 'months')
            this.onThreeMonthButtonClick();
        } else if (target.value == 'SIX_MONTH') {
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Months',

            })
            //   console.log(this.state.sixmonthsXAxis + 'months')
            this.onSixMonthButtonClick();
        } else if (target.value == 'CURRENT_MONTH') {
            console.log(this.state.currentMonth + 'current month')
            console.log(this.state.previouMonth + 'previous month')
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',

            })
            this.onCurrentMonthButtonClick();
        } else if (target.value == 'PREVIOUS_MONTH') {
            console.log(this.state.currentMonth + 'current month')
            console.log(this.state.previouMonth + 'previous month')
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',

            })
            this.onPreviousMonthButtonClick();
        } else if (target.value == 'TWO_MONTH_AGO') {
            console.log(this.state.currentMonth + 'current month')
            console.log(this.state.previouMonth + 'previous month')
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',

            })
            this.onTwoMonthBeforeButtonClick();
        } else if (target.value == 'THREE_MONTH_AGO') {
            console.log(this.state.currentMonth + 'current month')
            console.log(this.state.previouMonth + 'previous month')
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',

            })
            this.onThreeMonthBeforeButtonClick();
            // this.onSixMonthButtonClick();
        } else if (target.value == 'FOUR_MONTH_AGO') {
            console.log(this.state.currentMonth + 'current month')
            console.log(this.state.previouMonth + 'previous month')
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',

            })
            this.onFourMonthBeforeButtonClick();
        } else if (target.value == 'FIVE_MONTH_AGO') {
            console.log(this.state.currentMonth + 'current month')
            console.log(this.state.previouMonth + 'previous month')
            this.setState({
                selectedOptionCost: target.value,
                costTitle: 'Number of Days',

            })
            this.onFiveMonthBeforeButtonClick();
        }

    }


    handleModal() {
        this.setState({ show: !this.state.show })
    }

    // onCosMerge(){
    //   let arrayCos =  this.state.cosTotalTableData
    //   let AlignCosArray = []

    //     for (let i=0;i<arrayCos.length;i++){
    //         console.log(JSON.stringify(arrayCos[i])+'czcz')
    //         this.state.cosAlign.push({
    //             'label':arrayCos[i].labelCos,
    //             'item1':arrayCos[i].cosCost,
    //             // 'item2':arrayCos[i].labelCos2
    //         })
    //     }
    //     console.log(JSON.stringify(this.state.cosAlign) + 'night59')
    // }


    render() {
        const resCurMonth = { "t": `${moment().subtract(6, 'months').format('MMM YYYY')}` }
        let arrayRechart1 = this.state.cosRechartBarCurrentMonth
        arrayRechart1.forEach(({ labelCos, cosCost }) => Object.assign(resCurMonth, { [labelCos]: cosCost }))


        const resPre = { "t": `${moment().subtract(1, 'months').format('MMM YYYY')}` }
        let arrayRechart2 = this.state.cosRechartPreMonth
        arrayRechart2.forEach(({ labelCos, cosCost }) => Object.assign(resPre, { [labelCos]: cosCost }))

        const resLast3rdMonth = { "t": `${moment().subtract(2, 'months').format('MMM YYYY')}` }
        let arrayRechart3 = this.state.cosRechartLast3rdMonth
        arrayRechart3.forEach(({ labelCos, cosCost }) => Object.assign(resLast3rdMonth, { [labelCos]: cosCost }))

        const resLast4thMonth = { "t": `${moment().subtract(3, 'months').format('MMM YYYY')}` }
        let arrayRechart4 = this.state.cosRechartLast4thMonth
        arrayRechart4.forEach(({ labelCos, cosCost }) => Object.assign(resLast4thMonth, { [labelCos]: cosCost }))

        const resLast5thMonth = { "t": `${moment().subtract(4, 'months').format('MMM YYYY')}` }
        let arrayRechart5 = this.state.cosRechartLast5thMonth
        arrayRechart5.forEach(({ labelCos, cosCost }) => Object.assign(resLast5thMonth, { [labelCos]: cosCost }))

        const resLast6thMonth = { "t": `${moment().subtract(5, 'months').format('MMM YYYY')}` }
        let arrayRechart6 = this.state.cosRechartLast6thMonth
        arrayRechart6.forEach(({ labelCos, cosCost }) => Object.assign(resLast6thMonth, { [labelCos]: cosCost }))

        // let arrayRechart3 = this.state.cosRechartLast3rdMonth.map(a => {return {...a}})

        const data2 = [ resPre, resLast3rdMonth, resLast4thMonth, resLast5thMonth, resLast6thMonth,resCurMonth]
        console.log(JSON.stringify(data2) + 'dta2')
        console.log(JSON.stringify(this.state.cosRechartPreMonth.length) + 'arrayRechart2' + JSON.stringify(this.state.cosRechartPreMonth))
        console.log(JSON.stringify(resLast6thMonth) + 'binded data')


        let CurrentMonthCosMOd = `${moment().subtract(0, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(0, 'months').format('YYYY-MM-DD')}`
        let lastMonthCosMOd = `${moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(1, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        let last2MonthCosMOd = `${moment().subtract(2, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(2, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        let last3MonthCosMOd = `${moment().subtract(3, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(3, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        let last4MonthCosMOd = `${moment().subtract(4, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(4, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`
        let last5MonthCosMOd = `${moment().subtract(5, 'months').startOf('month').format('YYYY-MM-DD')} - ${moment().subtract(5, 'months').endOf('month').add(1, 'days').format('YYYY-MM-DD')}`


        const rowModCosLabel = this.state.cosDataModified.filter((x) => x.range === lastMonthCosMOd).map((y) => (<li>{y.labelCos}</li>))
        const rowModCosCost = this.state.cosDataModified.filter((x) => x.range === lastMonthCosMOd).map((y) => (<li>{y.cosCost}</li>))
        const rowModCosCost2 = this.state.cosDataModified.filter((x) => x.range === last2MonthCosMOd).map((y) => (<li>{y.cosCost}</li>))
        const rowModCosCost3 = this.state.cosDataModified.filter((x) => x.range === last3MonthCosMOd).map((y) => (<li>{y.cosCost}</li>))
        const rowModCosCost4 = this.state.cosDataModified.filter((x) => x.range === last4MonthCosMOd).map((y) => (<li>{y.cosCost}</li>))
        const rowModCosCost5 = this.state.cosDataModified.filter((x) => x.range === last5MonthCosMOd).map((y) => (<li>{y.cosCost}</li>))
        const rowModCosCostcurrent = this.state.cosDataModified.filter((x) => x.range === CurrentMonthCosMOd).map((y) => (<li>{y.cosCost}</li>))







        // console.log(rowModCosLabel + 'labels' +rowModCosCost+'costs')

        const CustomTooltip = ({ active, payload, label }) => {
            if (active && payload && payload.length) {
                return (
                    <div className="custom-tooltip" >
                        {/* <p className="label">{`${label}`}</p> */}
                        <div style={{ padding: '0 10 10 10',marginBottom:'225px' ,borderRadius:'4px', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: '111111', width: '700px'}}>
                            <h1 style={{ fontSize: '17px', color: '#fff', backgroundColor: '#0071fb', textAlign: 'center' }}>{`${label}`}</h1>
                            {payload.map((pld) => (
                                <div style={{ display: 'inline-block',marginBottom:'2px' }}>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #000',backgroundColor:'#fff',padding:'5px',margin:'2px'}}>
                                        <span style={{backgroundColor:pld.fill}} className="tableRedCol"></span>
                                        <div style={{ color: '#000',fontSize:'12px',marginLeft:'2px' }}>{pld.dataKey}</div>

                                        <div style={{ color: '#000',fontSize:'12px',marginLeft:'5px' }}>:{pld.value}</div>
                                        {/* <div style={{ color: pld.fill }}>{pld.dataKey}</div>

                                        <div style={{ color: pld.fill }}>{pld.value}</div> */}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                );
            }

            return null;
            // if (active && payload && payload.length) {
            //   return (
            //     <div className="custom-tooltip">
            //       <p className="label">{`${label} : ${payload[0].value}`}</p>
            //       {/* <p className="intro">{getIntroOfPage(label)}</p> */}
            //       {/* <p className="desc">Anything you want can be displayed here.</p> */}
            //     </div>
            //   );
            // }

            // return null;
        };

        const rowCosTable = this.state.cosTableData;
        const rowModified = this.state.cosDataModified;
        const rowCos2Table = this.state.cosTableDataPreMonth;
        const rowCosTotalData = this.state.cosTotalTableData;

        const rowBudgetTable = this.state.budgetDataList;

        const columns = new CostUtils().getColumns();
        const budcolumns = new BudgetUtils().getColumns();
        const budReportcolumns = new BudgetUtils().getColumns();
        const columnNames = new CostRecommendUtils().getColumns();
        const csvHeaders = new CostRecommendUtils().getCsvHeaders(0);
        const csvData = this.state.savingDataList;
        const csvReport = {
            filename: 'RecommendationReport.csv',
            headers: csvHeaders,
            data: csvData
        };

        const csvBudHeaders = new BudgetUtils().getCsvHeaders(0);
        const csvBudData = this.state.budgetDataDetails;
        const csvBudReport = {
            filename: 'BudgetReport.csv',
            headers: csvBudHeaders,
            data: csvBudData
        };

        const csvBudgetReportHeaders = new BudgetUtils().getCsvHeaders(0);
        const csvBudgetReportData = this.state.budgetReportDataList;
        const csvBudgetReport = {
            filename: 'BudgetsReports.csv',
            headers: csvBudgetReportHeaders,
            data: csvBudgetReportData
        };

        const Option = (props) => {

            return props.data.label === 'toggle' ? (
                <div style={{ padding: '10px' }}>
                    <div>
                        <div className="form-control" style={{ display: 'flex', justifyContent: 'end' }}>
                            <span>Group by</span>
                            <span style={{ marginLeft: '10px', marginRight: '10px' }}>
                                <input name={props.selectProps.classNamePrefix} type="checkbox" defaultChecked={props.selectProps.isGroupChecked} onClick={this.queryBuilderGroupChange} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: "10px", fontWeight: '300' }}>Tag values for</div>
                        <div style={{ fontSize: "14px", fontWeight: '300' }}>{props.data.value}</div>
                    </div>
                    <hr></hr>
                </div>
            ) : (
                <div>
                    <components.Option {...props}>
                        <label className="form-control" style={{ display: 'flex' }}>
                            <span style={{ marginLeft: '10px', marginRight: '10px' }}>
                                <input type="checkbox" rel={props.selectProps.classNamePrefix} name={props.data.label} defaultChecked={props.data.isChecked} onClick={this.queryBuilderChange} />
                            </span>
                            <span style={{ paddingTop: '3px' }}>{props.label}</span>
                        </label>
                    </components.Option>
                </div>
            );

        };
        const chartdata = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                    // label: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    // categories:[...`${this.state.optionBarCost}`]
                    // categories:[...barCostOption],
                }
            },
            series: [
                {
                    name: "service-1",
                    data: [11, 19, 93, 94, 95, 16, 19, 98, 19]
                    // data: [...`${this.state.seriesBarCost}`]
                    // data: [...barCostseries]
                }
                //   ,
                //   {
                //     name: "service-2",
                //     data: [20, 30, 35, 10, 29, 80, 80, 51]
                //   }
            ]
        }
        const sidebarHeight = window.outerHeight;

        console.log(JSON.stringify(this.state.cosTotalTableData) + 'zzzz')

        // this.state.cosTotalTableData.map((oe)=>{
        // console.log(oe.labelCos+'la')
        // console.log(oe.costCos+'la cost')

        // })

        return (
            <>




                {/* old code structure */}
                <div className="overview-wrapper page_box" style={{ backgroundColor: '#f5f5f5', paddingBottom: '175px' }}>
                    <div style={{ position: 'sticky', top: '0' }} className="costv1_sidebar">
                        <Col md={2} lg={2} className="datalakestorage_searchpanel"  >
                            <div className="role_label margin_bottom_20">Cost by Tag</div>
                            <Row className="margin_bottom_20">
                                <Col className="cost-menu-list">
                                    <ListGroup onClick={this.loadNewPageView}>
                                        <ListGroupItem className={this.state.isCostHtml ? 'activeItem cost-menu-list-item' : 'cost-menu-list-item'}><  PaymentsIcon style={{ color: '#fff', fontSize: '25px' }} />&nbsp;Cost</ListGroupItem>
                                        <ListGroupItem className={this.state.isCoSHtml ? 'activeItem cost-menu-list-item' : 'cost-menu-list-item'}><MiscellaneousServicesIcon style={{ color: '#fff', fontSize: '25px' }} />  <span onClick={this.onCurrentMonthButtonClick}>&nbsp;Cost on Service</span> </ListGroupItem>

                                        <ListGroupItem className={this.state.isBudgetHtml ? 'activeItem cost-menu-list-item' : 'cost-menu-list-item'}><span onClick={this.onCurrentMonthButtonClick}><SummarizeIcon style={{ color: '#fff', fontSize: '25px' }} /> &nbsp;Budgets</span></ListGroupItem>
                                        <ListGroupItem className={this.state.isBudgetsReportHtml ? 'activeItem cost-menu-list-item' : 'cost-menu-list-item'}><SummarizeIcon style={{ color: '#fff', fontSize: '25px' }} />&nbsp;Budgets Report</ListGroupItem>
                                        <ListGroupItem className={this.state.isCreditsHtml ? 'activeItem cost-menu-list-item' : 'cost-menu-list-item'}>< CreditScoreIcon style={{ color: '#fff', fontSize: '25px' }} />&nbsp; Credits</ListGroupItem>



                                    </ListGroup>


                                </Col>
                            </Row>
                        </Col>
                    </div>

                    <Col md={2} lg={2} className="">
                        {(!this.props.costByTagDetails.costByTagInProgress) && this.state.Expired == undefined && (
                            <Alert bsStyle="warning" className="alerttime">
                                <strong>Session Expired !! </strong>
                                <em>Please LogOut and Re-Login Again</em>
                            </Alert>
                        )}
                    </Col>
                    {this.state.isCostHtml && <Col md={10} lg={10} className="others" style={{ padding: 0 }}>

                        <Col className="cost-right-pane" md={11.5} lg={11.5}>
                            <div className='CostSaving '>
                                <div className='CostSaving_lft'>
                                    <h5 style={{ marginLeft: '20px', fontSize: '18px' }}> Cost Management</h5>
                                    <Box className='feature_card' >
                                        {!this.state.isRecHtml &&
                                            <Card sx={{ minWidth: 275 }}>
                                                <CardContent >

                                                    <div className='cardBlk'>
                                                        <div className='cardBlk_lft'>
                                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                                Current Selected Total Cost
                                                            </Typography>
                                                            <Typography variant="h5" component="div">
                                                                $ {this.state.totalCost.toFixed(2)}
                                                            </Typography>
                                                        </div>
                                                        <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 186, 3)" }}> <span className='card_icon' > <CreditScoreIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                                    </div>

                                                </CardContent>
                                            </Card>}
                                        {!this.state.isRecHtml &&
                                            <Card sx={{ minWidth: 275 }}>
                                                <CardContent >

                                                    <div className='cardBlk'>
                                                        <div className='cardBlk_lft'>
                                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                                Estimated Month End Cost
                                                            </Typography>
                                                            <Typography variant="h5" component="div">
                                                                $ {this.state.forecostChange}
                                                            </Typography>
                                                        </div>
                                                        <div className='cardBlk_rft' style={{ backgroundColor: "rgb(0, 113, 251)" }}> <span className='card_icon' > <WorkHistoryIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                                    </div>

                                                </CardContent>
                                            </Card>}
                                        {!this.state.isRecHtml &&
                                            <Card sx={{ minWidth: 275 }}>
                                                <CardContent >

                                                    <div className='cardBlk'>
                                                        <div className='cardBlk_lft'>
                                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                                Est.Saving Cost
                                                            </Typography>
                                                            <Typography variant="h5" component="div">
                                                                <span>$ {this.state.savingData}</span>
                                                                <span style={{ cursor: 'pointer' }} className='cosViewEst'><a href onClick={this.loadNewRecommendView}>View</a></span>
                                                            </Typography>
                                                        </div>
                                                        <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 61, 3)" }}> <span className='card_icon' > <ManageAccountsIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                                    </div>

                                                </CardContent>
                                            </Card>
                                        }
                                        {this.state.isRecHtml &&
                                            <Col>
                                                <Col md={15} lg={15} className="costflex">
                                                    <SimpleCostModal
                                                        show={true}
                                                        onHide={this.onHideFindingModal.bind(this)}
                                                        dialogClassName="modal-cost-dialog"
                                                    >
                                                        <div style={{ backgroundColor: '#0071fb' }} header="Findings" />
                                                        <br />
                                                        <div style={{ marginLeft: '790px', fontSize: 'medium' }}>
                                                            <button className="btn btn-primary filter"><CSVLink style={{ color: '#fff', textDecoration: 'none' }} {...csvReport}>Download CSV
                                                            </CSVLink></button>


                                                        </div>
                                                        <br />
                                                        <Col className="admin-table" md={12} lg={12}>
                                                            <SimpleTable
                                                                data={this.state.savingDataDetails}
                                                                columns={columnNames}
                                                                hideTableHeader={true}
                                                                showPagination={true}
                                                                rowOnClick={this.tableRowOnClick}
                                                                className="ingestion_detail_table cost_data_table tagspecifictable"
                                                            />
                                                        </Col>
                                                    </SimpleCostModal>
                                                </Col>
                                            </Col>
                                        }


                                    </Box>
                                    <Card sx={{ minWidth: 275 }} style={{ margin: '20px', padding: '0', position: 'relative' }} >
                                        <CardContent>
                                            <h5 style={{ fontSize: '17px' }}>Cost Overview
                                            </h5>
                                            <Box style={{ display: 'flex', justifyContent: 'start' }}><label>Period:</label>                                                <p style={{ marginLeft: '10px' }}><span className="page_subtitle">{`${this.state.timeP}`}</span></p></Box>
                                            <Col md={1} lg={1}>
                                                {this.props.costByTagDetails && this.props.costByTagDetails.costByTagInProgress && !this.props.costByTagDetails.costByTagSucesss && (
                                                    <Loader
                                                        className="loader"
                                                        type="ThreeDots"
                                                        color="#1A9ED6"
                                                        height="40"
                                                        width="40"
                                                    />
                                                )}
                                                {
                                                    this.props.costByTagDetails && this.props.costByTagDetails.costByTagDetailsFailed && (
                                                        <Alert bsStyle="warning">
                                                            <strong>Error!! </strong>
                                                            <em>{this.state.errorMessage}</em>
                                                        </Alert>
                                                    )
                                                }
                                            </Col>
                                            <Box className='costSort' sx={{ display: 'flex', justifyContent: 'end', alignContent: 'center' }}>

                                                <p>Sort by:</p> <Box style={{ marginRight: '15px', marginLeft: '0px' }}>

                                                    {/* (val) => this.handlePeriodChange2(val.target.value) */}
                                                    <select value={this.state.selectedOptionCost} style={{ backgroundColor: '#f5f5f5', marginLeft: '10px', boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }} onChange={this.handlePeriodChange2} className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                                        {/* <option value="ONE_WEEK">One Week</option>
                                                        <option value="TWO_WEEK" >Two Week</option>
                                                        <option value="THREE_WEEK">Three Week</option>
                                                        <option value="ONE_MONTH">One Month</option>
                                                        <option  value="THREE_MONTH">Three Month</option>

                                                        <option selected value="SIX_MONTH">Six Month</option> */}
                                                        <option selected value="CURRENT_MONTH">{this.state.currentMonth}</option>
                                                        <option value="PREVIOUS_MONTH">{this.state.previouMonth}</option>
                                                        <option value="TWO_MONTH_AGO">{this.state.TwoMonthAgo}</option>
                                                        {/* <option  value="THREE_MONTH_AGO">{this.state.ThreeMonthAgo}</option>
                                                        <option  value="FOUR_MONTH_AGO">{this.state.FourMonthAgo}</option>
                                                        <option  value="FIVE_MONTH_AGO">{this.state.FiveMonthAgo}</option> */}
                                                        <option value="THREE_MONTH">Three Months</option>

                                                        <option selected value="SIX_MONTH">Six Months</option>



                                                    </select>
                                                </Box>
                                                <ul className='chartHeader' >
                                                    {/* <li><NavLink to="/costs/costOfSavings/piechart" className= 'chart_menu' activeClassName ='active'><PieChartIcon/></NavLink></li> */}
                                                    <li><button className={this.isBarActive ? "activeb" : ""} onClick={this.renderBarGraph}  ><BarChartIcon style={{ fontSize: '25px' }} /></button></li>
                                                    {/* className="mobile__CTA--btn chart_menu"  */}
                                                    <li><button className={this.isLineActive ? "activeb" : ""} onClick={this.renderLineGraph} ><SsidChartIcon style={{ fontSize: '25px' }} /></button></li>



                                                </ul>


                                            </Box>
                                            {this.isBarActive && <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '100%' }}>

                                                <Chart
                                                    options={this.state.optionBarCost}
                                                    series={this.state.seriesBarCost}
                                                    type="bar"
                                                    width="910"
                                                />

                                                {/* <Chart
                                                    height={'500px'}
                                                    width={'900px'}
                                                    chartType="ColumnChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={this.state.stackedColData}
                                                    // data={[["Cost", "Total Cost"], [8,12], [8,12]]}
                                                    // data={[['cost','total cost','months'],`${this.state.threemonthsXAxis}`,[11,22,33]]}
                                                    is3D={true}
                                                    options={{
                                                        hAxis: {
                                                            title: `${this.state.costTitle}`,
                                                            // viewWindowMode: 'explicit',
                                                            // viewWindow: {
                                                            //     max: 180,
                                                            //     min: 0,
                                                            //     interval: 1,
                                                            // },{showTextEvery: 1, slantedText: true, slantedTextAngle: 90, viewWindow:{max:33}}
                                                            showTextEvery: 1,
                                                            slantedText: true,
                                                            slantedTextAngle: 90,
                                                            // viewWindow: { max: 33 },
                                                            textStyle: {fontSize:'12.8'}

                                                        },
                                                        vAxis: {
                                                            title: 'Billing',
                                                        },
                                                        colors: ['0071fb', '#1A9ED6', '#6e55aa', '#ff9461', '#c2579f', '#ffc952', '#f86982'],
                                                        legend: {
                                                            position: 'none',
                                                        },
                                                        // chartArea: {
                                                        //     bottom: 80
                                                        //   },
                                                        // chartArea: {
                                                        //     height: '100%',
                                                        //     width: '100%',
                                                        //     top: 48,
                                                        //     left: 48,
                                                        //     right: 16,
                                                        //     bottom: 100
                                                        //   },
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                /> */}


                                            </Box>
                                            }
                                            {this.isLineActive && <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

                                                <Chart
                                                    options={this.state.optionBarCost}
                                                    series={this.state.seriesBarCost}
                                                    type="line"
                                                    width="800"
                                                />

                                                {/* <Col className="column-chart-box"> */}
                                                {/* <Chart
                                                    height={'400px'}
                                                    width={'920px'}
                                                    chartType="LineChart"
                                                    loader={<div>Loading Chart</div>}
                                                    data={this.state.stackedColData}
                                                    options={{
                                                        hAxis: {
                                                            title: `${this.state.costTitle}`,
                                                        },
                                                        vAxis: {
                                                            title: 'Billing',
                                                        },
                                                        colors: ['0071fb', '#1A9ED6', '#6e55aa', '#ff9461', '#c2579f', '#ffc952', '#f86982'],
                                                        legend: {
                                                            position: 'bottom',
                                                        },
                                                    }}
                                                    rootProps={{ 'data-testid': '1' }}
                                                /> */}
                                                {/* </Col> */}




                                            </Box>
                                            }
                                            <br />
                                            {/* <CustomizedTables /> */}
                                            {/* {active === 'barchart' &&     <CostAndSavingsCharts isBar={true} />} 
{active === 'linechart' &&     <CostAndSavingsCharts  isLine={true}/>}    */}

                                        </CardContent>
                                    </Card>

                                </div>
                                <div className='CostSaving_rft'>
                                    <Card style={{ position: 'sticky', top: '1px', margin: '20px 10px 0 0 ', paddingBottom: '125px' }}>
                                        <h5>Filter</h5>
                                        <CardContent style={{ paddingTop: '0' }}>

                                            <Box style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column', margin: '2px 0px' }}>
                                                <Col style={{ paddingLeft: 0 }} className="flex dropDown_Cos">
                                                    {this.state.customFilterList.map((filter, idx) => {
                                                        const colourStyles = {
                                                            control: styles => ({ ...styles, backgroundColor: 'white', border: filter.checkedCount > 0 ? "1px solid #aa1572" : "1px solid hsl(0, 0%, 80%)" }),
                                                            option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                                                                const color = 'red';
                                                                return {
                                                                    ...styles,
                                                                    backgroundColor: isFocused ? '#fff' : isSelected ? '#fff' : '#fff',
                                                                    color: '#FFF',
                                                                    cursor: isDisabled ? 'not-allowed' : 'default',
                                                                    ':active': {
                                                                        ...styles[':active'],
                                                                        backgroundColor: !isDisabled
                                                                            ? isSelected
                                                                                ? 'none'
                                                                                : 'none'
                                                                            : undefined,
                                                                    },
                                                                };
                                                            },
                                                        };
                                                        if (this.state.customFilterOptions[idx][0].label !== 'toggle') {
                                                            this.state.customFilterOptions[idx].unshift({ label: 'toggle', value: filter.tagName });
                                                        }
                                                        return (
                                                            <Col className={filter.checkedCount > 0 ? 'hasSelected' : ''} style={{}} md={10} lg={10}>
                                                                <Col style={{ width: '100px', height: '30px', color: '#AA1572' }}>{filter.isGroupChecked ? 'Grouped by' : ''}</Col>
                                                                <Select
                                                                    classNamePrefix={filter.tagName}
                                                                    options={this.state.customFilterOptions[idx]}
                                                                    isMulti
                                                                    components={{
                                                                        Option
                                                                    }}
                                                                    value={[]}
                                                                    isGroupChecked={filter.isGroupChecked}
                                                                    placeholder={filter.tagName}
                                                                    closeMenuOnSelect={false}
                                                                    hideSelectedOptions={false}
                                                                    styles={colourStyles}
                                                                />
                                                                {filter.checkedCount > 0 ? <Col>{filter.checkedCount} Selected</Col> : ''}
                                                            </Col>
                                                        )
                                                    })}
                                                </Col><br />

                                            </Box>
                                            <Box style={{ display: "flex" }}>
                                                <Button className="btn btn-primary filter" onClick={this.onFilterApply} style={{ margin: '0 auto', display: 'flex' }}>Apply</Button>
                                                <Button className="btn btn-primary filter_res" onClick={this.clearAllFilters} style={{ margin: '0 auto', display: 'flex' }}>Reset</Button>
                                            </Box>

                                        </CardContent>
                                    </Card>

                                </div>

                            </div>
                            <Col md={1} lg={1}>
                                {this.props.costByTagDetails && this.props.costByTagDetails.costByTagInProgress && !this.props.costByTagDetails.costByTagSucesss && (
                                    <Loader
                                        className="loader"
                                        type="ThreeDots"
                                        color="#1A9ED6"
                                        height="40"
                                        width="40"
                                    />
                                )}
                                {
                                    this.props.costByTagDetails && this.props.costByTagDetails.costByTagDetailsFailed && (
                                        <Alert bsStyle="warning">
                                            <strong>Error!! </strong>
                                            <em>{this.state.errorMessage}</em>
                                        </Alert>
                                    )
                                }
                            </Col>


                            {/* existing codes */}







                        </Col>
                    </Col>}
                    {this.state.isBudgetHtml &&
                        <>
                            <h5 style={{ marginLeft: '18%', fontSize: '18px' }}>Budget</h5>
                            <Box className='feature_card' >


                                <Card sx={{ minWidth: 275 }} style={{ width: '1000px' }} >
                                    <CardContent >

                                        <Box>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <h5 style={{ fontSize: '20px' }}>Budgets Overview</h5>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                                    {/* <BudgetreportDialog/> */}
                                                    {/* <Button variant="contained" color="error" style={{margin:'0 0 0 10px'}}> Delete</Button> */}
                                                </div>
                                            </div>


                                            <br></br>
                                            {/* <BudgetTable/> */}
                                            <Box style={{ display: 'flex', justifyContent: 'end', alignItem: 'center', marginBottom: '10px' }}>
                                                <Button type="button"
                                                    className="btn btn-primary filter_res"

                                                    onClick={() => { this.handleDownload() }}
                                                >
                                                    {this.state.save && <CSVDownload data={csvBudData} headers={csvBudHeaders} target="_blank">
                                                    </CSVDownload>} Download
                                                </Button>
                                                <Button style={{ marginLeft: '10px' }} onClick={() => { this.handleModal() }} className="btn btn-primary filter">Create Budget</Button>
                                            </Box>

                                            <Modal show={this.state.show} className="my-modal-budget" onHide={() => this.handleModal()} >

                                                <Modal.Header closeButton style={{ fontSize: '17px' }}>
                                                    Budget Setup
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Col >
                                                        <Form horizontal className="tags-config-form data-supplier-form" >
                                                            <div style={{ color: '#1A9ED6', fontSize: '16px', marginBottom: '40px', marginLeft: "10px" }}>
                                                                {this.state.errormess && this.props.createbudgetDetails.createbudgetSucess && (
                                                                    <Alert bsStyle="warning" className="alerttime">
                                                                        {
                                                                            "Budget Created Successfully !"
                                                                        }
                                                                    </Alert>
                                                                )}
                                                                {this.state.errormess && this.props.createbudgetDetails.createbudgetFailed && (
                                                                    <Alert bsStyle="warning" className="alerttime">
                                                                        {
                                                                            "Budget Creation Failed !"
                                                                        }
                                                                    </Alert>
                                                                )}
                                                                {this.state.nameempty && (
                                                                    <Alert bsStyle="warning" className="alerttime">
                                                                        {
                                                                            "Please fill the required information !"
                                                                        }
                                                                    </Alert>
                                                                )}
                                                            </div>


                                                            <Col style={{ fontSize: "16px", padding: "10px", backgroundColor: '#f5f5f5' }}>Budget Types</Col>
                                                            <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                                                <Col componentClass={ControlLabel} sm={3}>
                                                                    <Col className="required-field">Templates - new</Col>
                                                                </Col>
                                                                <Col sm={9}>
                                                                    <Select
                                                                        options={this.state.budgetOptions}
                                                                        placeholder="Choose a template that best matches your use case."
                                                                        value={this.state.currentSelectedTemplateType}
                                                                        onChange={this.handleTemplateTypeChange.bind(this)}
                                                                    />
                                                                </Col>
                                                            </FormGroup>
                                                            <Col style={{ marginTop: "30px" }}></Col>

                                                            {this.state.typeSelection === 'Zero' && <Col>
                                                                {/* <Col><hr></hr></Col>  */}
                                                                <Col style={{ fontSize: "16px", padding: "10px", backgroundColor: '#f5f5f5' }}> Zero Spend Budget - Template</Col>
                                                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                                                    <Col componentClass={ControlLabel} sm={3}>
                                                                        <Col className="required-field">Budget Name</Col>
                                                                    </Col>
                                                                    <Col sm={9}>
                                                                        <FormControl name="name" type="text" placeholder="Provide a descriptive name for this budget." defaultValue={this.state.budgetPayload.Name} onKeyUp={this.updatebudgetData} />
                                                                    </Col>
                                                                </FormGroup>
                                                                <FormGroup style={{ marginTop: '33px' }} controlId="email">
                                                                    <Col componentClass={ControlLabel} sm={3}>
                                                                        <Col className="">Email recipients</Col>
                                                                    </Col>
                                                                    <Col sm={9}>
                                                                        <FormControl name="email" type="text" placeholder="Separate email addresses using commas" defaultValue={this.state.budgetPayload.Email} onKeyUp={this.updatebudgetemailData} />
                                                                    </Col>
                                                                </FormGroup>
                                                            </Col>}
                                                            {this.state.typeSelection === 'Monthly' && <Col>
                                                                {/* <Col><hr></hr></Col>  */}
                                                                <Col style={{ fontSize: "16px", padding: "10px", backgroundColor: '#f5f5f5' }}> Monthly cost budget</Col>
                                                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                                                    <Col componentClass={ControlLabel} sm={3}>
                                                                        <Col className="required-field">Budget Name</Col>
                                                                    </Col>
                                                                    <Col sm={9}>
                                                                        <FormControl name="name" type="text" placeholder="Provide a descriptive name for this budget." defaultValue={this.state.budgetPayload.Name} onKeyUp={this.updatebudgetData} />
                                                                    </Col>
                                                                </FormGroup>
                                                                <FormGroup style={{ marginTop: '33px' }} controlId="amount">
                                                                    <Col componentClass={ControlLabel} sm={3}>
                                                                        <Col className="required-field">Budget Amount</Col>
                                                                    </Col>
                                                                    <Col sm={9}>
                                                                        <FormControl name="amount" type="text" placeholder="Enter your budgeted amount" defaultValue={this.state.budgetPayload.Amount} onKeyUp={this.updatebudgetAmountData} />
                                                                    </Col>
                                                                </FormGroup>
                                                                <FormGroup style={{ marginTop: '33px' }} controlId="email">
                                                                    <Col componentClass={ControlLabel} sm={3}>
                                                                        <Col className="">Email recipients</Col>
                                                                    </Col>
                                                                    <Col sm={9}>
                                                                        <FormControl name="email" type="text" placeholder="Separate email addresses using commas" defaultValue={this.state.budgetPayload.Email} onKeyUp={this.updatebudgetemailData} />
                                                                    </Col>
                                                                </FormGroup>
                                                            </Col>}
                                                            {/* <Col style={{marginTop: "10px", marginBottom: "30px"}}></Col>    */}
                                                            <Col><hr></hr></Col>
                                                            <Col style={{ fontSize: "16px", marginBottom: "0px", marginLeft: "10px" }}> Scope - All AWS services are in scope in this budget.</Col>

                                                            <FormGroup>

                                                                <Col style={{ marginRight: '10px', marginTop: '0px' }}></Col>
                                                                {/* <Col className="button-container" lg="4" md="4">
                                                <Button
                                                    block
                                                    bsStyle="success"
                                                    variant="primary"
                                                    type="submit"
                                                    className="loginSubmitButton_primary add_datasource_button"
                                                    style={{marginLeft: '50px'}}
                                                    onClick={() => { this.onCreateBudgetSubmit() }}
                                                >                                            
                                                    Create
                                                </Button>
                                            </Col>
                                            <Col className="button-container" lg="12" md="12">
                                                <Button                                                   
                                                    bsStyle="success"
                                                    variant="primary"
                                                    type="submit"
                                                    className="loginSubmitButton_primary add_datasource_button"
                                                    onClick={() => { this.loadBackView() }}
                                                    >
                                                    <span>Back</span>
                                                </Button> 
                                            </Col>  */}
                                                            </FormGroup>
                                                        </Form>
                                                    </Col>

                                                </Modal.Body>
                                                <Modal.Footer >
                                                    <Button onClick={() => { this.onCreateBudgetSubmit() }} className="btn btn-primary filter">Create</Button>

                                                    <Button style={{ marginLeft: '15px' }} onClick={() => { this.handleModal() }} className="btn btn-primary filter_res">Close</Button>

                                                </Modal.Footer>


                                            </Modal>

                                            {/* <Budget2tables/> */}

                                            {/* <Budget3table/> */}
                                            <TableContainer component={Paper}>
                                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                    <TableHead>
                                                        <TableRow className='budgetReport_table'>
                                                            {/* <StyledTableCell >Alarm</StyledTableCell> */}
                                                            <StyledTableCell >Budget Name</StyledTableCell>
                                                            {/* <StyledTableCell    >Cost: Current vs Budgeted</StyledTableCell> */}
                                                            <StyledTableCell >Current</StyledTableCell>
                                                            <StyledTableCell >Forcasted</StyledTableCell>
                                                            <StyledTableCell>Budgeted</StyledTableCell>


                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {rowBudgetTable.map((row) => (

                                                            <StyledTableRow key={row.name}>
                                     
                                                                <StyledTableCell className='budget_table'>{row.BudgetName}</StyledTableCell>
                                                             
                                                                <StyledTableCell className='budget_table'>{row.BudgetSpend} &nbsp; {row.BudgetSpendUnit}</StyledTableCell>
                                                                <StyledTableCell className='budget_table'>{row.BudgetForcast}&nbsp;{row.BudgetForcastUnit}</StyledTableCell>
                                                                <StyledTableCell className='budget_table'>{row.Budgeted}&nbsp;{row.BudgetedUnit}</StyledTableCell>

                                                            </StyledTableRow>
                                                        ))
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Box>

                                    </CardContent>
                                </Card>
                            </Box>

                        </>



                    }

                    {this.state.launchview && <Col >
                        <Form horizontal className="tags-config-form data-supplier-form" style={{ width: '80%' }}>
                            <div style={{ color: '#1A9ED6', fontSize: '18px', marginBottom: '40px', marginLeft: "250px" }}>
                                {this.state.errormess && this.props.createbudgetDetails.createbudgetSucess && (
                                    <Alert bsStyle="warning" className="alerttime">
                                        {
                                            "Budget Created Successfully !"
                                        }
                                    </Alert>
                                )}
                                {this.state.errormess && this.props.createbudgetDetails.createbudgetFailed && (
                                    <Alert bsStyle="warning" className="alerttime">
                                        {
                                            "Budget Creation Failed !"
                                        }
                                    </Alert>
                                )}
                                {this.state.nameempty && (
                                    <Alert bsStyle="warning" className="alerttime">
                                        {
                                            "Please fill the required information !"
                                        }
                                    </Alert>
                                )}
                            </div>

                            <Col style={{ marginTop: "20px", marginBottom: "10px", fontSize: "24px", marginLeft: "220px" }}>Budget Setup</Col>
                            <Col style={{ marginLeft: "220px" }}></Col>
                            <Col><hr></hr></Col>
                            <Col style={{ fontSize: "18px", marginLeft: "220px" }}>Budget Types</Col>
                            <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                <Col componentClass={ControlLabel} sm={3}>
                                    <Col className="required-field">Templates - new</Col>
                                </Col>
                                <Col sm={9}>
                                    <Select
                                        options={this.state.budgetOptions}
                                        placeholder="Choose a template that best matches your use case."
                                        value={this.state.currentSelectedTemplateType}
                                        onChange={this.handleTemplateTypeChange.bind(this)}
                                    />
                                </Col>
                            </FormGroup>
                            <Col style={{ marginTop: "30px" }}></Col>

                            {this.state.typeSelection === 'Zero' && <Col>
                                <Col><hr></hr></Col>
                                <Col style={{ fontSize: "18px", marginLeft: "220px" }}> Zero Spend Budget - Template</Col>
                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="required-field">Budget Name</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl name="name" type="text" placeholder="Provide a descriptive name for this budget." defaultValue={this.state.budgetPayload.Name} onKeyUp={this.updatebudgetData} />
                                    </Col>
                                </FormGroup>
                                <FormGroup style={{ marginTop: '33px' }} controlId="email">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="">Email recipients</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl name="email" type="text" placeholder="Separate email addresses using commas" defaultValue={this.state.budgetPayload.Email} onKeyUp={this.updatebudgetemailData} />
                                    </Col>
                                </FormGroup>
                            </Col>}
                            {this.state.typeSelection === 'Monthly' && <Col>
                                <Col><hr></hr></Col>
                                <Col style={{ fontSize: "18px", marginLeft: "220px" }}> Monthly cost budget</Col>
                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="required-field">Budget Name</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl name="name" type="text" placeholder="Provide a descriptive name for this budget." defaultValue={this.state.budgetPayload.Name} onKeyUp={this.updatebudgetData} />
                                    </Col>
                                </FormGroup>
                                <FormGroup style={{ marginTop: '33px' }} controlId="amount">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="required-field">Budget Amount</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl name="amount" type="text" placeholder="Enter your budgeted amount" defaultValue={this.state.budgetPayload.Amount} onKeyUp={this.updatebudgetAmountData} />
                                    </Col>
                                </FormGroup>
                                <FormGroup style={{ marginTop: '33px' }} controlId="email">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="">Email recipients</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl name="email" type="text" placeholder="Separate email addresses using commas" defaultValue={this.state.budgetPayload.Email} onKeyUp={this.updatebudgetemailData} />
                                    </Col>
                                </FormGroup>
                            </Col>}
                            {/* <Col style={{marginTop: "10px", marginBottom: "30px"}}></Col>    */}
                            <Col><hr></hr></Col>
                            <Col style={{ fontSize: "18px", marginBottom: "0px", marginLeft: "220px" }}> Scope - All AWS services are in scope in this budget.</Col>

                            <FormGroup>

                                <Col style={{ marginRight: '300px', marginTop: '100px' }}></Col>
                                <Col className="button-container" lg="4" md="4">
                                    <Button
                                        block
                                        bsStyle="success"
                                        variant="primary"
                                        type="submit"
                                        className="loginSubmitButton_primary add_datasource_button"
                                        style={{ marginLeft: '50px' }}
                                        onClick={() => { this.onCreateBudgetSubmit() }}
                                    >
                                        Create
                                    </Button>
                                </Col>
                                <Col className="button-container" lg="12" md="12">
                                    <Button
                                        bsStyle="success"
                                        variant="primary"
                                        type="submit"
                                        className="loginSubmitButton_primary add_datasource_button"
                                        onClick={() => { this.loadBackView() }}
                                    >
                                        <span>Back</span>
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    }
                    {this.state.isCoSHtml && <>
                        <Box className="others" style={{ marginBottom: '25px' }}>
                            <h5 style={{ marginLeft: '18%', fontSize: '18px' }}>Cost Service</h5>
                            <Box className='feature_card'>


                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent >

                                        <div className='cardBlk'>
                                            <div className='cardBlk_lft'>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Total Cost
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    $ {this.state.totalcostusage}
                                                </Typography>
                                            </div>
                                            <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 186, 3)" }}> <span className='card_icon' > <CreditScoreIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                        </div>

                                    </CardContent>

                                </Card>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>

                                        <div className='cardBlk'>
                                            <div className='cardBlk_lft'>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Average Cost
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    ${this.state.avgcos}
                                                </Typography>
                                            </div>
                                            <div className='cardBlk_rft' style={{ backgroundColor: "#0071fb" }}> <span className='card_icon' > < WorkHistoryIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                        </div>

                                    </CardContent>

                                </Card>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>

                                        <div className='cardBlk'>
                                            <div className='cardBlk_lft'>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Service Count
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    {this.state.serviceCount}
                                                </Typography>
                                            </div>
                                            <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 61, 3)" }}> <span className='card_icon' > <ManageAccountsIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                        </div>

                                    </CardContent>

                                </Card>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent >

                                        <div className='cardBlk'>
                                            <div className='cardBlk_lft'>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Current Month
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                    {new Date().toLocaleString("en-US", { month: "long" })}
                                                </Typography>
                                            </div>
                                            <div className='cardBlk_rft' style={{ backgroundColor: "rgb(43, 179, 106)" }}> <span className='card_icon' > <CloudUploadIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                        </div>

                                    </CardContent>

                                </Card>
                            </Box>

                            <Box style={{ margin: '20px' }}>  <Card sx={{ minWidth: 275 }} style={{ margin: '20px 20px 20px 270px' }}>
                                <CardContent>
                                    <h3 style={{ fontSize: '17px' }}>Cost and Usage Graph</h3>
                                    <Box sx={{ display: 'flex', justifyContent: 'end', alignContent: 'center' }}>
                                        <ul className='chartHeader'>
                                            <li><button className={this.state.isBarSelected ? "activeb" : ""} onClick={this.renderBarGraphCos} ><BarChartIcon style={{ fontSize: '25px' }} /></button></li>
                                            {/* className="mobile__CTA--btn chart_menu"  */}
                                            <li><button className={this.state.isPieSelected ? "activeb" : ""} onClick={this.renderPieGraphCos}   ><PieChartIcon style={{ fontSize: '25px' }} /></button></li>
                                            <li><button className={this.state.isLineSelected ? "activeb" : ""} onClick={this.renderLineGraphCos}   ><SsidChartIcon style={{ fontSize: '25px' }} /></button></li>
                                        </ul></Box>
                                    <Box style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                                        {this.state.isBar && <Col className="column-chart-box">
                                            {/* <Chart
                                                options={this.state.optionBarCos}
                                                series={this.state.seriesBarCos}
                                                type="bar"
                                                width="800"
                                            /> */}
                                            <BarChart
                                                width={800}
                                                height={400}
                                                data={data2}
                                                margin={{
                                                    top: 20,
                                                    right: 30,
                                                    left: 20,
                                                    bottom: 5
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="t" />
                                                <YAxis />
                                                <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                                                {/* <Legend /> */}
                                                <Bar dataKey="AWS Backup" stackId="a" fill="#0071fb" />
                                                <Bar dataKey="AWS Budgets" stackId="a" fill="#82ca9e" />
                                                <Bar dataKey="AWS CloudTrail" stackId="a" fill="#897C80" />
                                                <Bar dataKey="AWS Config" stackId="a" fill="#A40E4C" />
                                                <Bar dataKey="AWS Cost Explorer" stackId="a" fill="#2C2C54" />
                                                <Bar dataKey="AWS Directory Service" stackId="a" fill="#ACC3A6" />
                                                <Bar dataKey="AWS Glue" stackId="a" fill="#F49D6E" />
                                                <Bar dataKey="AWS Key Management Service" stackId="a" fill="#ABDAFC" />

                                                <Bar dataKey="AWS Lambda" stackId="a" fill="#2A1E5C" />
                                                <Bar dataKey="AWS Secrets Manager" stackId="a" fill="#EE4266" />
                                                <Bar dataKey="AWS Security Hub" stackId="a" fill="#3CBBB1" />
                                                <Bar dataKey="Amazon DynamoDB" stackId="a" fill="#F2CD60" />
                                                <Bar dataKey="EC2 - Other" stackId="a" fill="#F2E863" />
                                                <Bar dataKey="Amazon Elastic Compute Cloud - Compute" stackId="a" fill="#F25757" />
                                                <Bar dataKey="Amazon Elastic Container Service for Kubernetes" stackId="a" fill="#61E8E1" />
                                                <Bar dataKey="Amazon Elastic File System" stackId="a" fill="#C490D1" />

                                                <Bar dataKey="Amazon Elastic Load Balancing" stackId="a" fill="#FFFC31" />
                                                <Bar dataKey="Amazon GuardDuty" stackId="a" fill="#5C415D" />
                                                <Bar dataKey="Amazon Managed Grafana" stackId="a" fill="#393E41" />
                                                <Bar dataKey="Amazon Redshift" stackId="a" fill="#7D8CA3" />
                                                <Bar dataKey="Amazon Relational Database Service" stackId="a" fill="#59544B" />
                                                <Bar dataKey="Amazon Route 53" stackId="a" fill="#36311F" />
                                                <Bar dataKey="Amazon Simple Notification Service" stackId="a" fill="#79A9D1" />
                                                <Bar dataKey="Amazon Simple Queue Service" stackId="a" fill="#BDD9BF" />

                                                <Bar dataKey="Amazon Simple Storage Service" stackId="a" fill="#E6C79C" />
                                                <Bar dataKey="Amazon Virtual Private Cloud" stackId="a" fill="#CDDFA0" />
                                                <Bar dataKey="AmazonCloudWatch" stackId="a" fill="#6FD08C" />
                                                <Bar dataKey="Tax" stackId="a" fill="#7B9EA8" />

                                                <Bar dataKey="AWS Data Transfer" stackId="a" fill="#725AC1" />
                                                <Bar dataKey="AWS CodeCommitl" stackId="a" fill="#95A78D" />
                                                <Bar dataKey="AWS CloudShell" stackId="a" fill="#48E5C2" />












                                            </BarChart>
                                            {/* <Chart
                                            width={700}
                                            height={400}
                                            chartType="ColumnChart"
                                            loader={<div>Loading Chart</div>}
                                            data={this.state.newtry}
                                            // options={this.state.columnoptionscos}
                                            options={{
                                                title: 'Cost on Services per month',
                                                colors: ['#0071fb','#fc3d03','#2bb36a','#1A9ED6', '#6e55aa', '#ff9461', '#c2579f', '#ffc952', '#f86982'],
                                                // bar: { groupWidth: "95%" },
                                            }}
                                            legendToggle
                                        /> */}
                                        </Col>}  {this.state.isPie && <Col className="column-chart-box">
                                            <Chart
                                                options={this.state.optionsCosPie}
                                                series={this.state.seriesCosPie}
                                                type="pie"
                                                width="600"
                                            />
                                            {/* <Chart
                                        width={800}
                                        height={'400px'}
                                        chartType="PieChart"
                                        loader={<div>Loading Chart</div>}
                                        data={this.state.checkValues}
                                        options={{
                                            title: 'Cost on Services per month',
                                            colors: ['#0071fb','#fc3d03','#2bb36a','#1A9ED6', '#6e55aa', '#ff9461', '#c2579f', '#ffc952', '#f86982'],
                                            bar: { groupWidth: "95%" },
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />  */}
                                        </Col>}
                                        {this.state.isLine && <Col className="column-chart-box">
                                            <Chart
                                                options={this.state.optionLineCos}
                                                series={this.state.seriesLineCos}
                                                type="line"
                                                width="650"
                                            //  height={650}
                                            />
                                            {/* <Chart
                                        width={800}
                                        height={'400px'}
                                        chartType="LineChart"
                                        loader={<div>Loading Chart</div>}
                                        data={this.state.checkValues}
                                        options={{
                                            title: 'Cost on Services per month',
                                            colors: ['#0071fb','#fc3d03','#2bb36a','#1A9ED6', '#6e55aa', '#ff9461', '#c2579f', '#ffc952', '#f86982'],
                                            bar: { groupWidth: "95%" },
                                        }}
                                        rootProps={{ 'data-testid': '1' }}
                                    />  */}
                                        </Col>}
                                    </Box>
                                </CardContent></Card></Box>
                            <Box style={{ margin: '20px' }}>  <Card sx={{ minWidth: 275 }} style={{ display: 'block', margin: '20px 20px 20px 270px' }}>
                                <CardContent >
                                    <h3 style={{ fontSize: '17px' }}>Cost and Usage Breakdown</h3>

                                    <TableContainer component={Paper} >
                                        <Table aria-label="customized table">
                                            <TableHead className='budgetReport_table'>
                                                <TableRow >
                                                    <StyledTableCell style={{ paddingLeft: '30px' }}>#</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS Backup</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS Budgets</StyledTableCell>

                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS CloudTrail</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS Config</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS Cost Explorer</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS Directory Service</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS Glue</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >AWS Key Management Service</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >TAX</StyledTableCell>


                                                    {/* <StyledTableCell style={{paddingLeft:'30px'}} align="right">{moment().subtract(2,'months').format("MMM YYYY")}</StyledTableCell> */}
                                                    {/* <StyledTableCell style={{paddingLeft:'30px'}} align="right">April 2023</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} align="right">March  2023</StyledTableCell>
            <StyledTableCell style={{paddingLeft:'30px'}} align="right">Febravary  2023</StyledTableCell> */}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data2.map((row, i) => (
                                                    <StyledTableRow key={i}>

                                                        <StyledTableCell >{row.t}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS Backup"]}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS Budgets"]}</StyledTableCell> 
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS CloudTrail"]}</StyledTableCell> 
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS Config"]}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS Cost Explorer"]}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS Directory Service"]}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS Glue"]}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["AWS Key Management Service"]}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row["Tax"]}</StyledTableCell>

                                                    </StyledTableRow>
                                                ))}
                                {/* {rowCosTotalData.map((row,i)=>{
                                      <StyledTableRow key={i}>

                                      <StyledTableCell >{row.labelCos}</StyledTableCell>
                                      <StyledTableCell style={{ paddingLeft: '5px', }} >{row.costCos}</StyledTableCell>


                                  </StyledTableRow>
                                })

                                } */}


                                            </TableBody>
                                        </Table>
                                    </TableContainer>



                                </CardContent></Card><br /><br /></Box>
                            <Box style={{ margin: '20px',display:'none' }}>
                                <Card sx={{ minWidth: 275 }} style={{ margin: '20px 20px 20px 270px' }}>
                                    <h3 style={{ fontSize: '17px', marginLeft: '20px' }}>Cost and Usage Breakdown</h3>
                                    <CardContent>
                                        {/* <p>{rowModCosLabel}</p> */}
                                        <div className="modCosContainer">
                                            <span className="modCosBlk">
                                                <div className="modCosCol">
                                                    <ul>

                                                        <span className="modCosHeader"><li>#</li></span>
                                                        <span>{rowModCosLabel}</span>

                                                    </ul>
                                                </div>
                                                <div className="modCosCol">
                                                    <ul>

                                                        <span className="modCosHeader"><li>{moment().subtract(0, 'months').format('MMM YYYY')}</li></span>
                                                        <span>{rowModCosCostcurrent}</span>

                                                    </ul>
                                                </div>
                                                <div className="modCosCol">
                                                    <ul>

                                                        <span className="modCosHeader"><li>{moment().subtract(1, 'months').format('MMM YYYY')}</li></span>
                                                        <span>{rowModCosCost}</span>

                                                    </ul>
                                                </div>
                                                <div className="modCosCol">
                                                    <ul>

                                                        <span className="modCosHeader"><li>{moment().subtract(2, 'months').format('MMM YYYY')}</li></span>
                                                        <span>{rowModCosCost2}</span>

                                                    </ul>
                                                </div>
                                                <div className="modCosCol">
                                                    <ul>

                                                        <span className="modCosHeader"><li>{moment().subtract(3, 'months').format('MMM YYYY')}</li></span>
                                                        <span>{rowModCosCost3}</span>

                                                    </ul>
                                                </div>
                                                <div className="modCosCol">
                                                    <ul>

                                                        <span className="modCosHeader"><li>{moment().subtract(4, 'months').format('MMM YYYY')}</li></span>
                                                        <span>{rowModCosCost4}</span>

                                                    </ul>
                                                </div>
                                                <div className="modCosCol">
                                                    <ul>

                                                        <span className="modCosHeader"><li>{moment().subtract(5, 'months').format('MMM YYYY')}</li></span>
                                                        <span>{rowModCosCost5}</span>

                                                    </ul>
                                                </div>

                                            </span>

                                        </div>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>



                        {/* <BootstrapTable /> */}

                    </>

                    }

                    {this.state.isBudgetsReportHtml && <>
                        <h5 style={{ fontSize: '17px', marginLeft: '18%' }}>Budget Report</h5>

                        <Box className='feature_card'>
                            <Card sx={{ minWidth: 275 }} style={{ width: '1000px' }}>
                                <CardContent >
                                    <div>
                                        <h5 style={{ fontSize: '20px' }}>Budget Reports Overview</h5>
                                    </div>
                                    <Box style={{ display: 'flex', justifyContent: 'end', alignItem: 'center', marginBottom: '10px' }}>
                                        <Button type="button"
                                            className="btn btn-primary filter_res"
                                            onClick={() => { this.handlereportDownload() }}

                                        >
                                            {this.state.saveRep && <CSVDownload {...csvBudReport} target="_blank" >
                                            </CSVDownload>} Download
                                        </Button>
                                        <Button style={{ marginLeft: '10px' }} onClick={() => { this.handleModal() }} className="btn btn-primary filter">Create Report</Button>
                                    </Box>

                                    <Modal show={this.state.show} className="my-modal-budget" onHide={() => this.handleModal()} >

                                        <Modal.Header closeButton style={{ fontSize: '17px' }}>
                                            Setting a budget report
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Col >
                                                <Form horizontal className="tags-config-form data-supplier-form" style={{ width: '90%' }}>
                                                    {/* <Col style={{ marginTop: "20px", marginBottom: "10px", fontSize: "24px", marginLeft: "0px" }}>Setting a budget report</Col> */}
                                                    <Col style={{ marginLeft: "0px" }}>Select the subset of budgets that you would like to include in your report, define the delivery frequency, and specify your email recipients. For example, you can create a report that monitors all budgets for linked accounts belonging to a particular business unit and have that report delivered each morning to that business unit’s engineering, product, and finance leaders.</Col>
                                                    <Col><hr></hr></Col>

                                                    <Col style={{ fontSize: "18px", marginLeft: "0px" }}> Budget Report Details</Col>
                                                    <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                                        <Col componentClass={ControlLabel} sm={3}>
                                                            <Col className="required-field">Report Name</Col>
                                                        </Col>
                                                        <Col sm={9}>
                                                            <FormControl name="name" type="text" placeholder="Your report name will be used as the subject line of your budget report email." defaultValue={this.state.budgetPayload.Name} onKeyUp={this.updatebudgetData} />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                                        <Col componentClass={ControlLabel} sm={3}>
                                                            <Col className="required-field">Select Budgets</Col>
                                                        </Col>
                                                        <Col sm={9}>
                                                            <Select
                                                                classNamePrefix="test"
                                                                options={this.state.budgetOptions}
                                                                isMulti
                                                                components={{
                                                                    Option
                                                                }}
                                                                value={this.state.currentSelectedBudget || []}

                                                                placeholder="Select"
                                                                onChange={this.handlebudgetChange.bind(this)}
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <Col style={{ marginTop: "10px" }}></Col>
                                                    <Col><hr></hr></Col>
                                                    <Col style={{ fontSize: "18px", marginLeft: "0px" }}>Delivery settings</Col>
                                                    <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                                        <Col componentClass={ControlLabel} sm={3}>
                                                            <Col className="required-field">Report frequency</Col>
                                                        </Col>
                                                        <Col sm={9}>
                                                            <Select
                                                                options={this.state.budgetReportFrequency}
                                                                placeholder="Select"
                                                                value={this.state.currentSelectedFrequencyType}
                                                                onChange={this.handleReportFrequencyChange.bind(this)}
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                                        <Col componentClass={ControlLabel} sm={3}>
                                                            <Col className="">Email Recipients</Col>
                                                        </Col>
                                                        <Col sm={9}>
                                                            <FormControl name="name" type="text" placeholder="Separate email addresses using commas" defaultValue={this.state.budgetPayload.email} onKeyUp={this.handleNameChange} />
                                                        </Col>
                                                    </FormGroup>
                                                    <Col style={{ marginBottom: "30px" }}></Col>
                                                    <FormGroup>
                                                        {/* <Col style={{ marginRight: '400px', marginTop: '100px' }}></Col>
                                <Col className="button-container" lg="4" md="4">
                                    <Button
                                        block
                                        bsStyle="success"
                                        variant="primary"
                                        type="submit"
                                        className="loginSubmitButton_primary add_datasource_button"
                                        style={{ marginLeft: '50px' }}
                                        onClick={() => { this.onCreateBudgetSubmit() }}
                                    >
                                        Create
                                    </Button>
                                </Col> */}
                                                        {/* <Col className="button-container" lg="12" md="12">
                                    <Button
                                        bsStyle="success"
                                        variant="primary"
                                        type="submit"
                                        className="loginSubmitButton_primary add_datasource_button"
                                        onClick={() => { this.loadRepBackView() }}
                                    >
                                        <span>Back</span>
                                    </Button>
                                </Col> */}
                                                    </FormGroup>
                                                </Form>
                                            </Col>
                                        </Modal.Body>
                                        <Modal.Footer >
                                            <Button className="btn btn-primary filter" onClick={() => { this.onCreateBudgetSubmit() }}>Create</Button>

                                            <Button style={{ marginLeft: '15px' }} onClick={() => { this.handleModal() }} className="btn btn-primary filter_res">Close</Button>

                                        </Modal.Footer>


                                    </Modal>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 700 }} aria-label="customized table" className='budgetReport_table'>
                                            <TableHead>
                                                <TableRow >
                                                    <StyledTableCell >Report Name</StyledTableCell>
                                                    <StyledTableCell >Frequency</StyledTableCell>
                                                    <StyledTableCell    >Budgets Included</StyledTableCell>
                                                    <StyledTableCell >Recepient(s)</StyledTableCell>
                                                    {/* <StyledTableCell>Applicable Products</StyledTableCell> */}
                                                    {/* <StyledTableCell >Forcasted</StyledTableCell> */}

                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <StyledTableRow key={row.name}>
                                                        <StyledTableCell component="th" scope="row">
                                                            <input type='checkbox' /> &nbsp; {row.name}
                                                        </StyledTableCell>
                                                        <StyledTableCell >{row.calories}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px', }} >{row.fat}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '5px' }} >{row.carbs}</StyledTableCell>
                                                        {/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.protein}</StyledTableCell> */}
                                                        {/* <StyledTableCell style={{paddingLeft:'35px'}} className='budget_table'>{row.forcasted}</StyledTableCell> */}

                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent></Card></Box>
                        <Col md={10} lg={10} className="flex">


                            <Col md={12} lg={12} className="bud-card" style={{ display: 'none' }}>
                                <Col style={{ marginBottom: "10px" }}></Col>
                                <Col>
                                    <p className="bud-p">Budgets Reports</p>
                                </Col>
                                <Col style={{ marginTop: "40px" }}>

                                    <Col md={2} lg={2} className="">
                                        <Col>
                                            <Button
                                                block
                                                bsStyle="success"
                                                variant="primary"
                                                type="button"
                                                className="addButton_primary"
                                                style={{ marginLeft: "600px", width: "130px" }}
                                                onClick={() => { this.handlereportDownload() }}
                                            >
                                                {this.state.saveRep && <CSVDownload {...csvBudReport} target="_blank" >
                                                </CSVDownload>} Download
                                            </Button>
                                        </Col>
                                    </Col>
                                    <Col md={2} lg={2} className="">
                                        <Col>
                                            <Button
                                                block
                                                bsStyle="success"
                                                variant="primary"
                                                type="submit"
                                                className="addButton_primary"
                                                style={{ marginLeft: "600px", width: "130px" }}
                                                onClick={() => { this.loadReportView() }}
                                            >
                                                <span>Create Report</span>
                                            </Button>
                                        </Col>
                                    </Col>

                                    <SimpleTable
                                        data={this.state.budgetReportDataList}
                                        columns={budReportcolumns}
                                        hideTableHeader={true}
                                        showPagination={true}
                                        pageSize={3}
                                        className="ingestion_detail_table cost_data_table tagspecifictable"
                                        rowOnClick={this.tableRowOnClick}
                                    />
                                </Col>
                            </Col>
                        </Col>
                    </>


                    }
                    {this.state.reportview &&
                        <Col className="budegetsReport_modal">
                            <Form horizontal className="tags-config-form data-supplier-form" style={{ width: '90%' }}>
                                <Col style={{ marginTop: "20px", marginBottom: "10px", fontSize: "24px", marginLeft: "0px" }}>Setting a budget report</Col>
                                <Col style={{ marginLeft: "0px" }}>Select the subset of budgets that you would like to include in your report, define the delivery frequency, and specify your email recipients. For example, you can create a report that monitors all budgets for linked accounts belonging to a particular business unit and have that report delivered each morning to that business unit’s engineering, product, and finance leaders.</Col>
                                <Col><hr></hr></Col>

                                <Col style={{ fontSize: "18px", marginLeft: "0px" }}> Budget Report Details</Col>
                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="required-field">Report Name</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl name="name" type="text" placeholder="Your report name will be used as the subject line of your budget report email." defaultValue={this.state.budgetPayload.Name} onKeyUp={this.updatebudgetData} />
                                    </Col>
                                </FormGroup>

                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="required-field">Select Budgets</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <Select
                                            classNamePrefix="test"
                                            options={this.state.budgetOptions}
                                            isMulti
                                            components={{
                                                Option
                                            }}
                                            value={this.state.currentSelectedBudget || []}

                                            placeholder="Select"
                                            onChange={this.handlebudgetChange.bind(this)}
                                        />
                                    </Col>
                                </FormGroup>

                                <Col style={{ marginTop: "10px" }}></Col>
                                <Col><hr></hr></Col>
                                <Col style={{ fontSize: "18px", marginLeft: "0px" }}>Delivery settings</Col>
                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="required-field">Report frequency</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <Select
                                            options={this.state.budgetReportFrequency}
                                            placeholder="Select"
                                            value={this.state.currentSelectedFrequencyType}
                                            onChange={this.handleReportFrequencyChange.bind(this)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup style={{ marginTop: '33px' }} controlId="name">
                                    <Col componentClass={ControlLabel} sm={3}>
                                        <Col className="">Email Recipients</Col>
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl name="name" type="text" placeholder="Separate email addresses using commas" defaultValue={this.state.budgetPayload.email} onKeyUp={this.handleNameChange} />
                                    </Col>
                                </FormGroup>
                                <Col style={{ marginBottom: "30px" }}></Col>
                                <FormGroup>
                                    <Col style={{ marginRight: '400px', marginTop: '100px' }}></Col>
                                    <Col className="button-container" lg="4" md="4">
                                        <Button
                                            block
                                            bsStyle="success"
                                            variant="primary"
                                            type="submit"
                                            className="loginSubmitButton_primary add_datasource_button"
                                            style={{ marginLeft: '50px' }}
                                            onClick={() => { this.onCreateBudgetSubmit() }}
                                        >
                                            Create
                                        </Button>
                                    </Col>
                                    <Col className="button-container" lg="12" md="12">
                                        <Button
                                            bsStyle="success"
                                            variant="primary"
                                            type="submit"
                                            className="loginSubmitButton_primary add_datasource_button"
                                            onClick={() => { this.loadRepBackView() }}
                                        >
                                            <span>Back</span>
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>}



                    {this.state.isCreditsHtml && <>
                        <p style={{ marginTop: "15px", fontSize: "22px", marginLeft: "270px" }}>Summary</p>
                        <Box className='feature_card'>

                            <Card sx={{ minWidth: 275 }} >
                                <CardContent >

                                    <div className='cardBlk'>
                                        <div className='cardBlk_lft'>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Credit Remaining
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                $20
                                            </Typography>
                                        </div>
                                        <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 186, 3)" }}> <span className='card_icon' > <CreditScoreIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                    </div>

                                </CardContent>

                            </Card>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent >

                                    <div className='cardBlk'>
                                        <div className='cardBlk_lft'>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Credit Used
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                $33.11
                                            </Typography>
                                        </div>
                                        <div className='cardBlk_rft' style={{ backgroundColor: "rgb(0, 113, 251)" }}> <span className='card_icon' > <ManageAccountsIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                    </div>

                                </CardContent>

                            </Card>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent >

                                    <div className='cardBlk'>
                                        <div className='cardBlk_lft'>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                Total Credit
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                $53.11
                                            </Typography>
                                        </div>
                                        <div className='cardBlk_rft' style={{ backgroundColor: "rgb(252, 61, 3)" }}> <span className='card_icon' > <WorkHistoryIcon className='card_icon' style={{ color: 'fff' }} /> </span> </div>

                                    </div>

                                </CardContent>

                            </Card>
                        </Box>

                        <Box className='feature_card'>
                            <Card sx={{ minWidth: 275 }} style={{ width: '1050px' }}>
                                <CardContent >
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ marginLeft: '50px' }}>
                                            <h5 style={{ fontSize: '17px' }}>Credit</h5>
                                        </div>
                                        <div style={{ display: 'flex', marginRight: '40px', marginBottom: '15px' }}>
                                            {/* <CreditDialog/> */}
                                            <Button className="btn btn-primary filter" onClick={() => this.handleModal()}> Redeem</Button>
                                            {/* <BudgetReportDialog/> */}
                                            {/* <Button variant="contained" color="error" style={{margin:'0 0 0 10px'}}> Delete</Button> */}
                                            {/* <BudgetBootstrapModal/> */}
                                        </div>
                                    </div>
                                    <TableContainer component={Paper} style={{ width: '950px', margin: '0 auto 20px auto' }}>
                                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                            <TableHead className='budgetReport_table'>
                                                <TableRow >
                                                    <StyledTableCell style={{ paddingLeft: '30px' }}>Expiration Date</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >Credit Name</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >Credit Used</StyledTableCell>
                                                    <StyledTableCell style={{ paddingLeft: '30px' }} >Credit Remaining</StyledTableCell>
                                                    {/* <StyledTableCell style={{paddingLeft:'30px'}} align="right">Febravary  2023</StyledTableCell> */}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rowsCredit.map((row) => (
                                                    <StyledTableRow key={row.name}>
                                                        <StyledTableCell component="th" scope="row" style={{ paddingLeft: '30px' }}>
                                                            {row.name}
                                                        </StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '30px' }}>{row.calories}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '30px' }}>{row.fat}</StyledTableCell>
                                                        <StyledTableCell style={{ paddingLeft: '30px' }}>{row.carbs}</StyledTableCell>
                                                        {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                
                                </CardContent></Card></Box>
                        <Modal show={this.state.show} className="my-modal-budget credit_dialog" onHide={() => this.handleModal()} >

                            <Modal.Header closeButton style={{ fontSize: '17px' }}>
                                Redeem credit

                            </Modal.Header>
                            <Modal.Body>
                                <Col>
                                    {/* <Col style={{ marginTop: "25px", fontSize: "24px", marginLeft: "230px" }}>Redeem credit</Col> */}
                                    <Col className="redeem-card">
                                        <p className="mod_header" style={{ marginTop: "20px", marginLeft: "20px", fontSize: "18px" }}>Promotion Code</p>
                                        <Form horizontal className="tags-config-form data-supplier-form" style={{ width: '90%' }}>
                                            <FormGroup controlId="name">
                                                <Col componentClass={ControlLabel} sm={1}>
                                                </Col>
                                                <Col sm={9}>
                                                    <FormControl name="name" type="text" placeholder="Enter the promotion code as it appears" defaultValue="" onKeyUp={this.updatebudgetData} />
                                                </Col>
                                            </FormGroup>

                                            <p className="mod_header" style={{ marginTop: "33px", marginLeft: "20px", fontSize: "18px" }}>Security Code</p>
                                            <FormGroup controlId="code">
                                                <Col componentClass={ControlLabel} sm={1}>
                                                </Col>
                                                <Col sm={9}>
                                                    <FormControl name="code" type="text" placeholder="Enter the security code as it appears" defaultValue="" onKeyUp={this.updatebudgetData} />
                                                </Col>
                                            </FormGroup>
                                            <p style={{ marginLeft: "20px", fontSize: "15px", color: 'rgba(0,0,0,0.6)' }}>By clicking "Redeem credit", you indicate that you read and agree to the terms and conditions.</p>
                                            <FormGroup>
                                                {/* <Col style={{ marginRight: '350px', marginTop: '200px' }}></Col>
                                                <Col className="button-container" lg="4" md="4">
                                                    <Button
                                                        block
                                                        bsStyle="success"
                                                        variant="primary"
                                                        type="submit"
                                                        className="loginSubmitButton_primary add_datasource_button"
                                                        style={{ marginLeft: '50px', marginTop: '50px' }}
                                                        onClick={() => { this.onRedeemSubmit() }}
                                                    >
                                                        Redeem
                                                    </Button>
                                                </Col> */}
                                                <Col className="button-container" lg="12" md="12">
                                                    {/* <Button
                                                        bsStyle="success"
                                                        variant="primary"
                                                        type="reset"
                                                        className="loginSubmitButton_primary add_datasource_button"
                                                        style={{ marginTop: '50px' }}
                                                        onClick={() => { this.loadCancelView() }}
                                                    >
                                                        <span>Cancel</span>
                                                    </Button> */}

                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Col>
                            </Modal.Body>
                            <Modal.Footer >
                                <Button onClick={() => { this.onRedeemSubmit() }} className="btn btn-primary filter"  >Redeem</Button>

                                <Button style={{ marginLeft: '15px' }} onClick={() => { this.handleModal() }} className="btn btn-primary filter_res">Close</Button>

                            </Modal.Footer>


                        </Modal>
                        <Col style={{ display: 'none' }}>


                            <Col md={12} lg={12} className="creditcost-card">
                                <Col md={2} lg={2} className="credit-card">
                                    <Col>
                                        <p className="subtitle card-info">Total amount remaining</p>
                                    </Col>
                                    <Col className="flex dollar-info">
                                        <Col className="">
                                            <p className="info"> $ 0</p>
                                        </Col>
                                    </Col>
                                </Col>
                                <Col md={2} lg={2} className="credit-card">
                                    <Col>
                                        <p className="subtitle card-info">Total amount used</p>
                                    </Col>
                                    <Col className="flex dollar-info">
                                        <Col className="">
                                            <p className="info"> $ 0</p>
                                        </Col>
                                    </Col>
                                </Col>
                                <Col md={2} lg={2} className="credit-card">
                                    <Col>
                                        <p className="subtitle card-info">Active credits</p>
                                    </Col>
                                    <Col className="flex dollar-info">
                                        <Col className="">
                                            <p className="info"> $ 0</p>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col> </Col>
                    </>
                    }
                    {this.state.isCreditsHtml && <Col md={10} lg={10} className="flex" style={{ display: 'none' }}>
                        <Col md={12} lg={12} className="">
                            <Col>
                                <p style={{ fontSize: "20px", marginTop: "20px", marginLeft: "23px" }}>Credits</p>
                            </Col>
                            <Col style={{ marginTop: "10px" }}>
                                <Col md={2} lg={2} className="">
                                    <Col>
                                        <Button
                                            block
                                            bsStyle="success"
                                            variant="primary"
                                            type="submit"
                                            className="addButton_primary"
                                            style={{ marginLeft: "850px" }}
                                            onClick={() => { this.loadView() }}
                                        >
                                            <span>Redeem</span>
                                        </Button>
                                    </Col>
                                </Col>

                                <SimpleTable
                                    data={this.state.creditList}
                                    columns={columns}
                                    hideTableHeader={true}
                                    showPagination={true}
                                    pageSize={3}
                                    className="ingestion_detail_table cost_data_table tagspecifictable"
                                    rowOnClick={this.tableRowOnClick}
                                />
                            </Col>
                        </Col>
                    </Col>}


                    {this.state.iscredit &&
                        <Col>
                            <Col style={{ marginTop: "25px", fontSize: "24px", marginLeft: "230px" }}>Redeem credit</Col>
                            <Col className="redeem-card">
                                <p style={{ marginTop: "20px", marginLeft: "20px", fontSize: "18px" }}>Promotion Code</p>
                                <Form horizontal className="tags-config-form data-supplier-form" style={{ width: '90%' }}>
                                    <FormGroup controlId="name">
                                        <Col componentClass={ControlLabel} sm={1}>
                                        </Col>
                                        <Col sm={9}>
                                            <FormControl name="name" type="text" placeholder="Enter the promotion code as it appears" defaultValue="" onKeyUp={this.updatebudgetData} />
                                        </Col>
                                    </FormGroup>

                                    <p style={{ marginTop: "33px", marginLeft: "20px", fontSize: "18px" }}>Security Code</p>
                                    <FormGroup controlId="code">
                                        <Col componentClass={ControlLabel} sm={1}>
                                        </Col>
                                        <Col sm={9}>
                                            <FormControl name="code" type="text" placeholder="Enter the security code as it appears" defaultValue="" onKeyUp={this.updatebudgetData} />
                                        </Col>
                                    </FormGroup>
                                    <p style={{ marginTop: "33px", marginLeft: "20px", fontSize: "18px" }}>By clicking "Redeem credit", you indicate that you read and agree to the terms and conditions.</p>
                                    <FormGroup>
                                        <Col style={{ marginRight: '350px', marginTop: '200px' }}></Col>
                                        <Col className="button-container" lg="4" md="4">
                                            <Button
                                                block
                                                bsStyle="success"
                                                variant="primary"
                                                type="submit"
                                                className="loginSubmitButton_primary add_datasource_button"
                                                style={{ marginLeft: '50px', marginTop: '50px' }}
                                                onClick={() => { this.onRedeemSubmit() }}
                                            >
                                                Redeem
                                            </Button>
                                        </Col>
                                        <Col className="button-container" lg="12" md="12">
                                            <Button
                                                bsStyle="success"
                                                variant="primary"
                                                type="reset"
                                                className="loginSubmitButton_primary add_datasource_button"
                                                style={{ marginTop: '50px' }}
                                                onClick={() => { this.loadCancelView() }}
                                            >
                                                <span>Cancel</span>
                                            </Button>

                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Col>
                    }


                </div>
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        loginDetails: state.get("loginDetails"),
        hitrustDetails: state.get("hitrustDetails"),
        costByTagDetails: state.get("costByTagDetails"),
        OSTagDetails: state.get("OSTagDetails"),
        allTagDetails: state.get("allTagDetails"),
        cosDetails: state.get("cosDetails"),
        createbudgetDetails: state.get("createbudgetDetails")

    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { showAndHideHitrustModal, searchCostByTag, searchOSbyTag, getListAllTags, costOnService, CreateBudget }
    )(CostV1)
);
