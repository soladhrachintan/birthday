// BirthdayForm.js
import React, { useState } from "react";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BirthdayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        fatherName: "",
        village: "",
        dob: null,
        amount: "",
        image: null,
      },
      datePickerOpen: false,
    };
  }

  handleChange = (e) => {
    const { name, value, files } = e.target;

    // Handle image file separately
    if (name === "image") {
      this.setState((prevState) => ({
        formData: { ...prevState.formData, [name]: files[0] },
      }));
    } else {
      this.setState((prevState) => ({
        formData: { ...prevState.formData, [name]: value },
      }));
    }
  };

  handleDateChange = (date) => {
    this.setState((prevState) => ({
      formData: { ...prevState.formData, dob: date },
      datePickerOpen: false,
    }));
  };

  toggleDatePicker = () => {
    this.setState((prevState) => ({
      datePickerOpen: !prevState.datePickerOpen,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.formData);
  };

  render() {
    return (
      <Container maxWidth="sm" className="formContainer">
        <Paper elevation={3} className="formPaper">
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label="Father's Name"
              fullWidth
              name="fatherName"
              value={this.state.formData.fatherName}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              label="Village Name"
              fullWidth
              name="village"
              value={this.state.formData.village}
              onChange={this.handleChange}
              margin="normal"
            />
            <div>
              <TextField
                label="Date of Birth"
                fullWidth
                onClick={this.toggleDatePicker}
                value={
                  this.state.formData.dob
                    ? this.state.formData.dob.toDateString()
                    : ""
                }
                margin="normal"
              />
              {this.state.datePickerOpen && (
                <DatePicker
                  selected={this.state.formData.dob}
                  onChange={this.handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  isClearable
                  placeholderText="Select Date of Birth"
                  className="date-picker"
                />
              )}
            </div>
            <TextField
              type="file"
              fullWidth
              name="image"
              onChange={this.handleChange}
              inputProps={{ accept: "image/*" }}
              margin="normal"
            />
            <TextField
              label="Amount"
              fullWidth
              name="amount"
              value={this.state.formData.amount}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Generate Card
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default BirthdayForm;
