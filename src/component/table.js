import React, { Component } from "react";
import { Table, Input, Icon, Button, Modal } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPeople, editPeople } from "../actions/people";

class TableOne extends Component {
  state = {
    newNameValue: null,
    newAgeValue: null,
    newStreetValue: null,
    newBuildingValue: null,
    newNumberValue: null,
    newAddressValue: null,
    newCompanyValue: null,
    newGenderValue: null,
    visible: false,
    nameValue: null,
    nameIndex: null,
    streetValue: null,
    streetIndex: null,
    ageValue: null,
    ageIndex: null,
    buildingValue: null,
    buildingIndex: null,
    numberValue: null,
    numberIndex: null,
    companyAddressValue: null,
    companyAddressIndex: null,
    companyNameValue: null,
    companyNameIndex: null,
    genderValue: null,
    genderIndex: null,
    data: this.props.people,
  };

  saveValue = (record, text, field) => {
    switch (field) {
      case "name": {
        record.name = text;
        this.props.editPeople(record);
        this.setState({ nameIndex: null });
        break;
      }
      case "street": {
        record.street = text;
        this.props.editPeople(record);
        this.setState({ streetIndex: null });
        break;
      }
      case "age": {
        record.age = text;
        this.props.editPeople(record);
        this.setState({ ageIndex: null });
        break;
      }
      case "building": {
        record.building = text;
        this.props.editPeople(record);
        this.setState({ buildingIndex: null });
        break;
      }
      case "number": {
        record.number = text;
        this.props.editPeople(record);
        this.setState({ numberIndex: null });
        break;
      }
      case "companyAddress": {
        record.companyAddress = text;
        this.props.editPeople(record);
        this.setState({ companyAddressIndex: null });
        break;
      }
      case "companyName": {
        record.companyName = text;
        this.props.editPeople(record);
        this.setState({ companyNameIndex: null });
        break;
      }
      case "gender": {
        record.gender = text;
        this.props.editPeople(record);
        this.setState({ genderIndex: null });
        break;
      }
      default:
        break;
    }
  };

  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      let data = {
        key: i,
        name: "John Brown",
        age: i + 1,
        street: "Lake Park",
        building: "C",
        number: 2035,
        companyAddress: "Lake Street 42",
        companyName: "SoftLake Co",
        gender: "M",
      };
      this.props.addPeople(data);
    }
  }
  render() {
    let columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 200,
        fixed: "left",
        filters: [
          {
            text: "Joe",
            value: "Joe",
          },
          {
            text: "John",
            value: "John",
          },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        render: (text, record, index) => {
          return (
            <div
              onClick={() =>
                this.setState({ nameIndex: index, nameValue: text })
              }
            >
              {this.state.nameIndex === index ? (
                <Input
                  onPressEnter={() =>
                    this.saveValue(record, this.state.nameValue, "name")
                  }
                  value={this.state.nameValue}
                  onChange={e => this.setState({ nameValue: e.target.value })}
                  prefix={<Icon type="user" />}
                />
              ) : (
                text
              )}
            </div>
          );
        },
      },
      {
        title: "Other",
        children: [
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
            width: 200,
            sorter: (a, b) => a.age - b.age,
            render: (text, record, index) => {
              return (
                <div
                  onClick={() =>
                    this.setState({ ageIndex: index, ageValue: text })
                  }
                >
                  {this.state.ageIndex === index ? (
                    <Input
                      onPressEnter={() =>
                        this.saveValue(record, this.state.ageValue, "age")
                      }
                      value={this.state.ageValue}
                      onChange={e =>
                        this.setState({ ageValue: e.target.value })
                      }
                    />
                  ) : (
                    text
                  )}
                </div>
              );
            },
          },
          {
            title: "Address",
            children: [
              {
                title: "Street",
                dataIndex: "street",
                key: "street",
                width: 200,
                render: (text, record, index) => {
                  return (
                    <div
                      onClick={() =>
                        this.setState({ streetIndex: index, streetValue: text })
                      }
                    >
                      {this.state.streetIndex === index ? (
                        <Input
                          onPressEnter={() =>
                            this.saveValue(
                              record,
                              this.state.streetValue,
                              "street",
                            )
                          }
                          value={this.state.streetValue}
                          onChange={e =>
                            this.setState({ streetValue: e.target.value })
                          }
                        />
                      ) : (
                        text
                      )}
                    </div>
                  );
                },
              },
              {
                title: "Block",
                children: [
                  {
                    title: "Building",
                    dataIndex: "building",
                    key: "building",
                    width: 100,
                    render: (text, record, index) => {
                      return (
                        <div
                          onClick={() =>
                            this.setState({
                              buildingIndex: index,
                              buildingValue: text,
                            })
                          }
                        >
                          {this.state.buildingIndex === index ? (
                            <Input
                              onPressEnter={() =>
                                this.saveValue(
                                  record,
                                  this.state.buildingValue,
                                  "building",
                                )
                              }
                              value={this.state.buildingValue}
                              onChange={e =>
                                this.setState({ buildingValue: e.target.value })
                              }
                            />
                          ) : (
                            text
                          )}
                        </div>
                      );
                    },
                  },
                  {
                    title: "Door No.",
                    dataIndex: "number",
                    key: "number",
                    width: 100,
                    render: (text, record, index) => {
                      return (
                        <div
                          onClick={() =>
                            this.setState({
                              numberIndex: index,
                              numberValue: text,
                            })
                          }
                        >
                          {this.state.numberIndex === index ? (
                            <Input
                              onPressEnter={() =>
                                this.saveValue(
                                  record,
                                  this.state.numberValue,
                                  "number",
                                )
                              }
                              value={this.state.numberValue}
                              onChange={e =>
                                this.setState({ numberValue: e.target.value })
                              }
                            />
                          ) : (
                            text
                          )}
                        </div>
                      );
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Company",
        children: [
          {
            title: "Company Address",
            dataIndex: "companyAddress",
            key: "companyAddress",
            render: (text, record, index) => {
              return (
                <div
                  onClick={() =>
                    this.setState({
                      companyAddressIndex: index,
                      companyAddressValue: text,
                    })
                  }
                >
                  {this.state.companyAddressIndex === index ? (
                    <Input
                      onPressEnter={() =>
                        this.saveValue(
                          record,
                          this.state.companyAddressValue,
                          "companyAddress",
                        )
                      }
                      value={this.state.companyAddressValue}
                      onChange={e =>
                        this.setState({ companyAddressValue: e.target.value })
                      }
                    />
                  ) : (
                    text
                  )}
                </div>
              );
            },
          },
          {
            title: "Company Name",
            dataIndex: "companyName",
            key: "companyName",
            render: (text, record, index) => {
              return (
                <div
                  onClick={() =>
                    this.setState({
                      companyNameIndex: index,
                      companyNameValue: text,
                    })
                  }
                >
                  {this.state.companyNameIndex === index ? (
                    <Input
                      onPressEnter={() =>
                        this.saveValue(
                          record,
                          this.state.companyNameValue,
                          "companyName",
                        )
                      }
                      value={this.state.companyNameValue}
                      onChange={e =>
                        this.setState({ companyNameValue: e.target.value })
                      }
                    />
                  ) : (
                    text
                  )}
                </div>
              );
            },
          },
        ],
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        fixed: "right",
        width: 100,
        render: (text, record, index) => {
          return (
            <div
              onClick={() =>
                this.setState({ genderIndex: index, genderValue: text })
              }
            >
              {this.state.genderIndex === index ? (
                <Input
                  onPressEnter={() =>
                    this.saveValue(record, this.state.genderValue, "gender")
                  }
                  value={this.state.genderValue}
                  onChange={e => this.setState({ genderValue: e.target.value })}
                />
              ) : (
                text
              )}
            </div>
          );
        },
      },
    ];

    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          bordered
          size="middle"
          scroll={{ x: "130%", y: 240 }}
        />
        <Button type="primary" onClick={this.showModal}>
          Добавить Пользователя
        </Button>
        <Modal
          title="Добавить"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            className="mb-5"
            prefix={<Icon type="user" />}
            placeholder="Name"
            value={this.state.newNameValue}
            onChange={e => this.setState({ newNameValue: e.target.value })}
            required
          />
          <Input
            value={this.state.newAgeValue}
            onChange={e => this.setState({ newAgeValue: e.target.value })}
            className="mb-5"
            placeholder="Age"
            required
          />
          <Input
            value={this.state.newStreetValue}
            onChange={e => this.setState({ newStreetValue: e.target.value })}
            className="mb-5"
            placeholder="Street"
            required
          />
          <Input
            value={this.state.newBuildingValue}
            onChange={e => this.setState({ newBuildingValue: e.target.value })}
            className="mb-5"
            placeholder="Building"
            required
          />
          <Input
            value={this.state.newNumberValue}
            onChange={e => this.setState({ newNumberValue: e.target.value })}
            className="mb-5"
            required
            placeholder="Door"
          />
          <Input
            value={this.state.newAddressValue}
            onChange={e => this.setState({ newAddressValue: e.target.value })}
            className="mb-5"
            placeholder="Address"
            required
          />
          <Input
            value={this.state.newCompanyValue}
            onChange={e => this.setState({ newCompanyValue: e.target.value })}
            className="mb-5"
            placeholder="CompanyName"
            required
          />
          <Input
            value={this.state.newGenderValue}
            onChange={e => this.setState({ newGenderValue: e.target.value })}
            className="mb-5"
            required
            placeholder="Gender"
          />
        </Modal>
      </div>
    );
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.props.addPeople({
      name: this.state.newNameValue,
      age: this.state.newAgeValue,
      street: this.state.newStreetValue,
      building: this.state.newBuildingValue,
      number: this.state.newNumberValue,
      companyAddress: this.state.newAddressValue,
      companyName: this.state.newCompanyValue,
      gender: this.state.newGenderValue,
    });
    this.setState({
      visible: false,
      newNameValue: null,
      newAgeValue: null,
      newStreetValue: null,
      newBuildingValue: null,
      newNumberValue: null,
      newAddressValue: null,
      newCompanyValue: null,
      newGenderValue: null,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
}

const mapStateToProps = state => ({
  ...state,
  people: state.peopleReducer.people,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addPeople, editPeople }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableOne);
