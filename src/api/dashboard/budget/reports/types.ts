export interface GetAllTransferBudgetQueryParams {
  name?: string;
  sectionId?: number;
  pageNumber?: number;
  pageSize?: number;
}

export interface SuggestedBudgetData {

  id: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Add this line

  // other properties

}

// export interface SuggestedBudgetData {
//   id: number;
//   createdBy?: number;
//   createdByUser?: ApplicationUser;
//   createdAt?: string;
//   updatedBy?: number;
//   updatedByUser?: ApplicationUser;
//   updatedAt?: string;
//   deletedBy?: number;
//   deletedByUser?: ApplicationUser;
//   deletedAt?: string;
//   isDeleted?: boolean;
//   doorLookUpId?: number;
//   doorLookUp?: LookUp;
//   sectionLookUpId?: number;
//   sectionLookUp?: LookUp;
//   economicClassificationNumber?: string;
//   nextYearBudget?: number;
//   previousApproved?: number;
//   totalPreviousApproved?: number;
//   previousOutgoing?: number;
//   previousAvailable?: number;
//   currentYear?: number;
//   lastYear?: number;
//   notes?: string;
// }

export interface ApplicationUser {
  id: number;
  userName?: string;
  normalizedUserName?: string;
  email?: string;
  normalizedEmail?: string;
  emailConfirmed: boolean;
  passwordHash?: string;
  securityStamp?: string;
  concurrencyStamp?: string;
  phoneNumber?: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd?: string;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  imageUrl?: string;
  createdBy?: number;
  createdAt?: string;
  activatedAt?: string;
  resetCode?: string;
  resetCodeExpiration?: string;
}

export interface LookUp {
  id: number;
  name: string;
}

export interface SuggestedBudgetResponse {
  isDone: boolean;
  outId: number;
  data: SuggestedBudgetData[];
  message: string;
  statusCode: number;
  totalCount: number;
  completedTotalCount?: number;
}