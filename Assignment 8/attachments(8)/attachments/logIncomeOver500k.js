/*
   Added the constant threshold to easily be able to change it one place if it is needed later.
 */
const threshold = 500000;

/*
    Using "person of taxForms" gives me the value of the array, while "person in taxForms" would give me the index
 */
for (let person of taxForms)
{
    if (person.income > threshold)
    {
        console.log(person.realName)
    }
}