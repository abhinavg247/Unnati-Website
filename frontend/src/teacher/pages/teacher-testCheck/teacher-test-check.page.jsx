import React, { Component } from 'react';
import TeacherCafeDetails from '../../components/cafe-details/cafe-details.component'
import CustomPaginationActionsTable from '../../components/teacher-testCheck/table-component';
import {
  CafeDetailWrapper,
  Body,
  NavBar,
  SideNav,
  CafeTableWrapper,
  TableWrapper,
} from './teacher-test.-check.styles';


class TeacherTestCheck extends React.Component {
  render() {
    const {
    } = this.props;

    return (
      <>
        <NavBar>NAVBAR</NavBar>
        <Body>
          <SideNav>SIDENAV</SideNav>
          <CafeTableWrapper>
            <CafeDetailWrapper>
              <TeacherCafeDetails></TeacherCafeDetails>
            </CafeDetailWrapper>
            <TableWrapper>
              <CustomPaginationActionsTable></CustomPaginationActionsTable>
            </TableWrapper>
          </CafeTableWrapper>
        </Body>
      </>
    );
  }
}

export default TeacherTestCheck;