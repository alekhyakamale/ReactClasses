const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let formSchema = new Schema({
              email: String,
              loan: String,
              other_loan: String,
              addToLoan: String,
              balance: String,
              living: String,
              living_more: String,
              residence: String,
              dependents: String,
              dependents_more: String,
              dob: String,
              salary: String,
              incomeper: {
                type: String,
                default: "Month"
              },
              afterTax: {
                type: Boolean,
                default: false
              },
              allowances: String,
              rental: String,
              additional: String,
              utilities: String,
              utilitiesPer: {
                  type: String,
                  default: "Month"
              },
              household: String,
              householdPer: {
                  type: String,
                  default: "Month"
              },
              tv: String,
              tvPer:{
                type: String,
                default: "Month"
            },
              other: String,
              otherPer: {
                type: String,
                default: "Month"
            },           
},
{
  timestamps: true
}

)
module.exports = mongoose.model('Form', formSchema);

