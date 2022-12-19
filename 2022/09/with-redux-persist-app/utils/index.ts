import { set, get } from 'local-storage';
export const storageName = 'redux-state'

export const pushStateToStorage = (data) => {
    set(storageName, data)
}

export const fetchStateToStorage = () => {
    get(storageName)
}

