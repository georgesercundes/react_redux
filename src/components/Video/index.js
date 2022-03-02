import { connect } from "react-redux";
import React from "react";

const Video = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong>Módulo: {activeModule.title}</strong>
      <strong>Aula: {activeLesson.title}</strong>
    </div>
  );
};

export default connect((state) => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Video);
