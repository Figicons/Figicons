import * as React from 'react';
import { Link } from 'react-router-dom';

const Usage = () => (
    <React.Fragment>
        <main className="mw7 center">
            <h1 className="mb3">Usage</h1>
            <p>
                Figicons is a completely open-source icon set over 100+ icons designed in Figma and comes with it's own Figma API parser
                built in. To find out how you can use your own icon set, check out <Link to={'how'}>how it works</Link>.
            </p>
        </main>

        <div className="mw7 center">
            <h2>Using Web Components</h2>
            <p>
                Web Components are a simple and performant way to include Figicons on your site. Each icon is dynamically loaded into its
                component and comes with support for attribute overrides.
            </p>
        </div>

        <div className="mw7 mt4 center">
            <h2>Using the React component</h2>
            <p>
                Web Components are a simple and performant way to include Figicons on your site. Each icon is dynamically loaded into its
                component and comes with support for attribute overrides.
            </p>
        </div>
    </React.Fragment>
);

export default Usage;
