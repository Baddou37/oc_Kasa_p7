import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Properties from "../data/logements";

export default function Home() {
    return (
        <main className="display_home">
            <Banner />
            <div className="display_card">
                {Properties.map((logement) => (
                    <Card key={logement.id} property={logement} />
                ))}
            </div>
        </main>
    );
}
