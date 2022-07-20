// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const dnaBases = ["A", "T", "C", "G"];
      const randBase = returnRandBase();
      const randBaseInx = dnaBases.indexOf(randBase);
      dnaBases.splice(randBaseInx, 1);
      const mutateBase = dnaBases[Math.floor(Math.random() * 3)];
      const updatedDna = this.dna.map((base) => {
        if (base === randBase) {
          return mutateBase;
        }
        return base;
      });

      this.dna = updatedDna;
      return this.dna;
    },
    compareDNA(pAquer) {
      const otherDNA = pAquer.dna;
      let diff = 0;
      for (let i = 0; i < 15; i++) {
        if (otherDNA[i] !== this.dna[i]) {
          diff++;
        }
      }
      const diffPercent = ((diff / 15) * 100).toFixed(2);
      return `specimen #1 and specimen #2 have ${diffPercent}% DNA in common`;
    },
    willLikelySurvive() {
      const survivalBases = this.dna.filter(
        (val) => val !== "C" && val !== "G"
      ).length;

      const survivalRate = ((survivalBases / 15) * 100).toFixed(2);

      if (survivalRate >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
}
const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());
const test3 = pAequorFactory(3, mockUpStrand());
const test4 = pAequorFactory(4, mockUpStrand());
const test5 = pAequorFactory(5, mockUpStrand());
const test6 = pAequorFactory(6, mockUpStrand());
const test7 = pAequorFactory(7, mockUpStrand());
const test8 = pAequorFactory(8, mockUpStrand());
const test9 = pAequorFactory(9, mockUpStrand());
const test10 = pAequorFactory(10, mockUpStrand());
const test11 = pAequorFactory(11, mockUpStrand());
const test12 = pAequorFactory(12, mockUpStrand());
const test13 = pAequorFactory(13, mockUpStrand());
const test14 = pAequorFactory(14, mockUpStrand());
const test15 = pAequorFactory(15, mockUpStrand());
const test16 = pAequorFactory(16, mockUpStrand());
const test17 = pAequorFactory(17, mockUpStrand());
const test18 = pAequorFactory(18, mockUpStrand());
const test19 = pAequorFactory(19, mockUpStrand());
const test20 = pAequorFactory(20, mockUpStrand());
const test21 = pAequorFactory(21, mockUpStrand());
const test22 = pAequorFactory(22, mockUpStrand());
const test23 = pAequorFactory(23, mockUpStrand());
const test24 = pAequorFactory(24, mockUpStrand());
const test25 = pAequorFactory(25, mockUpStrand());
const test26 = pAequorFactory(26, mockUpStrand());
const test27 = pAequorFactory(27, mockUpStrand());
const test28 = pAequorFactory(28, mockUpStrand());
const test29 = pAequorFactory(29, mockUpStrand());
const test30 = pAequorFactory(30, mockUpStrand());

console.log(test2.compareDNA(test1));
