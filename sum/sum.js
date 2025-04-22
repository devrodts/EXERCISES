
export const sum = (a, b) => a + b;

export const sumAsync = async (a, b) => a + b;

export const sumWithDelay = (a, b) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(a + b);
  }, 1000);
});

export const sumWithDelayAndError = (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (a < 0 || b < 0) {
      reject(new Error('Negative numbers are not allowed'));
    } else {
      resolve(a + b);
    }
  }, 1000);
});

export const sumWithDelayAndErrorAsync = async (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        reject(new Error('Negative numbers are not allowed'));
      } else {
        resolve(a + b);
      }
    }, 1000);
  });
};


// With OOP
export class Sum{
    a;
    b;
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    sum(a,b){
        this.a = a;
        this.b = b;
        return this.a + this.b;
    }
    async sumAsync(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.a + this.b);
            }, 1000);
        });
    }
}

