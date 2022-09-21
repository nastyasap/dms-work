import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DailyTableType} from '../../api/api';

interface InitialState {
    dailyTable: DailyTableType[];
    isLoading: boolean;
    id: number | null;    
}
const initialState: InitialState = {
    dailyTable: [],
    isLoading: false,
    id: null,
}

export const dailyTableSlice = createSlice({
    name: 'dailyTable',
    initialState: initialState,
    reducers: {
        addRow(state, action: PayloadAction<DailyTableType>) {
            state.dailyTable.push(action.payload)
        },
        loadTableRequest(state, action: PayloadAction<number>) {
            state.isLoading = true
            state.id = action.payload
        },
        loadTableSucess(state, action: PayloadAction<DailyTableType[]>) {
            state.isLoading = false
            state.dailyTable = action.payload
        },
        updateRow(state, action: PayloadAction<{ data: Partial<DailyTableType>, rowId: number }>) {
            const index = state.dailyTable.findIndex(obj => obj.rowId === action.payload.rowId)
            state.dailyTable[index] = {...state.dailyTable[index], ...action.payload.data}
        }

    }
})
