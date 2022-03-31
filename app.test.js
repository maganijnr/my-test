function checkFive(a){
   if(isNaN(a)){
      throw new Error("Invalid number argument provided")
   }

   if(a == null){
      throw new Error("Invalid number argument provided")
   }

   if(typeof a == "string"){
      throw new Error("Invalid number argument provided")
   }

   if(a === 5){ 
      return `${a} is equal to 5.`;
   } else if(a >= 5){
      return `${a} is greater than 5.`;
   } else if(a === 0){
      return "0 is less than 5";
   } else {
      return `${a}is less than 5`
   }
}

it("should get the current state of 5", () => {
   expect(checkFive(5)).toEqual(`5 is equal to 5.`)
   expect(checkFive(10)).toEqual(`10 is greater than 5.`)
   expect(checkFive(2)).toMatch(`is less than 5`)
   expect(checkFive(0)).toMatchInlineSnapshot(`"0 is less than 5"`)

   expect(() => checkFive(NaN)).toThrow(new Error("Invalid number argument provided"))
   expect(() => checkFive(null)).toThrow(new Error("Invalid number argument provided"))
   expect(() => checkFive(null)).toThrowError(new Error("Invalid number argument provided"))
   expect(() => checkFive('morgan')).toThrowErrorMatchingInlineSnapshot(`"Invalid number argument provided"`)
})