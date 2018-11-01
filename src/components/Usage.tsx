import * as React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';

const Usage = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">Usage</h1>
            <p>
                Figicons is a completely open-source icon set over 100+ icons designed in Figma and comes with it's own Figma API parser
                built in. To find out how you can use your own icon set, check out <Link to={'how'}>how it works</Link>.
            </p>
        </div>

        <div className="mw7 center">
            <section>
                <h2>Using Web Components</h2>
                <p>
                    Web Components are a simple and performant way to include Figicons on your site. Each icon is dynamically loaded into
                    its component and comes with support for attribute overrides.
                </p>
                <h3>Markup</h3>
                <div className="snippet">
                    <small>Basic Usage</small>
                    <Highlight className="html">{'<fig-icon name="heart"></fig-icon>'}</Highlight>
                </div>
            </section>

            <section>
                <h2>Using the React component</h2>
                <p>
                    Web Components are a simple and performant way to include Figicons on your site. Each icon is dynamically loaded into
                    its component and comes with support for attribute overrides.
                </p>
                <h3>Markup</h3>
                <div className="snippet">
                    <small>Basic Usage</small>
                    <Highlight className="html">{'<Figicon name="heart" />'}</Highlight>
                </div>
                <div className="snippet">
                    <small>Attribute overrides</small>
                    <Highlight className="html">{'<Figicon name="heart" stroke="red" strokeWidth={1} />'}</Highlight>
                </div>
            </section>
        </div>
    </React.Fragment>
);

export default Usage;
