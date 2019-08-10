const address = {
  name: 'String',
  phone: 'String',
  addressLineOne: 'String',
  addressLineTwo: 'String',
  postcode: 'String',
  city: 'String',
}

const date = '01-01-2099'

const product = {
  title: 'prodt'
}

const sale = {
  status: 'draft',
  owner: 'xxx',
  saleId: 'xxx',
  saleNumber: 'S-0123',
  billingDetails: address,
  shippingDetails: address,
  shippingDate: date,
  invoiceDate: date,
  includingTax: true,
  paymentTerms: 'terms',
  dueDate: date,
  currency: 'USD',
  invoiceLines: [{
    amount: 1,
    sku: 'xxx',
    price: 34.6,
    product: product,
    vat: 20,
    total: 999
  }],
  privateNote: 'note',
  terms: 'terms',
  incVat: 999,
  totalVat: 999,
  totalExVat: 999,
  totalIncVat: 999,
}

const DEFAULT_STATE = {
  showSidebar: false,
  user: {},
  sales: [sale],
  products: [product],
  currentSale: {...sale},
}

export default function(state = {...DEFAULT_STATE}, action) {
  
  // if (action.type === 'POST_SALEDETS' || action.type === 'GET_SALEDETS' || action.type === 'SALE_CREATED') {
  //   const arrayIndexToReplace = state.salesList.findIndex(el => el._id === action.insertedId)
  //   const newSalesList = [...state.salesList]
  //   console.log(arrayIndexToReplace);
    
  //   arrayIndexToReplace === -1 ? newSalesList.push(action.data) : newSalesList[arrayIndexToReplace] = action.data
  //   state = {
  //     ...state,
  //     salesList: newSalesList,
  //     currentSale: action.insertedId,
  //   }
  // }
  
  // if (action.type === 'LOGIN' || action.type === 'REGISTER') {
  //   state = {
  //     ...state,
  //     userid: action.userid,
  //     username: action.username,
  //     company: action.company,
  //     error: action.error,
  //     salesList: action.salesList || [],
  //     templateArray: action.templateArray,
  //   }; 
  // }

  // if (action.type === 'SET_SETTINGS') {
  //   state = {
  //     ...state,
  //     ...action
  //   }; 
  // }

  // if (action.type === 'ERROR') {
  //   state = {
  //     ...state,
  //     error: action.error
  //   }; 
  // }

  // if (action.type === 'TOGGLE_SETTINGS') {
  //   const newSettingsState = !state.showSettings
  //   state = {
  //     ...state,
  //     showSettings: newSettingsState
  //   }; 
  // }

  if (action.type === 'TOGGLE_SIDEBAR') {
    const newSidebarState = !state.showSidebar
    state = {
      ...state,
      showSidebar: newSidebarState
    }; 
  }

  // if (action.type === 'SET_CURRENTSALE') {
  //   state = {
  //     ...state,
  //     currentSale: action.saleid
  //   }; 
  // }

  // if (action.type === 'GET_SALES_LIST') {
  //   console.log(action.sales)
  //   state = {
  //     ...state,
  //     saleslist: action.sales
  //   }; 
  // }

  // if (action.type === 'SUBMIT_TEMPLATE') {
  //   state = {
  //     ...state,
  //     templateArray: action.templateArray
  //   }; 
  // }

  return state;
}