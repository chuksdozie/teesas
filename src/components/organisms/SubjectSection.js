import React, { Fragment } from "react";
import styled from "styled-components";
import SubjectCard from "../molecules/SubjectCard";
import { subjectBodyGradients } from "../../resources/gradients/gradients";
import MainText from "../atoms/MainText";

const data = [
  subjectBodyGradients.hausa,
  subjectBodyGradients.igbo,
  subjectBodyGradients.english,
  subjectBodyGradients.maths,
  subjectBodyGradients.science,
  subjectBodyGradients.yoruba,
  subjectBodyGradients.bini,
  subjectBodyGradients.tiv,
  subjectBodyGradients.french,
];

const SubjectSection = () => {
  return (
    <Fragment>
      <Divy>
        <MainText
          color={"black"}
          margin="0 3px"
          text={"Subjects"}
          fontWeight={700}
        />
      </Divy>

      <Div>
        {data.map((i, k) => (
          <SubjectCard
            key={k}
            text={i.text}
            src={i.icon}
            main={i.body}
            semi={i.semi}
          />
        ))}
      </Div>
    </Fragment>
  );
};

export default SubjectSection;

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px 0;
`;

const Divy = styled.div`
  width: 80%;
  display: flex;
  justify-content: left;
  padding: 30px 30px 10px;
`;
