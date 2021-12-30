export interface Account
{
  name: string,
  favorite?: boolean,
  id_account: number
}

export interface Accounts {
  current: Account,
  others: Account[]
}

export interface AccountsResponse {
  accounts: Accounts
}
