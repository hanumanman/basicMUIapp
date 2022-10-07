import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { CardActionArea, Chip, Divider } from "@mui/material";

export default function OutlinedCard(job) {
  const skills = job.job.skills;
  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined" sx={{ borderRadius: 5 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom>{job.job.title}</Typography>
            <Divider />
            {skills.slice(0, 4).map((skill) => (
              <Chip
                color="success"
                size="small"
                label={skill}
                sx={{ margin: 1 }}
              />
            ))}
            <Typography mt={1}> {job.job.description} </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
