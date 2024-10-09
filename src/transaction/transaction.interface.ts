export interface ITransaction {
  id: number;
  amount: number;
  transactionType: string;
  transactionDate: Date;
  sourceAccountId: number;
  destinationAccountId: number;
}
