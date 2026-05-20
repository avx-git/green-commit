import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const markCommit = (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, { "--date": date }).push();
  });
};

// Pattern for "AVX" on contribution graph
const avxPattern = [
  // Letter A (x: 0-4)
  [0,1],[0,2],[0,3],[0,4],[0,5],
  [1,0],[1,5],
  [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],
  [3,0],[3,5],
  [4,0],[4,5],
  
  // Letter V (x: 7-11)
  [7,0],[7,1],[7,2],[7,3],[7,4],
  [8,1],[8,2],[8,3],[8,4],
  [9,2],[9,3],[9,4],
  [10,3],[10,4],
  [11,0],[11,1],[11,2],[11,3],[11,4],
  
  // Letter X (x: 14-18)
  [14,0],[14,4],[14,5],
  [15,1],[15,4],
  [16,2],[16,3],
  [17,1],[17,4],
  [18,0],[18,4],[18,5],
];

let commitIndex = 0;

const makePatternCommits = () => {
  if(commitIndex >= avxPattern.length) {
    console.log("Pattern complete! Pushing to GitHub...");
    return simpleGit().push();
  }
  
  const [x, y] = avxPattern[commitIndex];
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date: date };
  console.log(`Creating commit at (${x}, ${y}): ${date}`);
  
  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, { "--date": date }, () => {
      commitIndex++;
      makePatternCommits();
    });
  });
};

makePatternCommits();

// Change 1186696925

// Change 1920523915

// Change 1941035689

// Change 523724807

// Change 1246489405

// Change 1677935370

// Change 1856218208

// Change 582076197

// Change 1013845766

// Change 1025200945

// Change 948832446

// Change 355011927

// Change 752299526

// Change 1398801474

// Change 288633177

// Change 2023309109

// Change 424404510

// Change 1612542475

// Change 1914347548

// Change 1871415864

// Change 136251307

// Change 1508383731

// Change 1673907984

// Change 690144081

// Change 98909379

// Change 434460733

// Change 315091206

// Change 2106712479

// Change 1405656193

// Change 873815396

// Change 767356135

// Change 374336374

// Change 1687569075

// Change 1297228172

// Change 1378758911

// Change 2062204793

// Change 779041967

// Change 1473364159

// Change 925000415

// Change 17085033

// Change 341856747

// Change 1898285628

// Change 406093880

// Change 1694611198

// Change 1417466475

// Change 1791660868

// Change 1853600726

// Change 1598316537

// Change 1616634233

// Change 1938747778

// Change 877960834

// Change 1893514929

// Change 981466341

// Change 2139777676

// Change 920445127

// Change 1743941138

// Change 299966991

// Change 26112106

// Change 423584484

// Change 503182265

// Change 2009395374

// Change 653558221

// Change 1985696578

// Change 203944492

// Change 1526764437

// Change 424973577

// Change 2117559021

// Change 1836715086

// Change 1217201989

// Change 2024280358

// Change 1489179473

// Change 773093635
