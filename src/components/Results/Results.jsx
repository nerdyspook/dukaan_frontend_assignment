import { ReactComponent as Clear } from "../../assets/images/cross.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import SloganCard from "../SloganCard/SloganCard";
import "./Results.css";

const Results = () => {
  const sloganResults = [
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `coziness building for tomorrow`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `Review the facts cool is the best.`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `coziness building for tomorrow`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `Review the facts cool is the best.`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `coziness building for tomorrow`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `Review the facts cool is the best.`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `coziness building for tomorrow`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `Review the facts cool is the best.`,
    `There is no Sore it will Not Heal, No cool it will not Subdue.`,
    `Review the facts cool is the best.`,
  ];
  return (
    <div className="results container">
      <div className="top">
        <h1 className="heading">Free slogan maker</h1>
        <p>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>

        <form action="">
          <label htmlFor="word-input">Word for your slogan</label>
          <input type="text" id="word-input" />
          <Clear className="clear" />
          <input type="submit" value="Generate slogans" />
        </form>
      </div>
      <div className="center">
        <div className="center_top">
          <h2 className="heading results_heading">
            We have generated 1,023 slogans for “cozy”
          </h2>
          <button>Download all</button>
        </div>
        <ul className="slogans">
          {sloganResults.map((slogan, index) => (
            <SloganCard key={index} slogan={slogan} />
          ))}
        </ul>
      </div>
      <div className="bottom flex">
        <button className="prev hidden">
          <Arrow className="prev_arrow" /> &nbsp; Prev
        </button>
        <div className="pages">1 &nbsp; 2 &nbsp; 3 &nbsp; ... &nbsp; 21</div>
        <button className="next">
          Next &nbsp; <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Results;
