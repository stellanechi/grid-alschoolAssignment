import { range } from './utils';

function Grid({ numRows, numCols }) {
  const grid = range(numRows, numCols);

  return (
    <div className="grid">
      {grid.map((row) => {
        return (
          <div className="row" key={crypto.randomUUID()}>
            {row.map((col) => {
              return (
                <div className="col" key={crypto.randomUUID()}>
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
