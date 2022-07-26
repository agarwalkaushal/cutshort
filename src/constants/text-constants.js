export const SPLASH_TITLE = 'Transfer That Is Safe'
export const SPLASH_SUBTITLE = 'You have nothing to be scared about, we got you covered.'
export const START_BANKING = 'Start banking'
export const USER_GREETING = (name) => { return 'Hello, ' + name }
export const ADD_MONEY = 'Add money'
export const BALANCE_IS = 'Your current balance is'
export const formatAmount = (amount) => {
    return '₹' + new Intl.NumberFormat('en-IN').format(amount)
}
export const REQUEST_MONEY = 'Request money'
export const SEND_MONEY = 'Send money'