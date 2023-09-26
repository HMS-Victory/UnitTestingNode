const assert=require('assert');

describe('bar_test.js', ()=>{
    context('function to be tested', ()=>{
        it('should do something', ()=>{
            assert.equal(1,1);
            console.log("DNV:", process.env.NODE_ENV);

            if(process.env.NODE_ENV=='development'){
                console.log('DEVELOPMENT MODE');
            }
        });
        it('should do something else', ()=>{

            assert.deepEqual({name:'joe'}, {name: 'joe'});
        })
        it('this is a pending test');
    });
    context('another function', ()=>{
        it('should do something')
    });
});