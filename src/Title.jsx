
// eslint-disable-next-line react/prop-types
export default function Title({ locked }) {
    return (
      <h1 className="title">
        {/* Conditional rendering based on the 'locked' prop */}
        {locked ? ( 
          <span>
            Limit! Buy <b>Pro</b> for &gt;5 
          </span>
        ) : (
          "Fancy Counter" 
        )}
      </h1>
    );
  }

//Why use &gt; instead of just > ?

// Browsers are designed to interpret HTML code. If you were to directly type a > symbol within your HTML content, the browser might confuse it with the closing bracket of an HTML tag. The entity &gt; ensures the browser correctly displays the greater than symbol as part of the text content, not as part of the HTML structure.

  
  //Some common HTML entities include:
// &lt; for the less than symbol (<)
// &gt; for the greater than symbol (>)
// &amp; for the ampersand symbol (&)
  