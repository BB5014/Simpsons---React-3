import React from "react";

const Quote = props => (
    <figure>
    <img src={props.image} alt={props.character}/>
    <figcaption>
      <blockquote>
        Shoplifting is a victimless crime, like punching someone in the dark.
      </blockquote>
      <cite>Nelson Muntz</cite>
    </figcaption>
  </figure>
);

export default Quote;

/*Teste cette écriture alternative qui est très souvent utilisée. On y déstructure l'objet props directement en plusieurs variables quote,character et image.*/
/*import React from "react";

const Quote = ({ quote, character, image }) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default Quote;*/