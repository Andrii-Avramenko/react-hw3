import PropTypes from 'prop-types';
import "./Statistics.css"

export const Statistics = props => {
  function bgColor() {
    return `rgb(${Math.floor(Math.random() * 192)}, ${Math.floor(Math.random() * 192)}, ${Math.floor(Math.random() * 192)})`;
  }

  return (
    <section className="statistics">
      {props.title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {props.stats.map(stat => {
          return (
            <li
              key={stat.id}
              className="item"
              style={{backgroundColor: bgColor()}}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage"> {stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );    
};

Statistics.propTypes = {
    username: PropTypes.string,
    stats: PropTypes.array.isRequired
} 