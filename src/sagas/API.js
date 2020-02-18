import axios from 'axios'

export function loginUser(userData)
{
    const loginApiOptions = {
        method: 'POST',
        url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
        headers: {
            "Authorization":"Bearer YWRtaW46YWRtaW4=",
            "content-type": "application/json",
            "withcredentials":"true"
        },        
        data:{
            "username": userData.username,
            "password": userData.password
        }
    }

    return axios(loginApiOptions)
    .then((response) => {        
        const accessToken = response.data.access_token;   
        return accessToken;
       
    }, (error) => {
        throw new Error(error.response.data);
    });    
}



export function fetchProductData(productId)
{  
    const fetchProductApiOptions = {
        method: 'POST',
        url: 'http://dev-bepsy-api.objectedge.com/oe_commerce_api/solr/v1/search',
        headers: {            
            "content-type": "application/json",
            "Bepsy-SiteId" : "siteUS",
            "Bepsy-CatalogId" : "cloudCatalog",
            "Bepsy-PricelistId" : "defaultPriceGroup"           
        },        
        data:{
            "term": `${productId}`,
            "sortBy": "new asc",
            "page": 0,
            "recordsPerPage": 20,
            "heirarchical": [],
            "multiselect": [],
            "singleselect": [],
            "range": []
            }
        }
    

    return axios(fetchProductApiOptions)
    .then((response) => {        
        return response.data;       
    }, (error) => {
        throw new Error(error.response.data);
    });    
}

export function getProductData(productId)
{
    const getProductApiOptions = {
        method: 'GET',
        url: `http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/products/${productId}?includeErelatedProducts=true`,
        headers: {         
            "Bepsy-SiteId" : "siteUS",
            "Bepsy-CatalogId" : "cloudCatalog",
            "Bepsy-PricelistId" : "defaultPriceGroup"           
        }
    }  

    return axios(getProductApiOptions)
    .then((response) => {                
        return response.data;       
    }, (error) => {
        throw new Error(error.response.data);
    });    
}

export const API = {
    loginUser,
    fetchProductData,
    getProductData
}