import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import '../App.css'

export const Breadcrumb = () => {
    return (
        <div class='breadCrumb'>
          <Breadcrumbs aria-label="breadcrumb">
          <li>
              <Link color="black">Home</Link>
            </li>
            <li>
              <Link color="black">About</Link>
            </li>
            <li>
              <Link color="black">Best Practices</Link>
            </li>
          </Breadcrumbs>
        </div>
  );
}
     export default Breadcrumb