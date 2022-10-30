import React from "react";
import Banner from "../components/Banner";
import CollapseAP from "../components/CollapseAP";
import AboutData from "../data/about";
import BGBanner from "../assets/about_bg_banner.png";

export default function About() {
    return (
        <main className="display_about">
            <Banner img={BGBanner} />
            <div className="display_collapsesAP">
                {AboutData.map((props) => (
                    <div className="collapsesAP">
                        <CollapseAP key={props.id} props={props} />
                    </div>
                ))}
            </div>
        </main>
    );
}
