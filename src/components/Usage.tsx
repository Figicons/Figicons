import * as React from 'react';
import Figicon from '../reactcomponent/Figicon';
import Highlight from 'react-highlight';

const Usage = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">Usage</h1>
            <p>
                React &amp; Web Components are automagically generated based on the Figicons config. Import the required script and use the
                components immediately, simple.
            </p>
            <br />

            <div className="alert dark">
                <span>
                    <Figicon name="lightbulb" className="mr2" /> To use your own Figma icons, check out how to build custom icons
                </span>
                <Figicon name="arrow-right" />
            </div>
        </div>

        <div className="mw7 center">
            <section className="desc">
                <h2>Using the React component</h2>
                <p>
                    The <code>Figicon</code> React component renders a specific icon based on its <code>name</code> prop. Additional inline
                    props added to the component will override and attributes that are set.
                </p>

                <h3>Installation</h3>
                <p>Add Figicons to your project by either installing with NPM or Yarn:</p>
                <div className="snippet">
                    <small>NPM</small>
                    <code className="white">
                        <span className="grey">$</span> npm install figicons
                    </code>
                </div>
                <div className="snippet">
                    <small>Yarn</small>
                    <code className="white">
                        <span className="grey">$</span> yarn add figicons
                    </code>
                </div>

                <h3>Markup</h3>
                <p>
                    Import Figicons, then use the basic component where the <code>name</code> attribute is required, or override certain
                    attributes inline with the component as props:
                </p>
                <div className="snippet">
                    <small>JS</small>
                    <Highlight className="js">{"import Figicon from 'figicons/react';"}</Highlight>
                </div>
                <div className="snippet">
                    <small>Basic Usage</small>
                    <Highlight className="html">{'<Figicon name="heart" />'}</Highlight>
                </div>
                <div className="snippet">
                    <small>Attribute overrides</small>
                    <Highlight className="html">{'<Figicon name="heart" stroke="red" strokeWidth={1} />'}</Highlight>
                </div>
            </section>

            <section className="desc">
                <h2>Using Web Components</h2>
                <p>
                    Web Components are a simple and performant way to include Figicons on your site. Each icon is dynamically loaded into
                    its component and comes with support for attribute overrides.
                </p>

                <h3>Installation</h3>
                <p>
                    Add a <code>script</code> tag to the <code>&lt;head /&gt;</code> of your markup which points to the CDN or relative path
                    of the Figicon Web Component:
                </p>
                <div className="snippet">
                    <small>
                        HTML <span>cdn</span>
                    </small>
                    <Highlight className="html">{'<script src="https://cdn.com/figicons/webcomponent.min.js"></script>'}</Highlight>
                </div>
                <div className="snippet">
                    <small>
                        HTML <span>relative</span>
                    </small>
                    <Highlight className="html">{'<script src="/path/to/figicons/webcomponent.min.js"></script>'}</Highlight>
                </div>

                <h3>Markup</h3>
                <p>
                    Use the basic component where the <code>name</code> attribute is required, or override certain attributes:
                </p>
                <div className="snippet">
                    <small>Basic Usage</small>
                    <Highlight className="html">{'<fig-icon name="heart"></fig-icon>'}</Highlight>
                </div>
                <div className="snippet">
                    <small>Attribute overrides</small>
                    <Highlight className="html">{'<fig-icon name="heart" size="16"></fig-icon>'}</Highlight>
                </div>
            </section>
        </div>
    </React.Fragment>
);

export default Usage;
