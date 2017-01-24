import React from 'react';
import { Link } from 'react-router';
import { Button, Icon } from 'antd';

const About = () => {
  return (
    <div>
      <p>This app has been made by Zoltan Biber.</p>
      <Link to={`/`}>
        <Button><Icon type="left" />Back</Button>
      </Link>
    </div>
  )
};

export default About;