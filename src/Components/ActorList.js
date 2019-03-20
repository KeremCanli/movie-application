import React from "react";
import PropTypes from "prop-types";
import {Card, Grid, GridColumn} from "semantic-ui-react";
const ActorList=(props)=>
  {
    return (<div>
              <Grid stackable columns={3}>
                {props.Actors.map ((Actor, Key)=><GridColumn key={Key}>
                                                  <Card image={Actor.Photo} header={Actor.Name} extra={Actor.Description}></Card>
                                                 </GridColumn>)}
              </Grid>
            </div>);
  }
ActorList.protoTypes={Actors: PropTypes.array.isRequired};
export default ActorList;