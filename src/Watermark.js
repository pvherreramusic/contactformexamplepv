import React from "react";
import { Grid } from "semantic-ui-react";

const Footer = () => {
  
    return (
      <div>
        <Grid
          columns={4}
          textAlign="center"
          style={{
            backgroundColor: "white",
            position: "static",
          }}
        >
            <Grid.Column>
           Website developed and designed by P.V. Herrera Music and Tech 2021.
          </Grid.Column>

        </Grid>
  
        
      </div>
      
    );
  };
  
  export default Footer;