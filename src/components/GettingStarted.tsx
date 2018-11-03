import * as React from 'react';
import { Link } from 'react-router-dom';
import Figicon from '../reactcomponent/Figicon';
import Highlight from 'react-highlight';

const Usage = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">Building custom icons</h1>
            <p>
                Figicons ships with over 100+ default icons, designed in Figma. However, Figicons was built from the ground up to support
                your own Figma-designed icons. With just a few steps, you can create a customized Figicon set to use on your site right
                away.
            </p>
            <br />

            <div className="alert dark">
                Skip this tutorial if you intend to use the default Figicons set
                <Figicon name="arrow-right" />
            </div>
        </div>
        <div className="mw7 center">
            <section className="desc">
                <h2>Setting up the Figma API</h2>
                <p>First, we'll need to get a communication going with Figma. What we'll need:</p>
                <div className="snippet">
                    <small>a figma file URL</small>
                    <code className="gray">
                        https://www.figma.com/file/<span className="white">eIOdDEWeiHETuccK5xpfNhEc</span>
                    </code>
                </div>
                <div className="snippet">
                    <small>figmapi.json</small>
                    <Highlight className="json">{`{ 
    "fileKey": "eIOdDEWeiHETuccK5xpfNhEc",
    "token": "4562-826234b4-7936-4bf6-9d52-464da724bbdb"
}`}</Highlight>
                </div>
            </section>

            <section className="desc">
                <h2>Fetching &amp; building your iconset</h2>
                <p>
                    We make it effortless for you at this point to fetch, clean, optimize &amp; setup all your icons in a neat little file.
                    All you need to do is run the following command in Terminal:
                </p>
                <div className="flex mt3">
                    <code className="white">
                        <span className="gray">$</span> yarn run build
                    </code>
                </div>
            </section>

            <section className="desc">
                <h2>Setting up icon options</h2>
                <p>
                    Figicons ship with a default setup for how SVG icons will be rendered. Each property will be added as an attribute to
                    the component that'll be created. Now is the time to add the style to your icons (these properties can be overriden
                    later on).
                </p>
                <div className="snippet">
                    <small>iconAttributes.json</small>
                    <Highlight className="json">{`{
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "height": 24,
    "stroke": "currentColor",
    "stroke-width": 2,
    "stroke-linejoin": "round",
    "stroke-linecap": "round",
    "width": 24
}`}</Highlight>
                </div>
            </section>

            <section className="desc">
                <h2>Preparing for usage</h2>
                <p>
                    It's time to bundle your custom icons into React &amp; Web Components (you can use whichever). Run the below command in
                    Terminal to package everything.
                </p>
                <div className="flex mt3">
                    <code className="white">
                        <span className="gray">$</span> yarn run bundle
                    </code>
                </div>
            </section>

            <div className="alert dark">
                <span>
                    Next, add your icon components to your site
                    <Figicon name="arrow-right" />
                </span>
                <Link className="button" to={'/usage'}>
                    Usage
                </Link>
            </div>
        </div>
    </React.Fragment>
);

export default Usage;
