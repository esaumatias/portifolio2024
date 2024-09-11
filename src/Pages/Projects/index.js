import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { projectsList } from '../../Data/ProjectsData';
import "./Projects.css";

const Projects = () => {
  return (
    <div className="containerProjects" id="projects">
      <div className="title">Projetos</div>

      <div className="containerCards">
        {projectsList.map((item, idx) => (
          <Card sx={{ maxWidth: 300, minHeight: 430, justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }} key={idx}>
           <div>
           <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.img}
            />
            <CardContent s>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </CardContent>
           </div>
            <CardActions>
              {item.deploy && (
                <Button size="small" href={item.deploy} target="blank">Deploy</Button>
                
              )}
              <Button size="small" href={item.git} target="blank">Git</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
