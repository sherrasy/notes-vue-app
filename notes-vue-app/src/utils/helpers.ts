export const getNoteId = (): number => Math.floor(Math.random() * (100 - 1 + 1)) + 1

export const checkValidity = (value: string) => {
    if (value.length > 0 && value.trim() !== '') {
      return true
    }
    return false
  }