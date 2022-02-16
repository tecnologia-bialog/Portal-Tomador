import React from 'react';





export function DynamicFilter(list,filters){

                    if (filters.length === 0){return list}

                    return  list.filter((item)=> {
                            let filter_={};
                            let count = 0;
                            return filters.reduce((acc, filter)=>{
                                    try{
                                        if (filter.key ==='tipo' || filter.key ==='status' || filter.key ==='finalidade' ) {
                                            acc = filter.value.value === item[filter.key].value;
                                        }else {
                                            acc = filter.value.slug === item[filter.key].slug;
                                        }
                                        filter_[filter.key] = acc;

                                        count = filters.filter(item_ => filter_[item_.key] === true ).length;

                                    }catch (e) {

                                    }

                                    if (count === filters.length ){
                                        return true;
                                    }else{
                                        return false;
                                    }

                            },false);
                    });
}

export function DnamicFilterComplex(list,filters,dateField = 'createdAt'){

                if (filters.length === 0){return list}

                return  list.filter((item)=> {
                        let filter_={};
                        return filters.reduce((acc, filter)=>{
                                try{
                                    if (item[filter.key].value) {
                                        acc = filter.value.value === item[filter.key].value;
                                    }
                                    if (item[filter.key].slug) {
                                        acc = filter.value.slug === item[filter.key].slug;
                                    }
                                    if (filter.key === dateField) {


                                        let diff_days = diff.get('days');
                                        let diff_hours = diff.get('hours');

                                        if(filter.value.value === 1){
                                             acc = diff_days === 0;
                                        }

                                        if(filter.value.value === 2){
                                             acc = diff_days === 1;
                                        }
                                        if(filter.value.value > 2){
                                             acc = diff_days <= filter.value.value;
                                        }
                                        console.log('now',diff_days,filter.value.value,acc);
                                    }


                                }catch (e) {
                                        console.log('filter erro',e.message)
                                }

                                filter_[filter.key] = acc;

                                let count = filters.filter(item_ => filter_[item_.key] === true ).length;
                                if (count === filters.length ){
                                    return true;
                                }else{
                                    return false;
                                }

                        },false);
                });
  };
