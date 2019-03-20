import React from "react";
import PropTypes from "prop-types";
const InlineError=(props)=>
  {
    return (<div className="inline-error">
              {props.Message}
            </div>);
  }
InlineError.propTypes={Message: PropTypes.string.isRequired};
export default InlineError;