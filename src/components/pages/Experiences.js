import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';


const experiences = () => {
  return (
    <div>
      <VerticalTimeline lineColor = "#3e497a">
        <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          date="August 2021 - Expected Graduation May 2025"
          icon = {<SchoolIcon/>}
          iconStyle = {{background: "#8198FD", color: "#fff"}}
        >
          <h3 className = "vertical-timeline-element-title">University of Florida, Gainesville Florida</h3>
          <h4 className = "vertical-timeline-element-subtitle">Bachelor's Degree</h4>
          <p>Computer Science, Digital Arts and Sciences Minor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className = "vertical-timeline-element--work"
          date="May 2023 - July 2023"
          icon = {<WorkIcon/>}
          iconStyle = {{background: "#8198FD", color: "#fff"}}
        >
          <h3 className = "vertical-timeline-element-title">Wateroam, Singapore, Singapore</h3>
          <h4 className = "vertical-timeline-element-subtitle">Software Engineering Intern</h4>
          <p>TBD</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className = "vertical-timeline-element--work"
          date="May 2023 - July 2023"
          icon = {<VolunteerActivismIcon/>}
          iconStyle = {{background: "#8198FD", color: "#fff"}}
        >
          <h3 className = "vertical-timeline-element-title">Volunteer</h3>
          <h4 className = "vertical-timeline-element-subtitle">Volunteer</h4>
          <p>Volunteer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default experiences