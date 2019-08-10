import axios from 'axios';
// import { saveAs } from 'file-saver';

// export async function postSale(userid, invoiceDets, invoiceid, invoiceTotals) {
//     const { data } = await axios.post('/api/saveinvoice',{userid, invoiceDets: {...arrayFromObjectStrings(invoiceDets), ...invoiceTotals} , invoiceid})
//     console.log(data);
    
//     if(!data._id) {return {
//         type: 'ERROR',
//         error: 'failed saving sales details'
//     }}

//     if(!invoiceid) {
//         return {
//             type: 'SALE_CREATED',
//             data,
//             insertedId: data._id,
//         };
//     }
    
//     return {
//         type: 'POST_SALEDETS',
//         data,
//         insertedId: data._id,
//     };
// }

// export async function getInvoice(userid, invoiceid) {
//     const { data } = await axios.post('/api/getinvoice',{userid, invoiceid})
//     const {_id, ...rest} = data
    
//     return {
//         type: 'GET_SALEDETS',
//         insertedId: _id,
//         rest,
//     };
// }

export async function register(details) {

    const { data } = await axios.post('/api/register',details)    
    console.log(data);
    return {
        type: 'REGISTER',
        userid: data._id,
        email: data.email,
    };
}

export async function login(details) {
    const {data} = await axios.post('/api/login',details)
    console.log(data);
    
    return {
        type: 'LOGIN',
        userid: data._id,
        email: data.email,
    };
}

// export async function isLoggedIn() {
//     const {data} = await axios.get(`/api/isloggedin`)
//         return {
//             type: 'LOGIN',
//             userid: data._id,
//             username: data.username,
//             company: data.company,
//             error: null,
//             salesList: data.saleslist || [],
//             templateArray: data.templateArray,
//         };
//     }

// export function toggleSettings() {
//     return {
//         type: 'TOGGLE_SETTINGS',
//     };
// }

export function toggleSidebar() {
    return {
        type: 'TOGGLE_SIDEBAR',
    };
}

// export async function saveSettings(userid, data) {
//     const response = await axios.post('/api/updatesettings',{userid, data})
//     if(response.data.success) {
//         return {
//             type: 'SET_SETTINGS',
//             ...data
//         };
//     }else{
//         console.log('set settings error');   
//     }
// }

// export async function setCurrentSale(saleid) {
//     //get id
//     return {
//         type: 'SET_CURRENTSALE',
//         saleid
//     };
// }

// export async function submitTemplate (template) {
//     const {data} = await axios.post('/api/newtemplate',template)
//     console.log(data);
    
//     return {
//         type: 'SUBMIT_TEMPLATE',
//         templateArray: data.templateArray
//     };
// }

// export function printInvoice(e, userid, invoiceDets, invoiceid = null, totals) {
//     axios.post('/api/printinvoicedocx',{userid, invoiceDets:{...invoiceDets, ...totals}, invoiceid, templateid: e.target.id})
//         .then(resp => {
//             return axios.get('/api/fetchinvoice/'+resp.data.file, {responseType: 'blob'})
//         })
//         .then((res) => {
//             const docxBlob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
//             saveAs(docxBlob, 'generatedDocument.docx')
//         })
    
//     return {
//         type: 'PRINT_FINISHED'
//     };
// }

// function arrayFromObjectStrings (items) {
//     const results = {invoiceLines: []}
//     for(const item in items) {
//       if(item.includes('line_')){
//         const splitItem = item.split('_')
//         const index = Number(splitItem[1])-1
//         if(!results.invoiceLines[index]){
//           results.invoiceLines[index] = {}
//         }
//         results.invoiceLines[index][splitItem[2]] = items[item]
//       }else{
//         results[item] = items[item]
//       }
//     }
//     return results
// }

