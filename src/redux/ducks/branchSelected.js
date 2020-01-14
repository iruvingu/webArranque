import { createActions, createReducer } from 'reduxsauce'

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    selectBranchOffice: ["branchOffice"]
})

/**
 * handlers
 */
const INITIAL_STATE = {};

const selectBranch = (state = INITIAL_STATE, { branchOffice }) => ({
    ...state,
    branchOffice 
})

const HANDLERS = {
    [Types.SELECT_BRANCH_OFFICE]: selectBranch,
}

export const selectBranchReducer = createReducer(INITIAL_STATE, HANDLERS)
