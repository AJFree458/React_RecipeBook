import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site for the creation and viewing of recipes and meal plans"
        />
        <link rel="manifest" href="./manifest.json" />
        <link rel="icon" href="./favicon.ico" />
      </Helmet>
    </div>
  );
};

export default Head;
