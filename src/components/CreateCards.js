import Card from "./Cards";
import data from "../flashcards";
import React, {useState} from "react";

function CreateCards() {
    const [index, setIndex] = useState(1)
    const current = data[index]
    return (
        <div>
            <Card
                key={current.id}
                vocab={current.vocab}
                content={current.content}
            />
            <div className={"card-container__button-wrapper"}>
                <button
                    className={"card__prev-button"}
                    onClick={() => {
                        if ((index - 1) !== 0)
                            setIndex(index - 1)
                    }
                    }>
                    Prev Card
                </button>
                <button
                    className={"card__next-button"}
                    onClick={() => {
                        if ((index + 1) !== current.id.length)
                            setIndex(index + 1)
                    }
                    }>
                    Next Card
                </button>
            </div>
        </div>
    );
}


export default CreateCards