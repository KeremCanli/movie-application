import React from "react";
import PropTypes from "prop-types";
import {Button, Form, Image, Message} from "semantic-ui-react";
import InlineError from "./InlineError.js";
class MovieForm extends React.Component
  {
    state={ID: "",
           Title: "",
           Cover: "",
           Errors: {}};
    static propTypes={MovieOperations: PropTypes.shape ({Movie: PropTypes.object.isRequired}).isRequired,
                      FAddMovieAll: PropTypes.func.isRequired,
                      FUpdateMovieUpdateAll: PropTypes.func.isRequired};    
    componentWillReceiveProps (nextProps)
      {
        if (this.props.MatchParamsID && nextProps.MovieOperations.Movie.title && nextProps.MovieOperations.Movie.cover) // FAddMovieAll dan sonra yapılan state boşaltma işleminin bastırılmaması için MatchParamID var mı kontrol ettirdik. FAddMovieAll sonra eklenen film Movie ye ekleniyor ve nextProps dan dolayı buradaki state e ID geliyor. 
          {
            this.setState ({ID: nextProps.MovieOperations.Movie._id,
                            Title: nextProps.MovieOperations.Movie.title,
                            Cover: nextProps.MovieOperations.Movie.cover});
          }
      }
    render ()
      {
        const Errors=this.state.Errors;
        return (<div>
                  <Form onSubmit={this.OnSubmit} loading={this.props.MovieOperations.Fetching}>
                    <Form.Field error={!!Errors.TitleMessage}>
                      <label>Title</label>
                      {Errors.TitleMessage && <InlineError Message={Errors.TitleMessage}/>}
                      <input name="Title" value={this.state.Title} onChange={this.HandleChange} placeholder="Title"/>
                    </Form.Field>
                    <Form.Field error={!!Errors.CoverMessage}>
                      <label>Cover URL</label>
                      {Errors.CoverMessage && <InlineError Message={Errors.CoverMessage}/>}
                      <input name="Cover" value={this.state.Cover} onChange={this.HandleChange} placeholder="Cover URL"/>
                    </Form.Field>
                    <Image src={this.state.Cover} className="clear-fix" size="small"/>
                    <Button type="submit">Submit</Button>
                    {this.props.MovieOperations.Error.response && <Message negative>
                                                                    <Message.Header>
                                                                      We're Sorry
                                                                      <p>A problem occurred about service.</p>
                                                                    </Message.Header>
                                                                  </Message>}
                  </Form>
                </div>);
      }
    HandleChange=(Event)=>
      {
        this.setState ({[Event.target.name]: Event.target.value});
      }
    OnSubmit=()=>
      {
        const Errors=this.Validate ();
        this.setState ({Errors: Errors});
        if (Object.keys (Errors).length===0)
          {
            if (!this.state.ID)
              {
                this.props.FAddMovieAll (this.state.Title, this.state.Cover);
                this.setState ({ID: "",
                                Title: "",
                                Cover: ""}); // Ard arda ekleme yaparken ID sıfırlanmazsa FUpdateMovieUpdateAll çalışıyor.
              }
            else
              {
                this.props.FUpdateMovieUpdateAll (this.state.ID, this.state.Title, this.state.Cover);
              }
          }
      }
    Validate=()=>
      {
        const Errors={};
        if (!this.state.Title)
          {
            Errors.TitleMessage="Can't be blank.";
          }
        if (!this.state.Cover)
          {
            Errors.CoverMessage="Can't be blank.";
          }
        return Errors;
      }
  }
export default MovieForm;