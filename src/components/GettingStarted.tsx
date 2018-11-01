import * as React from 'react';
import { Link } from 'react-router-dom';

const Usage = () => (
    <React.Fragment>
        <div className="info mw7 center">
            <h1 className="mb3">Getting started</h1>
            <p>
                Figicons ships with over 100+ default icons, designed in Figma. However, Figicons was built from the ground up to support
                your own Figma-designed icons. With just a few steps, you can create a customized Figicon set to use on your site right
                away.
            </p>
            <br />
            <p>
                If you intend to use the default Figicons as they are, you can skip <strong>Getting started</strong> and just head over to{' '}
                <Link to={'/usage'}>Usage</Link> instead.
            </p>
        </div>
        <div className="mw7 center">
            <section>
                <h2>Setting up Figma</h2>
                <p>It all starts from your</p>
            </section>

            <section>
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

            <section>
                <h2>Setting up icon options</h2>
                <p>
                    You can customize the look of your icons by editing the icon attributes file. By default, icons are 24x24 and have a 2px
                    rounded stroke.
                </p>
            </section>

            <section>
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

                <p className="mt3">
                    When done, check out <Link to={'/usage'}>how to use</Link> your icon components on your site.
                </p>
            </section>
        </div>
    </React.Fragment>
);

export default Usage;
