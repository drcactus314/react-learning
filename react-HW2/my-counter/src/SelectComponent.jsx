import React from "react";
import styled from "styled-components";
import {useState} from "react";

const Select = styled.select`
width: 12em;
height: 2em;
font-size: 1em;
`


export const SelectComponent = (props) => {
   



  return (
    <div>
      <Select name="" id=""value={props.state} onChange={(e)=>props.changeState(e.target.value)}>
        <option value="Active">Active</option>
        <option value="Closed">Closed</option>
        <option value="All">All</option>
      </Select>
    </div>
  );
};
