import React from 'react'
import './HomeProgenitor.css'
import CapeImg from '../../assets/images/cape_1702.jpg'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'

const HomeProgenitor = () => {
    return (
        <div className="container py-5">
            <h2 className="pb-3">Where it All Began</h2>
            <div className="row d-flex align-items-center">
                <div className="col-sm-6">
                    <strong>Franz Jooste(n)</strong>
                        <p>
                            Born circa 1673 in Lippstadt, North Rhine-Westphalia, Germany, Franz boarded the Dutch East India Company ship, <em>den Dageraad</em>, on 18 January 1693, working as a sailor and boat companion. <em>den Dageraad</em> was shipwrecked off the coast of <em>Caep de Goede Hoop</em> (Cape Town) on the rocks on the west side of Robben Island in December 1693.
                        </p>
                        <p>
                            Simon van der Stel, the governor of the Cape Colony at the time, granted Franz a piece of land in 1705. Franz named the farm "Bartholomeus Klip" in commemoration of the St. Bartholomew’s Day massacre of the Huguenots in France in 1572.
                        </p>
                        <p>
                            Dubbed <em>Schurfde Franz</em> (meaning "scratched" or "mean Franz") by the local community, Franz met his wife Maria Mouton, who was 17 years his junior, circa 1706. They had two boys, Jacob and Francois.
                        </p>
                        <p>
                            Franz was murdered by his two slaves on 3 January 1714 at the command of his adulterous wife. They buried his body in a porcupine lair.
                        </p>
                        <div>
                            <ButtonPrimary url="/progenitor" text="Read More" />
                        </div>
                </div>
                <div className="col-sm-6">
                    <img src={CapeImg} alt="Cape Town in 1702" className="img-fluid" />
                </div>
            </div>

        </div>
    );
};

export default HomeProgenitor