import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Growth Hacking"
        />
        <ProgressBar
          percent={95}
          text="No code"
        />
        <ProgressBar
          percent={70}
          text="Gatsby"
        />
        <ProgressBar
          percent={90}
          text="Webflow"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Applications"
        />
        <ProgressBar
          percent={90}
          text="Graphic design"
        />
        <ProgressBar
          percent={78}
          text="UI/UX"
        />
        <ProgressBar
          percent={80}
          text="Wordpress"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
