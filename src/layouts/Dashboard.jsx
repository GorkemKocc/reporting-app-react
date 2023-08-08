import React from 'react'
import Navi from './Navi'
import ReportList from '../pages/ReportList'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom';
import ReportDetail from '../pages/ReportDetail';
import { Container } from 'semantic-ui-react'
import AddMenu from './AddMenu';

export default function Dashboard() {
    return (
        <div>
            <AddMenu />
            <Container style={{ width: '1450px' }} className="main">



                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Navi />
                        </Grid.Column>
                        <Grid.Column width={14}>
                            <Routes>
                                <Route path="/" element={<ReportList />} exact />
                                <Route path="/reports" element={<ReportList />} exact />
                                <Route path="/reports/:id" element={<ReportDetail />} />
                            </Routes>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
