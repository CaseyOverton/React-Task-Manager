import React from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export const Breadcrumb = () => {
    return (
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
             Home
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Tasks
            </Link>
            <Typography color="textPrimary">News</Typography>
          </Breadcrumbs>
          <div>
  );
}
<div>   
            
 