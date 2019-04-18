import PolishNotation from "../PolishNotation";

export default function layout() {
    const npi = new PolishNotation;
    return (`
        <div>
            <h3>Polish Notation</h3>
            ${npi.render()}
        </div>
    `);
}