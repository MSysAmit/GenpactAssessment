/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Selector from '../../components/Selector';
import EmpData from '../../components/EmployeeData';
import Button from './Button';

/* eslint-disable react/prefer-stateless-function */

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataInfo: ['HR', 'Engineer'],
      HR: [1, 2, 3, 4, 5],
      Engineer: [6, 7, 8, 9, 10],
      userId: '',
      department: '',
      departmentLSt: [],
      empLst: [],
      some: [],
      showData: false,
    };
  }

  clearHandler = () => {
    console.log('Clear handler');
    this.setState({
      showData: false,
    });
  };

  handleChange = e => {
    this.setState({
      userId: e.target.value,
    });
  };

  handleChangeDepartmet = e => {
    this.setState({
      department: e.target.value,
    });

    let empLst = (this.state[e.target.value] || []).map((v, idx) => (
      <option value={v} key={idx}>
        {v}
      </option>
    ));
    empLst.unshift(<option />);
    console.log('EMPList', empLst);
    this.setState({
      empLst: empLst,
    });
  };

  componentDidMount() {
    this.getDetailsHandler();
  }

  getDetailsHandler() {
    // console.log('getdetailsHandler', e);
    fetch(`https://reqres.in/api/users/${this.state.userId}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ some: response.data });
      });
    if (this.state.userId) {
      this.setState({
        showData: true,
      });
    }
  }

  // getDetailsHandler = e => {
  //   console.log('getdetailsHandler', e);
  //   fetch(`https://reqres.in/api/users/${e}`)
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({ some: response.data });
  //     });
  //   if (this.state.userId) {
  //     this.setState({
  //       showData: true,
  //     });
  //   }
  // };

  render() {
    const some = this.state.some;
    const showData = this.state.showData;

    let p = [];
    this.state.departmentLSt = this.state.dataInfo.map((v, idx) => (
      <option value={v} key={idx}>
        {v}
      </option>
    ));
    this.state.departmentLSt.unshift(<option />);

    return (
      <div>
        <div style={{ textAlign: 'center', margin: '4% 22%', display: 'flex' }}>
          <div>
            <Selector
              value={this.state.department}
              onChangeHandler={this.handleChangeDepartmet}
              options={this.state.departmentLSt}
              label="Departments : "
            />
          </div>
          <div>
            <Selector
              value={this.state.employeeId}
              onChangeHandler={this.handleChange}
              options={this.state.empLst}
              label="Employee Id: "
            />
          </div>
          <Button
            onClick={() => {
              this.getDetailsHandler(this.state.userId);
            }}
          >
            Get Details
          </Button>
          <Button onClick={this.clearHandler}>Clear</Button>
        </div>
        {showData ? (
          <EmpData
            avatar={some.avatar}
            id={some.id}
            first_name={some.first_name}
            last_name={some.last_name}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}
