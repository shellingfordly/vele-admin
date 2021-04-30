
// class NumberRate {

// }

// function NumberRate(value) {
//   const res = { value }
//   return new Proxy(res, {
//     get(target,key){
//       const value =  Reflect.get(target, key)
//       return value + '%'
//     }
//   })
// }
// const rate = NumberRate(200)

// console.log(rate, rate.value);


// class Int extends Number {
  // _value = 0

  // constructor(val) {
  //   super(val)
  //   this._value = val
  // }

  // get value() {
  //   return Number(this._value.toFixed(2))
  // }
// }


// const a = new Int(12.144019890)


// console.log(a.format(a.value));

// class Int extends Number{

// }

// const a = new Int(1)
// const b = new Number(1)
// const c =  Number(1)


// console.log(a);
// console.log(b.valueOf(), c);
// console.log(a+b);
