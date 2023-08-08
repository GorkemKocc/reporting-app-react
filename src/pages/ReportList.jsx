import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import ReportService from '../services/reportService';
import { Link } from 'react-router-dom';

export default function ReportList() {

    const [reports, setReports] = useState([]);

    useEffect(()=>{
        let reportService = new ReportService();
        reportService.getReports().then(result => setReports(result.data))
    },[])
    
    
    return (
        <div className="custom">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Dosya No</Table.HeaderCell>
                        <Table.HeaderCell>Hasta Adı</Table.HeaderCell>
                        <Table.HeaderCell>Hasta Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>TC Kimlik No</Table.HeaderCell>
                        <Table.HeaderCell>Tanı Başlığı</Table.HeaderCell>
                        <Table.HeaderCell>Tanı Detayı</Table.HeaderCell>
                        <Table.HeaderCell>Rapor Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Rapor Resmi</Table.HeaderCell>
                        <Table.HeaderCell>Laborant Adı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        reports.map((report) => (
                            <Table.Row key={report.id}>
                                <Table.Cell><Link to={`/reports/${report.fileNumber}`}>{report.fileNumber}</Link></Table.Cell>
                                <Table.Cell>{report.patientFirstName}</Table.Cell>
                                <Table.Cell>{report.patientLastName}</Table.Cell>
                                <Table.Cell>{report.patientIdNumber}</Table.Cell>
                                <Table.Cell>{report.diagnosisTitle}</Table.Cell>
                                <Table.Cell>{report.diagnosisDetails}</Table.Cell>
                                <Table.Cell>{report.reportDate}</Table.Cell>
                                <Table.Cell>{report.photoUrl}</Table.Cell>
                                <Table.Cell>{report.laborantFirstName} {report.laborantLastName}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='9'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
