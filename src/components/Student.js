import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux" 
import { useParams } from "react-router-dom"
import { 
VictoryBar, 
VictoryChart,
VictoryAxis,
VictoryGroup,
VictoryLabel,
VictoryZoomContainer,
VictoryLegend, } from "victory"

const Student= () => {
    const studenten = useSelector((state) => state.studenten)
    const {student: naam} = useParams()
    const student = studenten.find((student) => student.studentNaam===naam)

    const opdrachten= student.opdrachten.map((opdracht) =>{
        const naam = opdracht.opdracht
        const opdrachtNaam = naam.length > 6 ? naam.substr(0, naam.indexOf("")) : naam

        return{
            opdracht: opdrachtNaam,
            moeilijk: parseInt(opdracht.uitdaging),
            leuk: parseInt(opdracht.plezier),
        }
    })
    const [externalMutations, setExternalMutations] = useState(undefined)
    
    const removeMutation= () => {setExternalMutations([{externalMutations: undefined}]);
}

    const checkChecked = (event) => {
        const checkbox = event.target
        if (checkbox.checked) {
            setExternalMutations([
                {
                    childName: event.target.value,
                    target: ["data"],
                    eventKey: "all",
                    mutation: () => ({style: {opacity: 0}}),
                    callback: removeMutation,
                },
            ])
        } else {
            setExternalMutations([
                {
                    childName: event.target.value,
                    target: ["data"],
                    eventKey: "all",
                    mutation: () => 
                        event.target.value === "moeilijk"
                        ? {style: {opacity: 1, fill: "rgb(73, 151, 216)"}}
                        : { style: { opacity: 1, fill: "rgb(218, 161, 247)"}},
                        callback: removeMutation,
                },
                {
                    childName: event.target.value,
                    target: ["data"],
                    eventKey: "all",
                    mutation: () => 
                        event.target.value === "leuk"
                        ? {style: {opacity: 1, fill: "rgb(73, 151, 216)"}}
                        : { style: { opacity: 1, fill: "rgb(218, 161, 247)"}},
                        callback: removeMutation,
                }
            ])
        }
    }

    return (
        <div>
            <div className="chart">
                <h3 className="studentName">
                    Beoordeling van {student.studentNaam}
                </h3>
                <VictoryChart
                    domainPadding={{ x: 5 }}
                    domain={{ y: [0, 5] }}
                    width={1200}
                    containerComponent={
                        <VictoryZoomContainer zoomDimension="x" allowPan={false} allowZoom={false} zoomDomain={{x: [0, 20]}} />
                    }
                    externalEventMutations= {externalMutations}>
                        <VictoryLegend
                            x={60}
                            y={-10}
                            title="legenda"
                            centerTitle
                            orientation="horizontal"
                            gutter={30}
                            style={{
                                border: {stroke:"rgb(21, 104, 172"},
                                title: {fontSize: 20},
                            }}
                            data={[
                                {name: "moeilijk", symbol: { fill: "rgb(218, 161, 247)" } },
                                {name: "leuk", symbol: {fill:"rgb(73, 151, 216)"}},
                                
                            ]}
                        />

                        <VictoryGroup offset={5}>
                            <VictoryBar
                                name="moeilijk"
                                data={opdrachten}
                                x="opdracht"
                                y="moeilijk"
                                style={{
                                    data: {
                                        fill: "rgb(73, 151, 216)",
                                    }
                                }}
                                alignment="end"
                                barRatio={5}
                                barWidth={5}
                            />
                        </VictoryGroup>
                        <VictoryGroup offset={5}>
                            <VictoryBar
                                name="leuk"
                                data={opdrachten}
                                x="opdracht"
                                y="leuk"
                                style={{
                                    data: {
                                        fill: "rgb(218, 161, 247)",
                                    }
                                }}
                                alignment="start"
                                barRatio={5}
                                barWidth={5}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
                        />

                        <VictoryAxis 
                        tickFormat={[1, 2, 3, 4, 5]}
                        tickValues={[1, 2, 3, 4, 5]}
                        dependentAxis
                        />

                    </VictoryChart>
            </div>
            <div className="selectWhatToShow">
                <input 
                type="checkbox"
                onClick={checkChecked}
                value="moeilijk"
                />
            Verwijder de gemiddelde scores: Leuk
            <br />
                <input 
                type="checkbox"
                onClick={checkChecked}
                value="leuk"
                />
            Verwijder de gemiddelde scores: Moeilijk
            </div>
        </div>
    )
}

export default Student