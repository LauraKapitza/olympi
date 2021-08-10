import React from 'react';
import './Tags.css';
import Slugify from 'slugify';
import feedService from '../feed-service.js';
import close_button from '../../../assets/icons/close-button.svg';


const FORM = [
  'Perfect',
  'Very good',
  'Good',
  'Fair',
  'Well',
  'Let’s improve it!'
];

const OVERHEADPRESS = [
  'Poor bracing', 
  'Benched',
  'No lockout',
  'Arms forward', 
  'Head back', 
  'Legs bent',
  'Other',
  'Arms too wide',
  'Arms too narrow'
];

const DEADLIFT = [
  'Loose lats', 
  'No lockout',
  'Bar far from leg', 
  'Poor bracing',
  'Foot off floor', 
  'Hips shoot up',
  'Curved back',
  'Neck angle',
  'Other',
  'Arms too wide', 
  'Arms too narrow'
];
  
const SQUAT = [
  'Loose lats', 
  'Not parallel', 
  'Neck angle',
  'Butt wink', 
  'Control descent', 
  'Knee path', 
  'Poor bracing',
  'Other',
  'Arms too wide', 
  'Arms too narrow',
  'Bar placement wrong'
];
  
const BENCHPRESS = [
  'Butt off bench', 
  'No arch',
  'No leg drive',
  'Poor bracing', 
  'No chest touch', 
  'Arms too wide', 
  'Arms too narrow',
  'Other'
];

const EXERCISES_TAGS_MAPPING = {
  'Overhead press': OVERHEADPRESS,
  'Deadlift': DEADLIFT,
  'Squat': SQUAT,
  'Bench press': BENCHPRESS
}
class Tags extends React.Component {

  state = {
    tagsFeedbackOpen: false,
    error: null,
    video_id: this.props.video_id,
    exercise: this.props.exercise,
    tags: []
  }

  handleSubmit = (event) => {
    event.preventDefault();

    feedService.addTagsVideo(this.state)
      .then((response) => {
        this.setState({error: ""});
        // close the tags form
        this.toggle();
      })
      .catch(err => this.setState({error: err.response.data.message}))
    ;
  }

  toggle = () => {
    this.setState({tagsFeedbackOpen: !this.state.tagsFeedbackOpen})
  }

  getSelectedTagsList = () => {
    let data = []
    for (let tag_key in this.props.tags) {
      const list_user_by_tag = this.props.tags[tag_key];
      if(list_user_by_tag.length > 0){
        data.push(tag_key)
      }
    }
    return data
  }

  getFeedbackTagsList = () => {
    return EXERCISES_TAGS_MAPPING[this.props.exercise];
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    if(value === "on"){
      // add tag that are checked to the list
      this.setState({
        tags: [...this.state.tags, name]
      })
    }
    else{
      // remove uncheck tag from the list
      this.setState({tags: this.state.tags.filter(function(tag) { 
        return tag !== name
      })});
    }
    
  } 


  render() {
    return (
      <>
      <div className="tags-wrapper">
        {this.getSelectedTagsList().map(tag => {
          return(
            <div key={tag} className="tag" data-tag={Slugify(tag, {lower:true})}>{tag}</div>
          )
        })}
      </div>

      <button className="add-tag-button" onClick={this.toggle}>Add feedback</button>

      {this.state.tagsFeedbackOpen && 
        <div className="tags-feedback">
          <a onClick={this.toggle}><img src={close_button} alt="Close upload form"></img></a>
          <h2>Tag this exercice</h2>
         <form id="tagsFeebackForm" onSubmit={this.handleSubmit} className="tags-form">

            {/* for an error */}
            {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}

            <div className="tags-checkbox-wrapper">
                {this.getFeedbackTagsList().map(tag => {
                  return(
                    <label className="tag" key={Slugify(tag, {lower:true})} htmlFor={Slugify(tag, {lower:true})} data-tag={Slugify(tag, {lower:true})}>
                      {tag}
                      <input type="checkbox" id={Slugify(tag, {lower:true})} name={tag} onChange={this.handleChange} />
                    </label>
                  )
                })}
            </div>

            <p className="form-submit">
              <input type="submit" value="Validate" />
            </p>

          </form>
        </div>

      }

      </>
    )
  }
};

export default Tags;