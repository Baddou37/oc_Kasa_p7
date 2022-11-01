import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/CollapseAbout";
import Data from "../data/about";
import BGBanner from "../assets/about_bg_banner.png";

export default function About() {
    return (
        <main className="display_about">
            <Banner img={BGBanner} />
            <div className="display_collapses">
                {Data.map((props, index) => (
                    <div className="collapses" key={index}>
                        <Collapse key={index} props={props} />
                    </div>
                ))}
            </div>
        </main>
    );
}
