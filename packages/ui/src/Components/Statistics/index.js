import React from "react";
import { Pie, Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

function Statistics({ projects }) {

    const sdgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const backgroundColors = [
        "#F7464A",
        "#46BFBD",
        "#FDB45C",
        "#949FB1",
        "#4D5360",
        "#AC64AD"
    ]
    const hoverBackgroundColors = [
        "#FF5A5E",
        "#5AD3D1",
        "#FFC870",
        "#A8B3C5",
        "#616774",
        "#DA92DB"
    ]

    const dataPie = {
        labels: projects.map(project => project.name),
        datasets: [
            {
                data: projects.map(project => project.budget),
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors
            }
        ]
    }

    const dataRadar = {
        labels: sdgs,
        datasets: projects.map((project, index) => {
            return {
                label: project.name,
                backgroundColor: backgroundColors[index],
                borderColor: hoverBackgroundColors[index],
                data: sdgs.map(sdg => {
                    if (project.sdgs.includes(sdg)) return 1;
                    else return 0;
            })
            }
        })
    }


    return (
        <MDBContainer>
            <h5> Funding </h5>
            <Pie data={dataPie} options={{ responsive: true }} />

            <h5> SDGs </h5>
            <Radar data={dataRadar} options={{ responsive: true }} />
        </MDBContainer>
    )

}

export default Statistics;