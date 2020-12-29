import React from 'react'
import { CourseNotesWrapper, DownloadImage,TopicNotes } from './course-notes.styles'
import downloadpdf from '../../Icons/pdf.svg'
import pdf from '../../TopicNotes.pdf'

function CourseNotesDownload(props) {
    return (
        <CourseNotesWrapper>
            <TopicNotes>TOPIC NOTES</TopicNotes>
            <DownloadImage><a href={props.download} download="TopicNotes.pdf"><img src={downloadpdf} width='40vw' height='50vw'/> </a></DownloadImage>            
        </CourseNotesWrapper>
    )
}

export default CourseNotesDownload
