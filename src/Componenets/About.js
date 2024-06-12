

export default function About(props) {

  

  

  


  return (
    <div
      className="accordion container my-3"
      id="accordionExample"
      style={props.myStyle}
      
    >
      <h2>About us</h2>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={props.myStyle}
          >
            <strong>Text Capitalization and Lowercasing</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={props.myStyle}>
            Capitalize Text: Quickly convert all characters in the text to
            uppercase. Lowercase Text: Easily transform all characters in the
            text to lowercase.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={props.myStyle}
          >
            <strong>Text Editing Tools</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={props.myStyle}>
            Copy Text: Instantly copy the processed text to your clipboard with a
            single click. Clear Text: Remove all text from the input field to
            start fresh. Remove White Spaces: Eliminate all extra spaces from
            the text, including leading, trailing, and multiple spaces between
            words.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={props.myStyle}
          >
            <strong>Text Statistics</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={props.myStyle}>
            Word Count: Get an immediate count of the number of words in the
            text. Character Count: Obtain the total number of characters in the
            text, including spaces and punctuation.
          </div>
        </div>
      </div>
      
    </div>
  );
}
