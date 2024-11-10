import React from 'react';
import "../css/Supplies.css";

const GroomingTools = () => (
    <section id="grooming-tools" className="supplies">
        <div className="text-container">
            <h3>Grooming Tools</h3>
            <p>A quality brush or comb is essential for keeping your dog's coat healthy. Depending on your dog’s breed, you may also need nail clippers, shampoo, and ear-cleaning supplies.</p>
        </div>
        <img src={require("../images/supplies/grooming-tools.png")} alt="Grooming Tools" />
    </section>
);

export default GroomingTools;
