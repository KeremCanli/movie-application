import React from "react";
import {Link} from "react-router-dom";
import {Card, GridColumn, Button, Icon, ButtonContent} from "semantic-ui-react";
const MovieCard=(props)=>
  {
    const Extra=(ID, FDeleteMovieAll, A)=>
      {
        return (<div className="ui two buttons">
                  <Button animated as={Link} to={`/movieoperations/${ID}`}>
                    <ButtonContent visible>Edit</ButtonContent>
                    <ButtonContent hidden>
                      <Icon name="right arrow"/>
                    </ButtonContent>
                  </Button>
                  <Button animated="vertical" onClick={()=>{FDeleteMovieAll (ID);}}>
                    <ButtonContent hidden>Delete</ButtonContent>
                    <ButtonContent visible>
                      <Icon name="trash"/>
                    </ButtonContent>
                  </Button>
                </div>);
      }
    return (<GridColumn>
              <Card image={props.Movie.cover} header={props.Movie.title} extra={Extra (props.Movie._id, props.FDeleteMovieAll)}></Card>
            </GridColumn>);
  }
export default MovieCard;