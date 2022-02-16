import React from 'react';
let _ = require('lodash');


export function findBySlug(list,slug){

    try{
        return list.filter(item_ => item_.slug  === slug)[0];
    }catch (e) {
        return {}
    }

};

export function findById(list,id){

    try{
        return list.filter(item_ => item_.id  === id)[0];
    }catch (e) {
        return {}
    }

}



export function ObjectToArray(obj,tipo='values'){

            let array = [];
            try{
                if(tipo ==='values'){
                    array = Object.values(obj);
                }else{
                    array = Object.keys(obj);
                }
            }catch (e) {

            }
            return array;
}

export function ObjectToArrayComplex(obj){

            let array_values = [];
            let array_keys =[];
            let out = [];
            let count = 0;

            try{
                array_values = Object.values(obj);
                array_keys  = Object.keys(obj);
            }catch (e) {
                return {};
            }

            array_values.forEach(function(grupo){
                out.push({key:array_keys[count],value:grupo});
                count++;
            });

            return out;
}


export function ErroLine(e){
    if (e){ return  true} return false
}












