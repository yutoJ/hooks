const operationLogs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OPERATION_LOG':
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      const operationLog = {
        key: id,
        description: action.description,
        operatedAt: action.operatedAt,

      }
      return [operationLog, ...state]
    case 'DELETE_ALL_OPERATION_LOGS':
      return []
    default:
      return state
  }
}

export default operationLogs